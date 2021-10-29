// opdracht 1A

const typeOfTelevision = inventory.map((inventory) => {
    return inventory.type;
});
console.log (typeOfTelevision);

//opdracht 1B

const televisionSoldOut = inventory.filter((inventory ) => {
    if (inventory.originalStock === inventory.sold){
        return inventory
    }
});
console.log(televisionSoldOut);

// opdracht 1C

const televisionWithAmbilight = inventory.filter((inventory) => {
    if (inventory.options.ambiLight === true){
        return inventory
    }
//    return inventory.options.ambilight === true
//    return inventory.options.ambilight
});
console.log (televisionWithAmbilight);

// opdracht 1D

const sortByPrice = inventory.map((price) => {
    return price.price +  " " + price.brand + " " + price.type;
});
sortByPrice.sort((a,b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
});
console.log (sortByPrice);