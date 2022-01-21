// Consegna: Scrivi un programma che stampi in console i numeri da 1 a 100. 
// MILESTONE 1 Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. 
// MILESTONE 2 Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta. 
// MILESTONE 3 Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

// Variabile "containerElement" assegnata all'id="container" in HTML
let containerElement = document.getElementById('container');

// Ciclo dei numeri da 1 - 100
for (let i=1; i <=100; i++){
    
    //Condizione numeri multipli di 3 e 5
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
        
        // Appendo la stringa "<div class='box4'>" + "testo" + "</div>" a alla variabile <div id="container"></div>
        // Assegno il valore della "stringa" a containerElement
        containerElement.innerHTML += "<div class='box4'>" + "FizzBuzz" + "</div>";
    } 
    
    // Condizione numeri multipli di 3
    else if (i % 3 == 0){
        console.log("Fizz");
        containerElement.innerHTML += "<div class='box2'>" + "Fizz" + "</div>";
    }

    // Condizione numeri multipli di 5 
    else if (i % 5 == 0){
        console.log("Buzz");
        containerElement.innerHTML += "<div class='box3'>" + "Buzz" + "</div>";
    }

    // Numeri restanti fuori dalle condizioni 
    else {
        console.log(i);
        containerElement.innerHTML += "<div class='box1'>" + i + "</div>";
    }     
}
