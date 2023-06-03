// 1. Feladat
function DiakInfo(nev, csoport, tipus) {
    var csoportNeve = "Team" + ("0" + csoport).slice(-2);
    var tanfolyamTipus;
    if (tipus) {
        tanfolyamTipus = "Junior Frontend";
    }
    else {
        tanfolyamTipus = "Webprogramozó";
    }
    return "".concat(nev, "[").concat(csoportNeve, "] - ").concat(tanfolyamTipus);
}
// 2. Feladat
function SzovegesErtekeles(jegy) {
    var szorgalom;
    var magatartas;
    if (jegy == 2) {
        szorgalom = "Hanyag";
        magatartas = "Rossz";
    }
    else if (jegy == 3) {
        szorgalom = "Változó";
        magatartas = "Változó";
    }
    else if (jegy == 4) {
        szorgalom = "Jó";
        magatartas = "Jó";
    }
    else if (jegy == 5) {
        szorgalom = "Példás";
        magatartas = "Példás";
    }
    else {
        szorgalom = "Rossz jegy adott meg.";
        magatartas = "Rossz jegy adott meg.";
    }
    return [szorgalom, magatartas];
}
// 3. Feladat
function HarommalOszthatokSzama(szamokTomb) {
    var eredmeny = 0;
    for (var i = 0; i < szamokTomb.length; i++) {
        if (szamokTomb[i] % 3 == 0) {
            eredmeny++;
        }
    }
    return eredmeny;
}
// 4. Feladat
function Nyeroszamok(mennyiseg, alsoHatar, felsoHatar) {
    var tombSzamok = [];
    for (var i = 0; i < mennyiseg; i++) {
        var randomSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        if (tombSzamok.indexOf(randomSzam) === -1) {
            tombSzamok.push(randomSzam);
            i++;
        }
    }
    return tombSzamok;
}
console.log(DiakInfo("Minta Márton", 8, true));
console.log(SzovegesErtekeles(2));
console.log(HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]));
console.log(Nyeroszamok(5, 1, 90));
