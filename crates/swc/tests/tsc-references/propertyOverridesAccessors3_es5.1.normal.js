// @target: esnext
// @useDefineForClassFields: true
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _create_class from "@swc/helpers/src/_create_class.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var Animal = /*#__PURE__*/ function() {
    "use strict";
    function Animal() {
        _class_call_check(this, Animal);
        this._sound = "rustling noise in the bushes";
    }
    var _proto = Animal.prototype;
    _proto.makeSound = function makeSound() {
        console.log(this._sound);
    };
    _create_class(Animal, [
        {
            key: "sound",
            get: function get() {
                return this._sound;
            },
            set: function set(val) {
                this._sound = val;
            /* some important code here, perhaps tracking known sounds, etc */ }
        }
    ]);
    return Animal;
}();
var a = new Animal;
a.makeSound() // 'rustling noise in the bushes'
;
var Lion = /*#__PURE__*/ function(Animal) {
    "use strict";
    _inherits(Lion, Animal);
    var _super = _create_super(Lion);
    function Lion() {
        _class_call_check(this, Lion);
        var _this;
        _this = _super.apply(this, arguments);
        _this.sound = "RAWR!" // error here
        ;
        return _this;
    }
    return Lion;
}(Animal);
var lion = new Lion;
lion.makeSound() // with [[Define]]: Expected "RAWR!" but got "rustling noise in the bushes"
;
