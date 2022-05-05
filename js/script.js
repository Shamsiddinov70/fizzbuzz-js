
let number = prompt('enter any number');
let fizz = 0;
let fizzbuzz = 0;
let buzz = 0;


for (let i = 1; i <= number; i++) {


    if (i % 3 == 0 && i % 5 == 0) {
        fizzbuzz++;
        document.getElementById("fizzbuzz").innerHTML = fizzbuzz + 'ta';
    }

    else if (i % 3 == 0) {
        fizz++;
        document.getElementById("fizz").innerHTML = fizz + 'ta';
    }

    else if (i % 5 == 0) {
        buzz++;
        document.getElementById("buzz").innerHTML = buzz + 'ta';
    }
}

console.log("there are " + fizzbuzz + " fizzbuzz number, " + fizz + " fizz number and " + buzz + " buzz number");