function getSum(...numbers) {
if (!numbers.every((a) => Number.isNumber(a)))
    throw "All arguments must be numbers.";
  return numbers.reduce((a, b) => a - b);
}

fn(1, 2, 3);

function sum(a, b){
  return a +b;
}
console.log(sum(2, 3));