'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var multiplier = function multiplier(x) {
    return function (y) {
        return x * y;
    };
};
var double = multiplier(2);
var result = double(3);
console.log(result);
// 6

var Cat = function () {
    function Cat(name) {
        _classCallCheck(this, Cat);

        this.name = name;
    }

    _createClass(Cat, [{
        key: 'speak',
        value: function speak() {
            console.log(this.name + ' makes a noise.');
        }
    }]);

    return Cat;
}();

var Lion = function (_Cat) {
    _inherits(Lion, _Cat);

    function Lion() {
        _classCallCheck(this, Lion);

        return _possibleConstructorReturn(this, (Lion.__proto__ || Object.getPrototypeOf(Lion)).apply(this, arguments));
    }

    _createClass(Lion, [{
        key: 'speak',
        value: function speak() {
            _get(Lion.prototype.__proto__ || Object.getPrototypeOf(Lion.prototype), 'speak', this).call(this);
            console.log(this.name + ' roars.');
        }
    }]);

    return Lion;
}(Cat);

var cat = new Cat('Simon');
cat.speak();
// Simon makes a noise.

var lion = new Lion('Sam');
lion.speak();
// Sam makes a noise. 
// Sam roars.