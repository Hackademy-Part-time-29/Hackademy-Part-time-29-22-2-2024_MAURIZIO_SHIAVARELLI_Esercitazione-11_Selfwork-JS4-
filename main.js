// Scrivi un programma che dato un numero, let num = 2, stampi la rispettiva tabellina corrispondente.


// let num = 3
// let num1 = 11

// for (let i=1; i <= 10; i++){
//     if((num * i) % num1 != 0){
//         console.log(num * i)
//     }
// }





//Scrivi un programma che stampi dei numeri da 1 a 20 ma solo quelli pari. Di tutti i numeri dispari, invece, calcola anche la media e stampala a schermo.



// let media = 0;
// let n = 20;
// let contatore = 0;

// for (let i = 1 ; i <= n; i++){

//     if( i % 2 == 0 ){
//         console.log("I NUMERI PARI SONO " + i)
//     } else {
//         media = media + i;
//         contatore ++;
//     }
// }

// media = media/contatore;
// console.log("la media dei nuemri dispari é " + media)








// Scrivi un programma che simuli un distributore di bevande e che rispetti i seguenti passaggi:

// l’utente deve poter inserire un numero
// in console dev’essere stampato il messaggio del distributore
// se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
// se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
// se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
// se inserisce qualcosa di diverso, il programma dovra’ riproporre automaticamente la domanda di partenza


let numero;
let etaMinima = 18;

do {
    numero = prompt("Inserisci un numero (1 per acqua, 2 per coca cola, 3 per birra):");

    switch (numero) {
        case '1':
            console.log("hai scelto l'acqua");
            break;
        case '2':
            console.log("hai scelto la coca cola");
            break;
        case '3':
            let eta = parseInt(prompt("inserisci eta"));
            if (eta >= etaMinima && eta < 150) {
                console.log("hai scelto la birra");
            }else if ( eta < etaMinima ){
                console.log("non hai 18 anni")
            }else if( eta > 150){
                console.log("non dovresti essere morto?")
            }
            break;
        default:
            console.log("scemo, hai sbagliato");
    }
} while (numero !== '1' && numero !== '2' && numero !== '3');
