//Array
const numbers = [
    '10',
    '12',
    '26',
    '33',
    '38',
    '42',
    '45',
    '52',
    '60',
    '65',
    '70',
    '72',
    '77',
    '80',
    '88',
    '92',
    '96',
    '100',
];


//Ciclo
const button = document.querySelector('button');

// Creo una funzione che mi permetta di scrivere un risultato randomico
button.addEventListener('click', function (){
    for (let i = 0; i < numbers.length; i++) {
        let numero;
        let risultato;
        numero = numbers[randomInteger(0, 5)];
        risultato = numero;
        console.log(risultato);

        const text = document.getElementById('text-2');
        text.innerHTML = `${numero}`;

   }
}
);


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
