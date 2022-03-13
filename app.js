"use strict";
var _a;
var userName = "Phuong";
var user = {
    name: "test",
    age: 20,
};
var customerName = (_a = user.name) !== null && _a !== void 0 ? _a : "a";
var button = document.querySelector('button1');
console.log(22222, button);
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    console.log("Click me!");
});
console.log(userName);
