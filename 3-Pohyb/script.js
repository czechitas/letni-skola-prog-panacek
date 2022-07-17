/* Naprogramuj vlastní hru s panáčkem */

let visualniPanacek
let panacekX
let panacekY
let panacekSirka
let panacekVyska

// Najde panáčka na stránce a uloží ho do proměnné visualniPanacek
visualniPanacek = document.querySelector("#panacek")

// Do proměnných panacekSirka a panacekVyska si nachystáme velikost panáčka.
// Zatím to nevyužijeme, ale bude se to hodit později  
panacekSirka = 64
panacekVyska = 70

// Nastaví panáčka na novou pozici
panacekX = 400
panacekY = 300
visualniPanacek.style.left = panacekX + "px"
visualniPanacek.style.top = panacekY + "px"


// Nastaví souřadnice do proměnných panacekX a panacekY
panacekX = 20
panacekY = 10
// Přesune (zobrazí) panáčka na obrazovce na aktualizované souřadnice
visualniPanacek.style.left = panacekX + "px"
visualniPanacek.style.top = panacekY + "px"

// Zvýší souřadnice v proměnných panacekX a panacekY
panacekX = panacekX + 200
panacekY = panacekY + 150
// Přesune (zobrazí) panáčka na obrazovce na aktualizované souřadnice
visualniPanacek.style.left = panacekX + "px"
visualniPanacek.style.top = panacekY + "px"


function priStiskuKlavesy(klavesa) {
  if (klavesa.key === "ArrowRight") {
    panacekX = panacekX + 10
  }

  if (klavesa.key === "ArrowLeft") {
    panacekX = panacekX - 10
  }

  if (klavesa.key === "ArrowUp") {
    panacekY = panacekY - 10
  }

  if (klavesa.key === "ArrowDown") {
    panacekY = panacekY + 10
  }

  visualniPanacek.style.left = panacekX + "px"
  visualniPanacek.style.top = panacekY + "px"
}
