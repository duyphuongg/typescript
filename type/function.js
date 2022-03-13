"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(res) {
    console.log("Result is : " + res);
}
var combineValues;
combineValues = add;
// combineValues = 2
console.log(combineValues(2, 4));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(20, 4, function (result) {
    console.log(result);
});
