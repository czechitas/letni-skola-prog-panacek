/* Naprogramuj vlastní hru s panáčkem */

var objektPanacek;
var panacekX;
var panacekY;
var panacekSirka;
var panacekVyska;

// Najde panáčka na stránce a uloží ho do proměnné objektPanacek
objektPanacek = document.querySelector("#panacek");

// Do proměnných panacekSirka a panacekVyska si nachystáme velikost panáčka.
// Zatím to nevyužijeme, ale bude se to hodit později  
panacekSirka = 64;
panacekVyska = 70;

// Nastaví panáčka na novou pozici
panacekX = 400;
panacekY = 300;
objektPanacek.style.left = panacekX + "px";
objektPanacek.style.top = panacekY + "px";


var objektMince;
var minceX;
var minceY;
var minceSirka;
var minceVyska;

// Najde minci na stránce a uloží ji do proměnné objektMince
objektMince = document.querySelector("#mince");

// Do proměnných minceSirka a minceVyska si nachystáme velikost mince
minceSirka = 32;
minceVyska = 32;


// Umístí minci na náhodnou pozici
minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka));
minceY = Math.floor(Math.random() * (window.innerHeight - minceVyska));
objektMince.style.left = minceX + "px";
objektMince.style.top = minceY + "px";


function priStiskuKlavesy(klavesa) {
  if (klavesa.key === "ArrowRight") {
    panacekX = panacekX + 10;
  }

  if (klavesa.key === "ArrowLeft") {
    panacekX = panacekX - 10;
  }

  if (klavesa.key === "ArrowUp") {
    panacekY = panacekY - 10;
  }

  if (klavesa.key === "ArrowDown") {
    panacekY = panacekY + 10;
  }

  objektPanacek.style.left = panacekX + "px";
  objektPanacek.style.top = panacekY + "px";
}
