<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch jour04 job03</title>
    
</head>
<body>
    <h3>Jour04 job03</h3>
    <H3>Fetch</H3>
  <p> Téléchargez le fichier suivant : pokemon.json</p> 
<p>Créez un formulaire permettant de trier ces données.</p>
<p>Il doit contenir les champs suivants <br>
● id (input type text),<br>
● nom (input type text),<br>
● type (liste déroulante  ),<br>
● filtrer (input type button).<br>
Lorsque l’on clique sur “filtrer”, le script doit à l’aide de Fetch, récupérer le contenu du
fichier et lister les éléments répondant aux critères sélectionnés en les affichant sur une
page HTML.</p>
    <div class="container">
        <form>
            <input type="text" id="id" placeholder="ID">
            <input type="text" id="nom" placeholder="Nom">
            <select id="type">
                <option>Choisir un type</option>
                <option>Fire</option>
                <option>Flying</option>
                <option>Grass</option>
                <option>Ground</option>
                <option>Bug</option>
                <option>Dragon</option>
                <option>Electric</option>
                <option>Fairy</option>
                <option>Fighting</option>
                <option>Ghost</option>
                <option>Ice</option>
                <option>Normal</option>
                <option>Poison</option>
                <option>Psychic</option>
                <option>Rock</option>
                <option>Steel</option>
                <option>Water</option>
            </select>
            <input type="submit" id="filtrer" value="filtrer">
        </form>
        <h5 class="center">* Pour filtrer, veuillez remplir au moins un champ</h5>
        <table>
            <thead>
                <tr>  </tr>
            </thead>
            <tbody id="resultat">
            </tbody>
        </table>
        
    </div>
    <script src="script.js"></script>
</body>
</html>
