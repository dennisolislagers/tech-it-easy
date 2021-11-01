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
const outcome3 = namesOfTelevisons([inventory[4]]);
console.log(outcome2, outcome3);





// Opdracht 5B

function prizesOfTelevisons (inventory) {
    const priceOfTelevisions = inventory.map((priceOfTelevision) => {
        return "€" + priceOfTelevision.price + ",-";
    });
    return priceOfTelevisions;
}
const outcome4 = prizesOfTelevisons([inventory[2]]);
const outcome5 = prizesOfTelevisons([inventory[4]]);
console.log (outcome4, outcome5);

//Opdracht 5C



//  function sizesOfTelevision(tvSizes) {
//      let variableSizes = [];
//     for (let i = 0; i < tvSizes.length; i++) {
//         let sizes = sizes + tvSizes[i] + " inch (" + (tvSizes[i] * 2.54) + " cm)";
//         if (i > 0){
//             sizes = " | " + sizes;
//         }
//     } return variableSizes;
// }
//
//
// const outcome6 = sizesOfTelevision([inventory[2].availableSizes]);
// console.log (outcome6);

//Opdracht 5D

function allTelevisions (inventory) {
    // const combineTelevision = namesOfTelevisons(inventory);
    // const combineTelevision1 = prizesOfTelevisons(inventory);
    // const combineTelevision2 = sizesOfTelevisions(inventory);
    // return combineTelevision + combineTelevision1 + combineTelevision2
    //  return namesOfTelevisons(inventory) + prizesOfTelevisons(inventory) + sizesOfTelevision(inventory);
    return namesOfTelevisons(inventory) + prizesOfTelevisons(inventory);
    }

const outcome7 = allTelevisions([inventory[2]]);
console.log (outcome7)

const televisionString = document.getElementById("television-string");
console.log(televisionString);
televisionString.textContent = outcome7;






