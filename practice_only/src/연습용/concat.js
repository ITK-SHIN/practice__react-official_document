const arr1 = [1, 2];
const arr2 = [3, 4];

let result = arr1.concat(arr2);
console.log(result);

result = arr1.concat(3);
console.log(result);

const copy = arr1.concat();

console.log(copy);
console.log(copy === arr1);
