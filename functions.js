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


    const stringOfTelevisions = inventory.map((stringOfTelevisions) => {
    return stringOfTelevisions.brand + " " + stringOfTelevisions.type + " - " + stringOfTelevisions.name;
});

console.log(stringOfTelevisions[1]);
// Opdracht 5B

