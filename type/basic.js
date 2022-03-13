"use strict";
function sum(n1, n2, isShowText, text) {
    if (isShowText) {
        console.log("".concat(text, " : ").concat(a, ", ").concat(b));
    }
    else {
        return n1 + n2;
    }
}
var a = 1;
var b = 2;
var isShowText = true;
var text = "Result is : ";
console.log(sum(a, b, isShowText, text));
