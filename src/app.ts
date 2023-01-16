
/*
let p = new Promise((success, fail) => {
     // detta är executo, task code
});

p.then(() => {
    //on success
});

// =========================================


function foo() {

     return new Promise((success, fail) => success('unicorn')


     );

}

async function foo2() {
    return 'unicorn';
}

*/



console.log("Loading cats...");

const url = "https://api.thecatapi.com/v1/images/search?limit=10";
const p = fetch(url)
    .then(response => {
        //console.log(response.json());
        return response.json();
    }).then(catsArray => {
        //console.log(catsArray);
        logCat(catsArray);
    });

//console.log("hit? 2");

function logCat(cats: any) {
    console.log("Cat loaded", cats[0]);
}
