//ECMAScript 6 http://www.ecma-international.org/ecma-262/6.0/ECMA-262.pdf (Lipanj 2015)

//Pročitati
//https://github.com/lukehoban/es6features#readme

"use strict";
warn("for...of");
var nizObjekata = JSON.parse("[{\"ime\": \"Tomislav\", \"prezime\": \"Jakopec\"},{\"ime\": \"Dora\", \"prezime\": \"Krupićeva\"}]");

//ECMAScript 6 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
for (let value of nizObjekata) {
  log(value.ime);
}


//Browser compatibility
//IE Mobile No support

//ŠTO SAD?????

//transpile na verziju ECMAScript 5 dok svi preglednici ne budu podržavali ECMAScript 6
//na brzinu online https://babeljs.io/repl/
//rezultat
"use strict";
warn("transpile");
var nizObjekata = JSON.parse("[{\"ime\": \"Tomislav\", \"prezime\": \"Jakopec\"},{\"ime\": \"Dora\", \"prezime\": \"Krupićeva\"}]");

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = nizObjekata[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var value = _step.value;

    log(value.ime);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
