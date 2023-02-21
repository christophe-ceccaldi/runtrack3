document.addEventListener("DOMContentLoaded", async function() {

    function updateUsers() {
        // Récupérer les utilisateurs avec fetch
        fetch('user.php')
        // Récupérer la réponse au format json
        .then(response => response.json())
        // Afficher les utilisateurs dans la console
        .then(utilisateurs => {
            console.log(utilisateurs);
            // déclarer la variable tbody
            let tbody = document.querySelector('#utilisateurs tbody');
            // Vider le tableau
            tbody.innerHTML = '';
            // Ajouter les utilisateurs dans le tableau
            for (let utilisateur of utilisateurs) {
                // Créer une ligne
                let tr = document.createElement('tr');
                // Ajouter les colonnes
                tr.innerHTML += `
                <td>${utilisateur.id}</td>
                <td>${utilisateur.nom}</td>
                <td>${utilisateur.prenom}</td>
                <td>${utilisateur.email}</td>
                `;
                // Ajouter la ligne au tableau
                tbody.appendChild(tr);
                console.log(utilisateur);
            }
        });
    };
    // Ajouter un écouteur d'événement sur le bouton
    const btn = document.querySelector("#update");
    btn.addEventListener("click", () => {
        // Mettre à jour les utilisateurs
        updateUsers();
    });
    updateUsers();
});