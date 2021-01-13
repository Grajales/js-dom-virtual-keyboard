console.log("We're live!");
 

    function keyU(e) {
     e.preventDefault();
      keyTextU = ` ${e.key}`;
      //keyTextU = "e";
      //console.log(e);
      //let textInput =document.querySelector("#input").value;
      //let shine = document.createElement('.active'); 
      //let divOn = document.querySelector('div.keyTextU');
      let divOn = document.querySelectorAll(".letter");
      divOn[15].style.color = "red"
      for (let i=0; i<divOn.length; i++){

        if (divOn[i]==keyTextU){
          divOn[i].style.color = "red";
        }
      }
      
      
      //document.querySelector(".letter").style.color="red";
      //divOn.appendChild(shine);
      //console.log(divOn);
      //console.log(keyTextU);
    }

    function keyDw(e) {
    //e.preventDefault();
    keyTextD= ` ${e.key}`;
    console.log(keyTextD);
    //let divOn = document.querySelector('div.keyTextD');
    //divOn.removeChild(shine);
    //console.log("remove");
    }
    document.addEventListener('keyup', keyU);
    document.addEventListener('keydown', keyDw);