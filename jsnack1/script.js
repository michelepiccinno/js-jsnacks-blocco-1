//ABBIAMO DUE ARRAY CONTENENTI 6 NOMI E 6 COGNOMI----- DOBBIAMO OTTENERE UN ARRAY CON NOMI E COGNOMI CASUALI//

//CREO UN ARRAY NOMI, ARRAY COGNOMI, E ARRAY VUOTA
const arrayNomi = ['Mario', 'Paolo', 'Laura', 'Genoveffa', 'Esterina', 'Pasqualino'];
const arrayCognomi = ['Rossi', 'Zidane', 'Torricelli', 'Di Livio', 'Lombardo', 'Baresi'];

//INIZIALIZZO UN ARRAY VUOTO
let arrayNomiCognomi = [];

//SPIEGAZIONE DEL FOR: ( i e j mathrandom; i < lenghtStartArrayNomi [che decresce ad ogni ciclo]; i e j mathrandom; )
//MATHFLOOR TRONCA I DECIMALI PERTANTO AVREMO INDICE MAX 5
//GLI INDICI ASSUMERANNO I VALORI 5-4-3-2-1 (decrescono dinamicamente perche' svuoto i 2 array iniziali con lo splice ad ogni ciclo e popolo l'array vuota)
//PER I MOTIVI SOPRA RIPORTATI L'ALGORITMO NON DOVREBBE MAI CICLARE A VUOTO
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

