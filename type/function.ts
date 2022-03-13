function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(res: number): void {
  console.log("Result is : " + res)
}

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = 2

console.log(combineValues(2, 4));

function addAndHandle(n1: number, n2: number, cb: (res: number) => void) {
  const result = n1 + n2;
  cb(result)
}

addAndHandle(20, 4, (result) => {
  console.log(result);
})
