// Opdracht 3A

const getBrands = inventory.map((getBrand) => {
    return getBrand.brand
});
// let totalBrands = [ ];
// for (let i = 0; i < getBrands.length; i++) {
//     totalBrands  = totalBrands + getBrands[i];
// }
console.log(getBrands);

const televisionList = document.getElementById("television-list");
console.log(televisionList);
televisionList.textContent = getBrands;

//Opdracht 4B



    function televisionObjects(object) {
        let totalBrands = [];
        for (let i = 0; i < getBrands.length; i++) {
            totalBrands = totalBrands + getBrands[i];
        }
        return totalBrands
    }
const outcome = televisionObjects([0])
console.log(outcome);




