// @target: es6
class Foo {
}
class Foo2 {
}
class C {
    // Computed properties
    get ["get1"]() {
        return new Foo;
    }
    set ["set1"](p) {}
}
