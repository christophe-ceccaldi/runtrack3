function jourtravaille(dateStr){

  const holidaysfrench = { 
  "1,0": "jourdelan",
  "7,3": "vendredi saint",
  "10,3": "lundi de paques",
  "1,4": "fête du travail",
  "8,4": "armistice",
 "18,4": "l'ascension",
  "29.4":"lundi saint",
  "14.6": "fetenationale",
  "15,7": "jours de l'assomption",
  "1,10": "toutsaint",
  "11,10": "jours de l'armistice",
  "25,11": "noel",
 };

 var date = new Date(dateStr);

 var jourdesemaine = date.getDay(); // 2
 var jourdumois = date.getDate(); // 17
 var moisdelannee = date.getMonth(); // 0
 var lannee = date.getFullYear(); // 2023

 var combinedDate = jourdumois + "," + moisdelannee; // "17,0"

 console.log(combinedDate);

 if (jourdesemaine == 6 || jourdesemaine == 0) {
  console.log("c'est le week end");

 } else if (holidaysfrench[combinedDate]){
  console.log("c'est un jour férié");
 }else {
  console.log("c'est un jour de travail")
 }


}
jourtravaille("2022-11-11");
  
