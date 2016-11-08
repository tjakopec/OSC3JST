"use strict";

//ne radi ovo
//import "classes/HelloWorld.js";


class HelloWorld {
        constructor(poruka) {
          this.poruka = poruka;
        }

        pozdraviSvijet() {
         return this.poruka;
        }
    };

    var o = new HelloWorld('Pozdrav svijetu');
    var element = document.querySelector('#poruka');
    element.innerHTML = o.pozdraviSvijet();