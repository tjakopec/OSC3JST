//https://www.infoq.com/news/2009/12/ecmascript5 (Prosinac, 2009)

"use strict";


//t=12;
//skripta.js:4 Uncaught ReferenceError: t is not defined(…)(anonymous function) @ skripta.js:4

var t = "pero";


//predstavljen JSON objekt

var nizObjekata = JSON.parse("[{\"ime\": \"Tomislav\", \"prezime\": \"Jakopec\"},{\"ime\": \"Dora\", \"prezime\": \"Krupićeva\"}]");

//<ECMAScript 5
console.log("klasični for");
for(var i=0; i<nizObjekata.length;i++){
	console.log(nizObjekata[i].ime);
}

//ECMAScript 5 dobar pregled https://www.youtube.com/watch?v=Kq4FpMe6cRs
console.log("foreach metoda");
nizObjekata.forEach(function(element) {
    console.log(element.ime);
});

