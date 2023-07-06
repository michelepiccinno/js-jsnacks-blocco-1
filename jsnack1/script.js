//ABBIAMO DUE ARRAY CONTENENTI 6 NOMI E 6 COGNOMI----- DOBBIAMO OTTENERE UN ARRAY CON NOMI E COGNOMI CASUALI//


//CREO UN ARRAY NOMI, ARRAY COGNOMI, E ARRAY VUOTA
const arrayNomi = ['Mario', 'Paolo', 'Laura', 'Genoveffa', 'Esterina', 'Pasqualino'];
const arrayCognomi = ['Rossi', 'Zidane', 'Torricelli', 'Di Livio', 'Lombardo', 'Baresi'];
//INIZIALIZZO UN ARRAY VUOTO
let arrayNomiCognomi = [];

//SPIEGAZIONE DEL FOR: ( i e j mathrandom; i < lenghtStartArrayNomi [che decresce ad ogni ciclo]; i e j mathrandom; )
//IL MATHRANDOM SARA' DA 0 A 5-4-3-2-1 (decresce dinamicamente perche' svuoto l'array con lo splice man mano che si popola l'array vuota)
for (let i = Math.floor(Math.random() * (arrayNomi.length)), j = Math.floor(Math.random() * (arrayNomi.length));
    i < arrayNomi.length;
    i = Math.floor(Math.random() * (arrayNomi.length)), j = Math.floor(Math.random() * (arrayNomi.length))) {

  //POPOLIAMO L'ARRAY VUOTA - DA NOTARE CHE NON USIAMO MAI 2 VOLTE LO STESSO NOME/COGNOME. INOLTRE SIA I NOMI CHE I COGNOMI VENGONO SETTATI IN ORDINE COMPLETAMENTE CAUSALE 
  arrayNomiCognomi.push(arrayNomi[i] + ' ' + arrayCognomi[j]);

  //CON SPLICE SVUOTIAMO I 2 ARRAY DI NOMI E COGNOMI
  arrayNomi.splice(i, 1);
  arrayCognomi.splice(j, 1);
  console.log('i: ' + i);
  console.log('j: ' + j);
}

console.log('arrayNomiCognomi (inizialmente era vuota): ' + arrayNomiCognomi);
console.log('array Nomi: svuotata' + arrayNomi);
console.log('array Cognomi: svuotata' + arrayCognomi);

