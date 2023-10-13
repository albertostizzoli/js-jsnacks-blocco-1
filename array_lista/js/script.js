//  ESERCIZIO TUTTI FRUTTI

//Array
const fruits = ['Banana', 'Mela', 'Pera', 'Ciliegia', 'Arancia', 'Mandarino', 'Cocomero', 'Limone', 'Fragola'];
 

fruits.push("Pesca");
document.getElementById("pesca").innerHTML = fruits;

// Variabili
const alert = document.querySelector('.alert');
const button = document.querySelector('button');

// Creo una funzione che mi permetta di controllare se ho tutta la frutta
button.addEventListener('click', function () {
    alert.className = '.alert .d-none';
    let frutta = document.getElementById('name').value;
    let founded = false;
    //Creo un ciclo che passi in rassegna tutti gli elementi dell'Array
    for (let i = 0; i < fruits.length; i++) {
        let Name = fruits [i];
        if (Name === frutta) {
            founded = true;
        }
    }
    let text, warning;
    // Se il cocomero viene trovato
    if (founded) {
        warning = 'alert-success';
        text = ` Trovato, Devo solo preparare il cocktail `;
        //Altrimenti
    } else {
        warning = 'alert-danger';
        text = `Oh no, Devo uscire a comprare il cocomero `;
    }
    alert.innerText = text;
    alert.className.add('.alert-success');
    alert.className.remove('.d-none');
}
);