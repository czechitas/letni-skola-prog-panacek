/* Naprogramuj vlastní hru s panáčkem */

let objektPanacek
let panacekX
let panacekY
let panacekSirka
let panacekVyska

// Najde panáčka na stránce a uloží ho do proměnné objektPanacek
objektPanacek = document.querySelector("#panacek")

// Do proměnných panacekSirka a panacekVyska si nachystáme velikost panáčka.
// Zatím to nevyužijeme, ale bude se to hodit později  
panacekSirka = 64
panacekVyska = 70

// Nastaví panáčka na novou pozici
panacekX = 400
panacekY = 300
objektPanacek.style.left = panacekX + "px"
objektPanacek.style.top = panacekY + "px"
