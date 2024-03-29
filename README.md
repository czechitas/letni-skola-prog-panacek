# Letní Škola - Programování

Podklady pro druhou polovinu dne výuky JavaScriptu.

Ve výchozím stavu projekt zobrazí panáčka vlevo nahoře.
Zobraz si webovou stránku a ověř, že to tak je.



Level 1 - Umístění panáčka
==========================

Není uživatelsky moc příjemné, když panáček začíná vlevo nahoře.
Umísti panáčka více do středu obrazovky, třeba na pevnou pozici
[400, 300] pixelů na obrazovce.

Následující příkazy jsou povinné. Je to deklarace proměnných, které budou obsahovat souřadnice panáčka. Prostě vše 1:1 překopíruj do `script.js`.
Všimni si, že příkazy zatím nenastavují panáčka na žádnou pozici. Bude tedy na [0, 0].
~~~javascript
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
~~~

Teď pomocí následujících příkazů umísti panáčka na pozici [400, 300].
Pozor! Schválně **nejsou ve správném pořadí**, musíš trochu přemýšlet:
~~~javascript
// Přesune (zobrazí) panáčka na obrazovce ve vodorovném směru na souřadnici z proměnné panacekX
visualniPanacek.style.left = panacekX + "px"
~~~

~~~javascript
// Nastaví hodnotu do proměnné panacekX
panacekX = 400
~~~

~~~javascript
// Přesune (zobrazí) panáčka na obrazovce ve svislém směru na souřadnici z proměnné panacekY
visualniPanacek.style.top = panacekY + "px"
~~~

~~~javascript
// Nastaví hodnotu do proměnné panacekY
panacekY = 300
~~~



Level 2 - Koncept visuální vs číselné proměnné
==============================================

V minulém levelu sis mohla všimnout, že je nejprve potřeba nastavit hodnotu do proměnných `panacekX` a `panacekY`,
a teprve potom manipulovat s proměnnou `visualniPanacek`. Až potom se obrázek opravdu posune na obrazovce.

V programu rozlišujeme různé typy proměnných: textové, číselné a visuální.

**Textové proměnné** obsahují text. Například jméno hráče.<br/>
**Číselné proměnné** (jako třeba `panacekX`, `panacekY`) obsahují prosté číslo,
které se nikde nezobrazuje, ale je nutné pro výpočty běhěm hry (pro *herní logiku*).<br/>
**Visuální proměnné** (jako třeba `visualniPanacek` nebo v budoucnu `visualniMince`)
obsahují celý prvek `<img>` z HTML a manipulace s touto proměnnou má visuální dopad.

Při programování postavičky ve hře se postupuje tak, že v číselných proměnných
uchováváme souřadnice postavičky a budeme je přičítat a odečítat, když budeme chtít pohybovat
s postavičkou. Ale prostá změna čísla nezpůsobí překreslení postavičky na obrazovce.
To se stane až tehdy, kdy aktualizujeme visuální proměnnou dle hodnoty z číselné proměnné.

Zkus si ještě jednou, že to tak funguje. Vlož na konec programu příkazy:

~~~javascript
// Nastaví souřadnice do proměnných panacekX a panacekY
panacekX = 20
panacekY = 10
~~~

Posunul se panáček do levého horního rohu?

A teď přidej na konec programu ještě:

~~~javascript
// Přesune (zobrazí) panáčka na obrazovce na aktualizované souřadnice
visualniPanacek.style.left = panacekX + "px"
visualniPanacek.style.top = panacekY + "px"
~~~

A co teď? Posunul se panáček do levého horního rohu?

A teď zase posuň panáčka víc do středu:

~~~javascript
// Zvýší souřadnice v proměnných panacekX a panacekY
panacekX = panacekX + 200
panacekY = panacekY + 150
~~~

Posunul se na obrazovce zase dál od kraje? Nebo je potřeba ještě přidat aktualizaci `visualniPanacek`?



Level 3 - Pohyb panáčka
=======================

Naprogramuj pohyb panáčka po obrazovce při stisku klávesy.

Všechny příkazy v tomto levelu budeš psát do funkce `priStiskuKlavesy(event)`,
proto ji musíš v programu nadefinovat dle příkladu níže.
Pro začátek je v těle funkce nachystán příkaz `console.log(..)`,
který při zavolání funkce zobrazí pomocnou hlášku, aby bylo vidět, že to funguje.

Definice funkce:

~~~javascript
function priStiskuKlavesy(event) {
    console.log("Klávesa stisknuta")

    // Sem můžeš vložit příkazy ze seznamu (2)
}
~~~

Samotný kód v JavaScriptu by nestačil, proto by funkce sice existovala, ale nikde by nebyla použita.
Je tedy nutné ještě v HTML tuto funkci volat:

Původní kousek HTML:
~~~html
<body>
~~~

