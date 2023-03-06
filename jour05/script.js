// Charger le DOM
document.addEventListener("DOMContentLoaded", function () {
    /* console.log("DOM chargé"); */
    
    // Récupérer les éléments du DOM
    const loginBtn = document.querySelector("#loginBtn");
    const registerBtn = document.querySelector("#registerBtn");
    const displayData = document.querySelector("#displayData");

    
    //Ajouter un écouteur d'événement au clic sur le bouton "S'inscrire"
    registerBtn.addEventListener("click", (e) => {
        e.preventDefault();
        // Fetch le formulaire d'inscription depuis inscription.php
        fetch("inscription.php")
        .then(response => response.text())
        .then(data => {
            document.querySelector("#formData").innerHTML = data;
        });
    });

    // Add a click event listener to the login button
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        // Fetch the login form from connexion.php
        fetch("connexion.php")
        .then(response => response.text())
        .then(data => {
            // Insert the fetched form into the displayData div
            document.querySelector("#formData").innerHTML = data;
        });
    });

    // Handle the form submission event
    const formData = document.querySelector("#formData");
    formData.addEventListener("submit", async (e) => {
        e.preventDefault();
        // Get the form data
        const form = new FormData(e.target);
        // Send the form data to the PHP script
        const response = await fetch("verification.php", {
            method: "POST",
            body: form
        })
        /* console.log(response); */

        // Handle the response
        const data = await response.text();
        if(data != "Utilisateur enregistré avec succès") {
            // Insert the fetched form into the displayData div
            document.querySelector("#errorDisplay").innerHTML = "Erreur lors de l'enregistrement de l'utilisateur"
            } else {
                document.querySelector("#errorDisplay").innerHTML = "Utilisateur enregistré avec succès";
                windows.location.href = "connexion.php";
            }
        const errorDisplay = document.querySelector("#errorDisplay");
        errorDisplay.innerHTML = data;

        if (data.success) {
            if (data.action === "register") {
                // If the registration was successful, show a message
                document.querySelector("#formData").innerHTML = "Inscription réussie ! Vous pouvez maintenant vous connecter.";
                // Redirect to connexion.php
                window.location.href = "connexion.php";
            } else if (data.action === "login") {
                // If the login was successful, show a message
                document.querySelector("#formData").innerHTML = `Bonjour ${data.name} !`;
                // Redirect to index.php
                window.location.href = "index.php";
            }
        }
    });
});