function showhide(){
    if(document.getElementById("text").innerHTML){
  
      document.getElementById("text").innerHTML = "";
    }else {
      document.getElementById("text").innerHTML = "L'important n'est pas la chute, mais l'atterrissage.";
  
    }
    
  
  }
  document.getElementById("button").addEventListener("click",showhide);