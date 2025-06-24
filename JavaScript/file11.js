function add(a, b) {
return a + b;
}

function sub(a, b) {
return a - b;
}

const sum = add(12, 23);
console.log(sum); // 35

console.log(add(2, 4)); // 6
console.log(sub(2, 4)); // -2

export { add, sub };
