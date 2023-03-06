<?php
session_start();
require_once 'dbConnect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    ///////////////////////////////////////////////////////////
    // REGISTER VALIDATION
    ///////////////////////////////////////////////////////////
    if (isset($_POST['action']) && $_POST['action'] === 'register') {
        // initialiser les variables d'erreur
        $errors = array();
        $response = array();

        // Vérification des champs
        if (empty($_POST['nom'])) {
            $errors['nom'] = "Le Nom est requis";
        }
        if (empty($_POST['prenom'])) {
            $errors['prenom'] = "Le Prenom est requis";
        }
        if (empty($_POST['email'])) {
            $errors['email'] = "L'Email est requis";
        }
        if (empty($_POST['password'])) {
            $errors['password'] = "Le mot de passe est requis";
        }
        if (empty($_POST['password2'])) {
            $errors['password2'] = "Confirmez le mot de passe";
        }
        if ($_POST['password'] !== $_POST['password2']) {
            $errors['password'] = "Les mots de passe ne correspondent pas";
        }
        // Vérification de la validité email
        $email_pattern = '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/';
        if (!preg_match($email_pattern, $_POST['email'])) {
            $errors['email'] = "Email invalide";
        }
        // Vérification de la validité du mot de passe
        $password_pattern = "/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/";
        if (!preg_match($password_pattern, $_POST['password'])) {
            $errors['password'] = "Le mot de passe doit contenir au moins 8 caractères, une lettre et un chiffre";
        }
        // Vérification de l'unicité de l'email
        $query = "SELECT email FROM utilisateurs WHERE email = :email";
        $stmt = $pdo->prepare($query);
        $stmt->execute(['email' => $_POST['email']]);
        if ($stmt->rowCount() > 0) {
            $errors['email'] = "Cet email est déjà utilisé";
        }
        // Si aucune erreur, insérer l'utilisateur dans la base de données        
        if (count($errors) == 0) {
            // hasher password
            $_POST['password'] = password_hash($_POST['password'], PASSWORD_BCRYPT);
            // Insérer l'utilisateur dans la base de données
            $query = "INSERT INTO utilisateurs (nom, prenom, email, password) VALUES (:nom, :prenom, :email, :password)";
            $stmt = $pdo->prepare($query);
            $stmt->bindValue(':nom', $_POST['nom'], PDO::PARAM_STR);
            $stmt->bindValue(':prenom', $_POST['prenom'], PDO::PARAM_STR);
            $stmt->bindValue(':email', $_POST['email'], PDO::PARAM_STR);
            $stmt->bindValue(':password', $_POST['password'], PDO::PARAM_STR);
            $stmt->execute();

            // Retourner une réponse de succès au client
            echo "Utilisateur enregistré avec succès";
            // Redirection vers la page de connexion
            header('Location: connexion.php');
            exit();
        } else {
        // Retourner une réponse d'erreur au client
            echo "Erreur d'enregistrement";
            exit();
        }

        //////////////////////////////////////////////////////////////////
        // LOGIN VALIDATION
        //////////////////////////////////////////////////////////////////
    } else if (isset($_POST['action']) && $_POST['action'] === 'login') {   
        // initialiser les variables d'erreur
        $errors = array();
        $response = array();

        // Vérification des champs
        if (empty($_POST['email'])) {
            $errors['email'] = "L'Email est requis";
        }
        if (empty($_POST['password'])) {
            $errors['password'] = "Le mot de passe est requis";
        }

        // Vérification de la validité email
        $email_pattern = '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/';
        if (!preg_match($email_pattern, $_POST['email'])) {
            $errors['email'] = "Email invalide";
        }

        // Vérification de l'email et du mot de passe
        $query = "SELECT * FROM utilisateurs WHERE email = :email";
        $stmt = $pdo->prepare($query);
        $stmt->execute(['email' => $_POST['email']]);
        if ($stmt->rowCount() > 0) {
            $user = $stmt->fetch();
            if(password_verify($_POST['password'], $user['password'])) {
                $_SESSION['user'] = $user['email'];
                echo "Connexion réussie";
                exit();
            } else {
                $errors['password'] = "Mot de passe incorrect";
            }
        } else {
            $errors['email'] = "Email incorrect";
        }

        if (count($errors) == 0) {
            // Retourner une réponse de succès au client
            echo "Utilisateur connecté avec succès";
            header('Location: index.php');
            exit();
        } else {
            // Retourner une réponse d'erreur au client
            echo "Erreur de connexion";
            exit();
        }
        // Fin de la validation de la connexion
    }
}
?>