Nahraď novým kouskem HTML:
~~~html
<body onkeydown="priStiskuKlavesy(event)">
~~~

Teď projekt spusť a vyzkoušej, že se při stisku libovolné klávesy zobrazí hláška `Klávesa stisknuta`.

Následuje tvoje programování:

Zpět v JavaScriptu. Nahraď zobrazování konstantní hlášky,
když uživatel stiskne kteroukoliv klávesu,
za pohyb panáčka při stisku klávesy šipka nahoru/dolů/vlevo/vpravo.
Použij příkazy ze seznamu (2) a zbav se `console.log(..)`. Příkazy opět **nejsou záměrně ve správném pořadí**.

Seznam (2):
~~~javascript
// Přesune (zobrazí) panáčka na obrazovce ve vodorovném směru na souřadnici z proměnné panacekX
visualniPanacek.style.left = panacekX + "px"
~~~

~~~javascript
// Přesune (zobrazí) panáčka na obrazovce ve svislém směru na souřadnici z proměnné panacekY
visualniPanacek.style.top = panacekY + "px"
~~~

~~~javascript
// Zvýší hodnotu v proměnné panacekX o 10
panacekX = panacekX + 10
~~~

~~~javascript
// Sníží hodnotu v proměnné panacekX o 10
panacekX = panacekX - 10
~~~

~~~javascript
// Zvýší hodnotu v proměnné panacekY o 10
panacekY = panacekY + 10
~~~

~~~javascript
// Sníží hodnotu v proměnné panacekY o 10
panacekY = panacekY - 10
~~~

~~~javascript
if (event.key === "ArrowRight") {

    // Sem můžeš vložit kterékoliv příkazy
    // ze seznamu (2).
    // Příkazy zde se provedou pouze,
    // pokud byla stisknuta klávesa
    // ŠIPKA VPRAVO

}
~~~

~~~javascript
if (event.key === "ArrowLeft") {

    // Sem můžeš vložit kterékoliv příkazy
    // ze seznamu (2).
    // Příkazy zde se provedou pouze,
    // pokud byla stisknuta klávesa
    // ŠIPKA VLEVO

}
~~~

~~~javascript
if (event.key === "ArrowUp") {

    // Sem můžeš vložit kterékoliv příkazy
    // ze seznamu (2).
    // Příkazy zde se provedou pouze,
    // pokud byla stisknuta klávesa
    // ŠIPKA NAHORU

}
~~~

~~~javascript
if (event.key === "ArrowDown") {

    // Sem můžeš vložit kterékoliv příkazy
    // ze seznamu (2).
    // Příkazy zde se provedou pouze,
    // pokud byla stisknuta klávesa
    // ŠIPKA DOLŮ

}
~~~



Level 4 - Přidej minci
======================

Panáček má za úkol sbírat mince. Přidej tedy minci do HTML do `<body>`.

~~~html
<!-- předmět k sebrání, id="mince" -->
<img id="mince" src="obrazky/mince.png">
~~~

Aby s ní šlo pracovat v programu, ulož ji v JavaScriptu do proměnné:

~~~javascript
let visualniMince
let minceX
let minceY
let minceSirka
let minceVyska

// Najde minci na stránce a uloží ji do proměnné visualniMince
visualniMince = document.querySelector("#mince")

// Do proměnných minceSirka a minceVyska si nachystáme velikost mince
minceSirka = 32
minceVyska = 32
~~~


Nastav minci buď na pevnou nebo na náhodnou pozici.
Budou se ti hodit tyto příkazy:

~~~javascript
// Nastaví do proměnné minceX natvrdo 200
minceX = 200
~~~
~~~javascript
// Nastaví do proměnné minceX náhodné číslo 0 .. šířka obrazovky
minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka))
~~~
~~~javascript
// Nastaví do proměnné minceY náhodné číslo 0 .. výška obrazovky
minceY = Math.floor(Math.random() * (window.innerHeight - minceVyska))
~~~
~~~javascript
// Nastaví do proměnné minceY natvrdo 100
minceY = 100
~~~
~~~javascript
// Přesune (zobrazí) minci na obrazovce ve vodorovném směru na souřadnici z proměnné minceX
visualniMince.style.left = minceX + "px"
~~~
~~~javascript
// Přesune (zobrazí) minci na obrazovce ve svislém směru na souřadnici z proměnné minceY
visualniMince.style.top = minceY + "px"
~~~



Level 5 - Sbírání mincí
=======================

Umožni, aby panáček mohl sebrat mince a přičetlo se mu skóre.

Pro sebrání mince je nutno **při každém pohybu panáčka** testovat střet *obrázku panáčka* a *obrázku mince*.
Rozhodni se tedy správně, kam příkaz vložit.

