console.log("this page is loading");
var countdownElement = document.getElementById('countdown');
var bgImageElement = document.getElementById('bg-image');

var initialCoutdownVal = countdownElement.innerHTML ; 
setInterval(function(){
    initialCoutdownVal = 
    initialCoutdownVal >0 ? 
    initialCoutdownVal -1 : 0;

    countdownElement.innerHTML = 
      initialCoutdownVal;
      var backImgPath = initialCoutdownVal %2 ===0 ? './images/Money_heist.jpg' : './images/Argetina_Mount-fitZ-roy-in-los-glaciares-national-park.jpg'

    bgImageElement.src =backImgPath;
},1000);
