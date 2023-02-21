<?php
// Jour04 - job04 - Interroger une base de données avec Fetch
/////////////////////////////////////////////////////////////

// Requête SQL pour récupérer les utilisateurs

// Connexion à la base de données
$host = "localhost";
$username = "root";
$password = "";
$dbname = "utilisateurs";

try {
  $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  // echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}


// Récupération des utilisateurs dans la base de données
$query = $conn->query('SELECT * FROM `utilisateurs`');
$utilisateurs = $query->fetchAll(PDO::FETCH_ASSOC);
// Affichage du résultat en JSON
echo json_encode($utilisateurs);
?>