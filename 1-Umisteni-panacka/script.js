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
