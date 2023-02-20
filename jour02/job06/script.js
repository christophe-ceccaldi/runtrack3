const contnt = document.body;  // recupérer la variable dans textarea

let refreshTimer;

let konami = Array();  // tableau pour stoké les input"keyup"
document.body.addEventListener('keyup', function(event) { // addEventListener quand "keyup"
  
  clearTimeout(refreshTimer);

  let result = false;
  let resultCompeur = 0;  
  const key = event.key;
  let compt = konami.length; //  compteur tail de tableau input

  konami.push(key)  // ajouter l'evenement au tableau


  if (compt >= 10){  //  if compteur > 10 réinitialiser le tableu et le compteur
    konami = Array();
    resultCompeur = 0;
    contnt.style.backgroundColor = 'white';

  }
  console.log(compt);
  console.log(konami);

  if(compt >= 9){  
  
      const codeKonami = [  //  le code konami
        'ArrowUp', 'ArrowDown', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'
      ];  //  comparer entre les inputs et le code konani et compté le nombre de match
      for(i=0; i<10; i++){
        if(konami[i] == codeKonami[i]){
            resultCompeur++;
        }
      if(resultCompeur == 10){

        result = true;
      }
      }
      if (result == true){
            // changement de background color si le code Konami est bien rentrer
            contnt.style.backgroundColor = '#0693e3';
      
      }
  }
      // timer pour rafriche et réinitialiser le tableu et le compteur si 3 seconde
  refreshTimer = setTimeout(() => {
    konami = Array()
    resultCompeur = 0
    contnt.style.backgroundColor = 'white';

  }, 3000);
  

})