// Opdracht 5A

// function inventoryOfTelevisions (brand, type, name) {
//     return brand + type + name;
// }
// const philips = inventoryOfTelevisions ("philips", "43PUS6504/12", "4K TV");
// const NIKKEI = inventoryOfTelevisions  ("NIKKEI", "NH3216SMART", "HD SMART TV");
// console.log (philips, NIKKEI);

//
// });
// console.log(stringOfTelevisions[1], stringOfTelevisions[3]);


    function namesOfTelevisons (inventory) {
    const stringOfTelevisions = inventory.map((stringOfTelevision) => {
            return stringOfTelevision.brand + " " + stringOfTelevision.type + " - " + stringOfTelevision.name;
        });
    return stringOfTelevisions;
    }
const outcome2 = namesOfTelevisons([inventory[2]]);
const outcome3 = namesOfTelevisons([inventory[5]]);
console.log(outcome2, outcome3);

// Opdracht 5B

function listOfPrices (inventory) {
    const priceOfTelevisions = inventory.map((priceOfTelevision) => {
        return "€" + priceOfTelevision.price + ",-";
    });
    return priceOfTelevisions;
};
const outcome4 = listOfPrices(inventory);
const outcome5 = listOfPrices([inventory[3]]);
console.log (outcome4, outcome5);

//Opdracht 5C

function sizesOfTelevisions (inventory) {
    const screenSizes = inventory.map ((screenSize) => {
        return screenSize.availableSizes
    });
    return screenSizes;
}
const outcome6 = sizesOfTelevisions([inventory[0]]);
console.log (outcome6);

//Opdracht 5D



