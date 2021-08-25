/* Naprogramuj vlastní hru s panáčkem */

let objektPanacek;
let panacekX;
let panacekY;
let panacekSirka;
let panacekVyska;

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


let objektMince;
let minceX;
let minceY;
let minceSirka;
let minceVyska;

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

// Vytvoří počítadlo skóre a nastavíme ho na nulu
let pocetSkore;
pocetSkore = 0;

// Najde na stránce prvek, kam se bude skóre dopisovat
let objektSkore;
objektSkore = document.querySelector("#skore");


function priStiskuKlavesy(klavesa) {
  if (klavesa.key === "ArrowRight") {
    panacekX = panacekX + 10;
    objektPanacek.src = "obrazky/panacek-vpravo.png";
  }

  if (klavesa.key === "ArrowLeft") {
    panacekX = panacekX - 10;
    objektPanacek.src = "obrazky/panacek-vlevo.png";
  }

  if (klavesa.key === "ArrowUp") {
    panacekY = panacekY - 10;
    objektPanacek.src = "obrazky/panacek-nahoru.png";
  }

  if (klavesa.key === "ArrowDown") {
    panacekY = panacekY + 10;
    objektPanacek.src = "obrazky/panacek.png";
  }

  objektPanacek.style.left = panacekX + "px";
  objektPanacek.style.top = panacekY + "px";

  // Zjistí, zda dochází ke kolizi objektPanacek a objektMince
  // tj. zda se překrývají dva obdélníky o známých souřadnicích
  if (!(panacekX + panacekSirka < minceX ||
      minceX + minceSirka < panacekX ||
      panacekY + panacekVyska < minceY ||
      minceY + minceVyska < panacekY)) {

    // Přesune minci na novou náhodnou pozici
    minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka));
    minceY = Math.floor(Math.random() * (window.innerHeight - minceVyska));
    objektMince.style.left = minceX + "px";
    objektMince.style.top = minceY + "px";

    // Zvětší skore o 1
    pocetSkore = pocetSkore + 1;

    // Zobrazí v HTML prvku objektSkore obsah proměnné pocetSkore
    objektSkore.textContent = pocetSkore;
  }
}
