"use strict";
const arr = ["apa", "orangutang", "gorilla", "get", "giraff"];
console.log(arr);
let mittObjekt = {
    x: 12,
    y: "testtext",
    z: true,
};
console.log(mittObjekt);
function jonas(x) {
    return "Hej " + x;
}
console.log(jonas("Kalle"));
for (let i in arr) {
    console.log(jonas(arr[i]));
}
