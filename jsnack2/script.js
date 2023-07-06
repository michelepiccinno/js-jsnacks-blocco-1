//CREO UN ARRAY CON 20 ELEMENTI
const arrayNumbers = [2,3,8,1,4,5];
let somma = 0;
//DICHIARO UNA VARIABILE CHE USERO' NEL FOR PER LA SOMMA
for (let i = 0; i < arrayNumbers.length; i++) {
  if (i % 2 == 0) {
    console.log('indice pari: ' + i);
    console.log('numero selezionato in posizione dispari: ' + arrayNumbers[i] + ' ')
    somma += arrayNumbers[i];
  }
}
console.log('somma dei numeri in posizione dispari: ' + somma);
//DA NOTARE CHE PER PRELEVARE I NUMERI DISPARI DOVREMO SELEZIONARE LE POSIZIONI DEGLI INDICI PARI IN QUANTO L'ARRAY PARTE DA INDICE ZERO//