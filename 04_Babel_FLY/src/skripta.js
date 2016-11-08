

"use strict";
//primjer s https://github.com/voronianski/babel-transform-in-browser#download
const multiplier = (x) => (y) => x * y;
		const double = multiplier(2);
		const result = double(3);
		console.log(result); 
		// 6

		class Cat { 
			constructor(name) {
				this.name = name;
			}
			speak() {
				console.log(this.name + ' makes a noise.');
			}
		}

		class Lion extends Cat {
			speak() {
				super.speak();
				console.log(this.name + ' roars.');
			}
		}

		let cat = new Cat('Simon');
		cat.speak();
		// Simon makes a noise.

		let lion = new Lion('Sam');
		lion.speak();
		// Sam makes a noise. 
		// Sam roars.