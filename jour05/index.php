<?php require_once 'dbConnect.php' ?>
<script src="script.js"></script>

<?php

    if(isset($_SESSION['id'])){
        echo 'Bonjour, ' . $_SESSION['prenom'] . '!';
    }
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jour05 - Job01 - Formulaire de connexion JS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Formulaire de connexion JS</h1>
    
    <div class="row">
        <button id="loginBtn">Connexion</button>
        <button id="registerBtn">Inscription</button>
    </div>

    <div id="formData"></div>
    <p class="errors" id="errorDisplay"></p>

    <script src="script.js"></script>
</body>
</html>