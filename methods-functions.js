// Opdracht 3A

const getBrands = inventory.map((allBrands) => {
    return allBrands.brand
});
let totalBrands = " ";
for (let i = 0; i < getBrands.length; i++) {
    totalBrands  = totalBrands + getBrands[i];
}
console.log(getBrands);

const televisionList = document.getElementById("television-list");
console.log(televisionList);
televisionList.textContent = getBrands;

//Opdracht 4B

inventory.splice(inventory.length -3, 3);
console.log(inventory);
