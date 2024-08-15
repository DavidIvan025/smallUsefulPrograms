// Add a method conditionally.
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
};

var Quo = function (string) {
    this.status = string;
};
// called get_status.
Quo.prototype.get_statu = function () {
    return this.status;
};
// Make an instance of Quo.
var myQuo = new Quo("confused");
document.writeln(myQuo.get_statu());


var statusObject = {
    status: 'A-OK'
};

// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on
// statusObject even though statusObject does not have
// a get_status method.
var status = Quo.prototype.get_statu.apply(statusObject);

document.writeln(status)


Number.method('integer', function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});
document.writeln((-10 / 3).integer());