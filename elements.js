//Opdracht 2A

const totalSoldTelevisions = inventory.map((television) => {
    return television.sold
});
let totalSold = 0;
for (let i = 0; i < totalSoldTelevisions.length; i++) {
    let television = totalSoldTelevisions[i];
    totalSold += television
}
console.log (totalSold);

//Opdracht 2C
const totalTelevisionsInStock = inventory.map((totalInStock) => {
    return totalInStock.originalStock
});
let totalStock = 0;
for (let i = 0; i < totalTelevisionsInStock.length; i++) {
    // let television = totalTelevisionsInStock[i];
    // totalStock += television
    totalStock += totalTelevisionsInStock[i];
}
console.log (totalStock);

//Opdracht 2E

const televisionStillBeSold = totalStock - totalSold;
console.log (televisionStillBeSold);

//Opdracht 2B & 2D & 2E

const televisionStart = document.getElementById("television-start");
console.log(televisionStart);
televisionStart.textContent = totalStock;
const televisionSold = document.getElementById("television-sold");
console.log(televisionSold);
televisionSold.textContent = totalSold;
const televisionOver = document.getElementById("television-over");
console.log(televisionOver);
televisionOver.textContent = televisionStillBeSold;
