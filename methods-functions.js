// Opdracht 3A

const getBrands = inventory.map((getBrand) => {
    return getBrand.brand

});
let totalBrands = [ ];
for (let i = 0; i < getBrands.length; i++) {
    totalBrands  = totalBrands + getBrands[i];
}
console.log(totalBrands);



const televisionList = document.getElementById("television-list");
console.log(televisionList);
televisionList.textContent = totalBrands;




//Opdracht 4B


// function getBrands1(soldTvs){
//     let totalSoldTv = [];
//     for (let i = 0; i < soldTvs.length; i++) {
//         totalSoldTv += soldTvs[i].brand;
//         // totalSoldTv += soldTvs[i].sold;
//         //totalSoldTvs = inventory[0].sold + inventory[1].sold + ......inventory[7].sold
//     }
//     return totalSoldTv;
// }
// const result = getBrands1(inventory);
// console.log(result);

function televisionObjects(inventory) {
    const getObjects = inventory.map((getObject) => {
        return getObject;
    });
    return getObjects;
}
const outcome1 = televisionObjects(inventory);
    console.log(outcome1);


// Kortere manier (van Sam)
// const fruit = ['banaan', 'sinaasappel', 'appel'];
// function tvBrand(tvs){
//     return tvs.map((tv) => {
//         return tv;
//     });
// }
// const outcome = tvBrand (fruit);
// console.log(outcome); // geeft banaan, sinaasappel, appel


