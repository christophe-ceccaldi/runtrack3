function bisextile(annee){
    if (annee % 4  == 0 && annee % 100 != 0){
        console.log(annee)
    } else{
        console.log("not bisextile")
    }
};




bisextile(2005);