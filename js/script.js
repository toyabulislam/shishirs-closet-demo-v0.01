/*---------------------------------Menu Toggle-------------------------------------*/       
       
var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
       
function menutoggle()
       {
              if(MenuItems.style.maxHeight == "0px") { MenuItems.style.maxHeight = "200px"}
              else { MenuItems.style.maxHeight = "0px" }
       }


/*--------------------------------Product Gallery-----------------------------------*/


var ProductImg = document.getElementById ("productImg");
var SmallImg = document.getElementsByClassName ("small-img");

SmallImg[0].onclick = function() { ProductImg.src = SmallImg[0].src; }
SmallImg[1].onclick = function() { ProductImg.src = SmallImg[1].src; }
SmallImg[2].onclick = function() { ProductImg.src = SmallImg[2].src; }
SmallImg[3].onclick = function() { ProductImg.src = SmallImg[3].src; }


/*-------------------------------------Toggle Form----------------------------------*/

let A = document.getElementById('loginBtn');
let B = document.getElementById('signupBtn');

let X = document.getElementById('loginForm');
let Y = document.getElementById('signupForm');
let Z = document.getElementById('activeBtn');

B.addEventListener('click', function(){
       X.classList.add('trans-login');
       Y.classList.add('trans-signup');
       Z.classList.add('trans-btn');
});

A.addEventListener('click', function(){
       X.classList.remove('trans-login');
       Y.classList.remove('trans-signup');
       Z.classList.remove('trans-btn');
});
