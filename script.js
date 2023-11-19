// 1. Switch užduotis:

// 1. Sukurkite variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui. Aprašykite Switch, kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam.



var car = 'volvo';
switch (car) {
  case 'VW':
  case 'Audi':
  case 'Bentley':
  case 'Bugatti':
  case 'Lamborghini':
  case 'Porsche':
    console.log('Ši automobilio markė priklauso VW grupei');
    break;
    case 'BMW':
    case 'Mini':
    case 'Rolls-Royce':
      console.log('Ši automobilio markė priklauso BMW grupei');
      break;
      default:
        console.log('Ši automobilio markė nepriklauso nei VW, nei BMW grupei');
}


 //2. Sukurkite variable 'userInput' ir pradžioje prilyginkite 'Obuolys'. Su Switch statement apsirašyk, kad 'userInput' reikmšmė yra - vaisius ar daržovė. Pridėkite bent 5 kiekvienos kategorijos (trūksta idėjų? Wiki į pagalbą: vaisiai, daržovės).

 var userInput = 'Obuolys';
 switch (userInput) {
  case 'Obuolys':
  case 'Kriause':
  case 'Arbuzas':
  case 'Apelsinas':
  case 'Slyva':
 console.log(userInput+ '' + ' yra vaisius');
    break;
    case 'Morka':
    case 'Kopustas':
    case 'Bulve':
    case 'Svogunas':
    case 'Burokas':
      console.log(userInput+ '' + ' yra daržovė');
 }

//3. Kokia šiandien diena? Sukurkite variable 'weekDay', kuris būtų lygus skaičiui - savaitės dienai, skaičiuojant nuo 0 (t.y. pirmadienis - 0; antradienis - 1; trečiadienis - 2 ir t.t.). Parašykite Switch statement, kuris paimtų skaičių ir jį pakeistų (ne sukurtų naują kintamąjį, o pakeistų 'weekDay' reikšmę) į savaitės dieną žodžiu. Vėliau, atspausdink kintamąjį. 

//nebaigta, bandziau daugybe variantu, bet nebesumasciau kaip baigti 

var weekDay
switch (weekDay) {
  case 0:
    day = "Pirmadienis";
    break;
  case 1:
    day = "Antradienis";
    break;
  case 2:
     day = "Trečiadienis";
    break;
  case 3:
    day = "Ketvirtadienis";
    break;
  case 4:
    day = "Penktadienis";
    break;
  case 5:
    day = "Šeštadienis";
    break;
  case 6:
    day = "Sekmadienis";
  }
    console.log()
