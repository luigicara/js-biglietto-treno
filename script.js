let discount, price, eta, km, cost, priceNoDiscount, discountString

eta = parseFloat(prompt("Inserisci la tua età"));

console.log(eta, "anni");

km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));

console.log(km, "km");

cost = 0.21;

priceNoDiscount = (cost * km);

console.log ("priceNoDiscount", priceNoDiscount)

if (eta < 18) {
    discount = priceNoDiscount * 0.20;

    price = priceNoDiscount - discount;

    discountString = "e hai diritto ad uno sconto del 20%,"
    
} else if (eta >= 65) {
    discount = priceNoDiscount * 0.40;

    price = priceNoDiscount - discount;

    discountString = "e hai diritto ad uno sconto del 40%,"

} else {
    price = priceNoDiscount;

    discountString = "e non hai diritto ad alcuno sconto,"
}

console.log("price", price);

document.getElementById("title"). innerHTML = `Hai ${eta} anni e devi percorrere ${km}km, il costo per km è pari a ${cost}€ ${discountString} quindi il tuo prezzo finale è ${price.toFixed(2)}€`;