/* Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
}; */

function test() {
    var testVar = document.getElementById("test");
    var newDiv = document.createElement("a");
    newDiv.innerHTML = "Click Here!"
    testVar.appendChild(newDiv)
}

test()