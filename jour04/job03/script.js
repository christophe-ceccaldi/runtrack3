document.addEventListener("DOMContentLoaded", async function() {
    console.log('DOM fully loaded and parsed'); 
    //récupérer les éléments du formulaire//                                                                           
    let form = document.querySelector('form');
    let id = document.querySelector('#id');
    let nom = document.querySelector('#nom');
    let type = document.querySelector('#type');
    let filtrer = document.querySelector('#filtrer');
    let resultat = document.querySelector('#resultat');
    // ajout d'un Event listener submit sur le formulaire// 
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let url = 'pokemon.json';
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                let idValue = id.value;
                let nomValue = nom.value;
                let typeValue = type.value;
                let result = data.filter(function(pokemon) {
                    if (idValue !== "" && pokemon.id !== parseInt(idValue)) {
                        return false;
                    }
                    if (nomValue !== "" && pokemon.name.english.toLowerCase() !== nomValue.toLowerCase()) {
                        return false;
                    }
                    if (typeValue !== "Choisir un type" && !pokemon.type.includes(typeValue)) {
                        return false;
                    }
                    return true;
                });
               
                resultat.innerHTML = `<table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>HP</th>
                    <th>Attack</th>
                    <th>Defense</th>
                    <th>Sp. Attack</th>
                    <th>Sp. Defense</th>
                    <th>Speed</th>
                </tr>
                ${result.map(function(pokemon) {
                    return `<tr>
                        <td>${pokemon.id}</td>
                        <td>${pokemon.name.english}</td>
                        <td>${pokemon.type}</td>
                        <td>${pokemon.base.HP}</td>
                        <td>${pokemon.base.Attack}</td>
                        <td>${pokemon.base.Defense}</td>
                        <td>${pokemon.base['Sp. Attack']}</td>
                        <td>${pokemon.base['Sp. Defense']}</td>
                        <td>${pokemon.base.Speed}</td>
                    </tr>`;
                }).join('')}
                </table>`;

            })
            .catch(function(error) {
                console.log(error);
        });

    })
});