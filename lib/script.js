console.log("We're live!");
 

    function keyU(e) {
     e.preventDefault();
     // element.textContent = ` ${e.code}`;
      keyTextU = ` ${e.key}`;
      //console.log(e);
      //let textInput =document.querySelector("#input").value;
      //let shine = document.createElement('.active'); 
      //let divOn = document.querySelector('div.keyTextU');
      //divOn.appendChild(shine);
      //console.log(divOn);
      console.log(keyTextU);
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