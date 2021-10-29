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


    const stringOfTelevisions = inventory.map((stringOfTelevision) => {
    return stringOfTelevision.brand + " " + stringOfTelevision.type + " - " + stringOfTelevision.name;
});

console.log(stringOfTelevisions[2]);

// Opdracht 5B

const priceOfTelevisions = inventory.map((priceOfTelevision) => {
    return "€" + priceOfTelevision.price + ",-"
})
console.log (priceOfTelevisions[2]);

//Opdracht 5C

const screenSizes = inventory.map ((screenSize) => {
    return screenSize.availableSizes
});
console.log (screenSizes);