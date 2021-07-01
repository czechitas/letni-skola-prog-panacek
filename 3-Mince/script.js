/* Naprogramuj vlastní hru s panáčkem */

var objektPanacek;
var panacekX;
var panacekY;
var panacekSirka;
var panacekVyska;

/* najdeme panáčka na stránce */
objektPanacek = document.querySelector("#panacek");

/* později budeme potřebovat i rozměry panáčka */
panacekSirka = 64;
panacekVyska = 70;

/* nastavíme panáčka na novou pozici */
panacekX = 400;
panacekY = 300;
objektPanacek.style.left = panacekX + "px";
objektPanacek.style.top = panacekY + "px";


var objektMince;
var minceX;
var minceY;
var minceSirka;
var minceVyska;

/* najdeme minci na stránce a uložíme si její velikost*/
objektMince = document.querySelector("#mince");
minceSirka = 32;
minceVyska = 32;


/* umísti minci na náhodnou pozici */
minceX = Math.floor(Math.random() * (document.documentElement.clientWidth - minceSirka));
minceY = Math.floor(Math.random() * (document.documentElement.clientHeight - minceVyska));
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
