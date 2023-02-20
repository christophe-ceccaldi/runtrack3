//definit une function qui prend en parametre une chaine JSON and a key//
function jsonValueKey(jsonString, key) {
    //utilise la méthode JSON.parse() pour convertir la chaîne JSON en un objet javascript//
    let jsonData = JSON.parse(jsonString);
    //renvoi la valeur de la proprièté correspondant à la clé//
    return jsonData[key];
  }
//défini avec des propriétés telles que le nom de l'entreprise, l'adresse, la ville, le nombre de membres du personnel et la date de création//
  

  let jsonString = '{"name": "La Plateforme_","address": "8 rue d\'hozier","city": "Marseille","nb_staff": "11","creation":"2019"}';
  //defini la valmeur de la clé comme city//
  let key = "city";
  //affiche dans la console la valeur de la key "city" donc "marseille" avec la fonction jsonValueKey//
  //avec la chaine JSON et la key comme paramètre//
  console.log(jsonValueKey(jsonString, key));