~~~javascript
// Podmínka zjistí, zda dochází ke kolizi panáčka a mince
// tj. zda se překrývají dva obdélníky o známých souřadnicích
if (!(panacekX + panacekSirka < minceX ||
      minceX + minceSirka < panacekX ||
      panacekY + panacekVyska < minceY ||
      minceY + minceVyska < panacekY)) {

    // Sem vlož příkazy, které se mají provést
    // při střetu panáčka a mince.
    // Například posun mince na jiné náhodné místo

}
~~~

Sebrání mince lze simulovat tak, že se mince prostě přesune na jiné (náhodné) souřadnice.
Příkazy k tomu už máš v minulém kroku. Jen je musíš okopírovat na správné místo v programu.



Level 6 - Skóre
===============

Přidej do stránky skóre.

Doplň do HTML tyto značky:

~~~html
<p class="vysledek">Skóre: <span id="skore">0</span></p>
~~~

Ve svém kódu potom můžeš pomocí `document.querySelector(..)` vybrat prvek s `id="skore"` a měnit jeho textový obsah podle toho,
kolik mincí panáček sebral.

~~~javascript
// Najde na stránce prvek, kam se bude skóre dopisovat
let visualniSkore
visualniSkore = document.querySelector("#skore")
~~~

Textový obsah HTML prvku se nastaví takto:

~~~javascript
// Zobrazí v HTML prvku visualniSkore obsah proměnné hodnotaSkore
visualniSkore.textContent = hodnotaSkore
~~~

Proměnnou `hodnotaSkore` si definuj sama a zvyšuj její hodnotu při sebrání mince.



Level 7 - Změna obrázků panáčka při pohybu
==========================================

Když jde panáček doprava, nastav mu obrázek `obrazky/panacek-vpravo.png`,
když jde doleva, nastav mu `obrazky/panacek-vlevo.png`, a podobně
nahoru a dolů.

Panáčkovi nastavíš obrázek nasledujícím příkazem v JavaScriptu:

~~~javascript
visualniPanacek.src = "obrazky/panacek-vpravo.png"
~~~

Musíš se samozřejmě správně rozhodnout, kam tento příkaz vložit.



Level 8 - Přehrávej zvuky při sbírání mince
===========================================

Doplň do hry zvuky. Např. cinknutí mince, když ji panáček sebere.

Nejprve musíš přidat do HTML značku pro vybraný zvuk:

~~~html
<audio id="zvukmince" src="zvuky/mince.mp3"></audio>
~~~

Zvuk pak v JavaScriptu vyhledáš na stránce pomocí `document.querySelector(..)`
a uložíš si ho např. do proměnné `audioMince`, stejně jako jsi to dělala s panáčkem, mincí nebo skóre.
K přehrání zvuku pak můžeš použít následující příkaz:

~~~javascript
// Přehraje zvuk cinknutí
audioMince.play()
~~~



Level 9 - Omezení pohybu panáčka vlevo a nahoru
===============================================

Panáček už krásně chodí, sbírá mince, ale má to jeden neduh.
Může se posunout mimo hranice herní plochy a vyjít ven z obrazovky.
Přidej do hry kód, který pohyb panáčka omezí.

Jednodušší je nejprve vyřešit levou a horní hranici obrazovky. Pravou a spodní hranici budeš moct vyřešit v přístím levelu.

Vlož tento kód, omezující pohyb vlevo, na správné místo v programu:

~~~javascript
// Pokud se stane, že by X-ová souřadnice panáčka byla záporná, naprav to.
if (panacekX < 0) {
    panacekX = 0
}
~~~

Ověř, že panáček už nemůže zajít vlevo mimo obraz a podobně obraň i Y-ovou souřadnici.



Level 10 - Omezení pohybu panáčka vpravo a dolů
===============================================

Omezení pohybu vpravo a dolů je podobné jako v minulém levelu. Je nicméně komplikovanější o to,
že podmínka není `< 0`, ale naopak větší než jiná hodnota. Která?

Trochu ti napovíme, když ti ukážeme, jak zjistíš šířku a výšku obrazovky (okna prohlížeče):

~~~javascript
let sirkaOkna
let vyskaOkna

sirkaOkna = window.innerWidth
vyskaOkna = window.innerHeight
~~~

Pokud to naprogramuješ správně, s panáčkem by teď nemělo být možné vyjít ve vpravo a dolů mimo obraz.

Možná si ale všimneš, že při pohybu doprava nadoraz se dole objeví posuvník a obraz se mírně posune (o 64 pixelů).
Čím to je? Který objekt na obrazovce je široký právě 64 pixelů? Co se kde musí odečíst, aby to fungovalo bezchybně?

![Ukázka chyby omezení pohybu](chyba-pohybu-vpravo.png)



Level 11 - Vlastní vylepšení
============================

Projekt obsahuje spoustu předpřipravených obrázků a zvuků.
Zkus přidat třeba nepřátele (mouchy...), životy, sbírání i jiných věcí než mincí.
