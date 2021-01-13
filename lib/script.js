console.log("We're live!");
 

    function keyU(e) {
        e.preventDefault();
     // element.textContent = ` ${e.code}`;
      keyTextU = ` ${e.key}`;
      //console.log(e);
      let textInput =document.querySelector("#input").value;
      let shine = document.createElement('.active'); 
      let divOn = document.querySelector('div');
      divOn.appendChild(shine);
      console.log("add");
      console.log(keyTextU);
    }

    function keyDw(e) {
        e.preventDefault();
    keyTextD= ` ${e.key}`;
    console.log(keyTextD);
    let textInput =document.querySelector("#input").value;
    let shine = document.createElement('.active'); 
    let divOn = document.querySelector('div');
    divOn.removeChild(shine);
    console.log("remove");
    }
    document.addEventListener('keyup', keyU);
    document.addEventListener('keydown', keyDw);