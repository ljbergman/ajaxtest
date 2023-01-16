
// Array
const arr:string[] = ["apa", "orangutang", "gorilla", "get", "giraff"];

console.log(arr);

// Objekt
let mittObjekt: {

 x: number,
 y: string,
 z: boolean,

} = {

   x: 12,
   y: "testtext",
   z: true,

}

console.log(mittObjekt);

// Funktion

function jonas(x:string):string { 

    return "Hej " + x;
    
}

console.log(jonas("Kalle"));

// For in loop
for (let i in arr) {

    console.log(jonas(arr[i]));

}








