//@target: es6
import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "Hello ",
        " world!"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function declare(x) {
    for(var _len = arguments.length, ys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        ys[_key - 1] = arguments[_key];
    }
}
declare(_templateObject(), 0);
