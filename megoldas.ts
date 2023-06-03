
// 1. Feladat
function DiakInfo(nev:string,csoport:number,tipus:boolean):string{
    var csoportNeve:string = "Team" + ("0" + csoport).slice(-2);
    var tanfolyamTipus:string;
    if(tipus){
        tanfolyamTipus = "Junior Frontend";
    } 
    else{
        tanfolyamTipus = "Webprogramozó";
    }

    return `${nev}[${csoportNeve}] - ${tanfolyamTipus}`;
}


// 2. Feladat
function SzovegesErtekeles(jegy:number):[string,string]{
    var szorgalom:string;
    var magatartas:string;

    if(jegy == 2){
        szorgalom = "Hanyag";
        magatartas  = "Rossz";
    }
    else if(jegy == 3){
        szorgalom = "Változó";
        magatartas  = "Változó";
    }
    else if(jegy == 4){
        szorgalom = "Jó";
        magatartas  = "Jó";
    }
    else if(jegy == 5){
        szorgalom = "Példás";
        magatartas  = "Példás";
    }
    else{
        szorgalom = "Rossz jegy adott meg.";
        magatartas  = "Rossz jegy adott meg.";
    }

    return[szorgalom,magatartas];
}


// 3. Feladat
function HarommalOszthatokSzama(szamokTomb:number[]):number{
    var eredmeny:number = 0;

    for(let i:number = 0; i< szamokTomb.length;i++){
        if(szamokTomb[i] % 3 == 0){
            eredmeny++;
        }
    }

    return eredmeny;
}

// 4. Feladat
function Nyeroszamok(mennyiseg:number,alsoHatar:number,felsoHatar:number):number[]{
        let tombSzamok:Array<number> = [];

        for(let i:number = 0;i < mennyiseg;i++){
            var randomSzam:number = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
            if(tombSzamok.indexOf(randomSzam) === -1){
                tombSzamok.push(randomSzam);
                i++;
            }
        }
        return tombSzamok;
}


console.log(DiakInfo("Minta Márton", 8,true));
console.log(SzovegesErtekeles(2));
console.log(HarommalOszthatokSzama([10,23,12,24,31,33,42,20]));
console.log(Nyeroszamok(5,1,90));