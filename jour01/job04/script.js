function bissextile(annee){
    if (annee % 4  == 0 && annee % 100 != 0){
        console.log(annee)
    } else{
        console.log("not bisextile")
    }
};




bissextile(2005);