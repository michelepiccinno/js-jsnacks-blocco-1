//BONUS --SNACK 3//
//Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array 
//che ha meno elementi fino a quando ne avrà tanti quanti l’altro.//

const arrayPapere = ['Camilla','Priscilla','Nara','Desolina','Lella'];
const arrayGatti = ['Silvestro','Tom','Wizzy'];
console.log('array di papere iniziale: ' + arrayPapere);
console.log('array di gatti iniziale: ' + arrayGatti);

//ARRAY DI GATTI E PAPERE CHE EVENTUALMENTE SI POSSONO AGGIUNGERE
const arrayPaperePlus = ['Lucilla', 'Carolina', 'Peppa', 'Domitilla'];
const arrayGattiPlus = ['Fritz', 'Luke', 'Bazz', 'Mozz','Thor'];

//LA IF CI DICE QUALE ARRAY E' PIU LUNGA
//ALLA VARIABILE maxI ASSEGNO UN VALORE PARI ALLA DIFFERENZA DEL NUMERO DI ELEMENTI DELL'ARRAY GRANDE
//MENO IL NUMERO DI ELEMENTI DELL'ARRAY PICCOLO - PERTANTO SE HO UN ARRAY DI 5 E UN ARRAY DI 2
//L'INCREMENTO SARA' DI 5 - 2 = 3
//SETTIAMO UNA VARIBILE BOOLEANA K
if (arrayGatti.length > arrayPapere.length) {
  maxI = arrayGatti.length - arrayPapere.length;
  k = true;
} else {
  maxI = arrayPapere.length - arrayGatti.length;
  k = false;
}

//SETTIAMO IL CICLO FOR 
// LA VARIABILE K PRECEDENTEMENTE SETTATA CI DICE SE DOBBIAMO POPOLARE L'ARRAY DI
//PAPERE O L'ARRAY DI GATTI
for (i = 0; i < maxI; i++) {
  if (k == true) {
    arrayPapere.push(arrayPaperePlus[i]);
  } else {
    arrayGatti.push(arrayGattiPlus[i]);
  }
}

console.log('array di papere FINALE: ' + arrayPapere);
console.log('array di gatti FINALE: ' + arrayGatti);