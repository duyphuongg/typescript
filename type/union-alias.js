"use strict";
function combine(n1, n2, resultConversiton) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number" || resultConversiton === 'as-number') {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var customer = {
    name: "Phuong",
    age: 2
};
console.log(combine(1, 3, 'as-number'));
console.log(combine('1', '3', 'as-number'));
console.log(combine("Phuong", "test", 'as-text'));
