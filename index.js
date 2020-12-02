////////////////////// update html content////////////////////////
// console.log("this page is loading");
// var countdownElement = document.getElementById('countdown');
// var bgImageElement = document.getElementById('bg-image');

// var initialCoutdownVal = countdownElement.innerHTML ; 
// setInterval(function(){
//     initialCoutdownVal = 
//     initialCoutdownVal >0 ? 
//     initialCoutdownVal -1 : 0;

//     countdownElement.innerHTML = 
//       initialCoutdownVal;
//       var backImgPath = initialCoutdownVal %2 ===0 ? './images/Money_heist.jpg' : './images/Argetina_Mount-fitZ-roy-in-los-glaciares-national-park.jpg'

//     bgImageElement.src =backImgPath;
// },1000);
///////////////////////////// End //////////////////////////////

// ////////update styles of htmml elements//////
//  var countdownElement = document.getElementById('countdown');
//  var backImgPath= document.getElementById('bg-image')
//  var initialCoutdownVal = countdownElement.innerHTML;


// setInterval(function(){
//     initialCoutdownVal = initialCoutdownVal>0 ? initialCoutdownVal -1 : 0;
//     countdownElement.innerHTML=initialCoutdownVal;
//     countdownElement.style.fontSize=initialCoutdownVal * 100 + "px";
//     backImgPath.style.width = initialCoutdownVal * 10 + "%";
// },1000);
/////////end///////
///////// Event start//////
var btn = document.getElementById("btn-click");
function onBtnClick() {
  btn.style.backgroundColor= 'lightcoral'
}  
//btn.addEventListener('click',onBtnClick)

//////Event End//////