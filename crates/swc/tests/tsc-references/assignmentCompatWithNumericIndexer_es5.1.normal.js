// Derived type indexer must be subtype of base type indexer
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var A = function A() {
    "use strict";
    _class_call_check(this, A);
};
var a;
var b;
a = b;
b = a; // error
var b2;
a = b2;
b2 = a; // error
var Generics;
(function(Generics) {
    var foo = function foo() {
        var a;
        var b;
        a = b; // error
        b = a; // error
        var b2;
        a = b2; // error
        b2 = a; // error
        var b3;
        a = b3; // ok
        b3 = a; // ok
    };
    var A = function A() {
        "use strict";
        _class_call_check(this, A);
    };
    var B = /*#__PURE__*/ function(A) {
        "use strict";
        _inherits(B, A);
        var _super = _create_super(B);
        function B() {
            _class_call_check(this, B);
            return _super.apply(this, arguments);
        }
        return B;
    }(A);
})(Generics || (Generics = {}));
