// Add a method conditionally.
Function.prototype.method = function (name, func) {
    //if (!this.prototype[name]) {
    this.prototype[name] = func;
    return this;
    //}
};

Function.method('new', function () {
    // Create a new object that inherits from the
    // constructor's prototype.
    var that = Object.create(this.prototype);
    // Invoke the constructor, binding –this- to
    // the new object.
    var other = this.apply(that, arguments);
    // If its return value isn't an object,
    // substitute the new object.
    return (typeof other === 'object' && other) || that;
});

// "method" method and defining an inherits method.
Function.method('inherits', function (Parent) {
    this.prototype = new Parent();
    return this;
});

// Takes a method name and returns a function that invokes that method.
Object.method('superior', function (name) {
    var that = this,
        method = that[name];
    return function () {
        return method.apply(that, arguments);
    };
});

/* ---------------------------------[jsp01] Count total of nodes with specific attribute name----------------------------------------- */

var walk_the_DOM = function walk(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walk(node, func);
        node = node.nextSibling;
    }
};
// Define a getElementsByAttribute function. It
// takes an attribute name string and an optional
// matching value. It calls walk_the_DOM, passing it a
// function that looks for an attribute name in the
// node. The matching nodes are accumulated in a
// results array.
var getElementsByAttribute = function (att, value) {
    var results = [];
    walk_the_DOM(document.body, function (node) {
        var actual = node.nodeType === 1 && node.getAttribute(att);
        if (typeof actual === 'string' &&
            (actual === value || typeof value !== 'string')) {
            results.push(node);
        }
    });
    return results;
};

/* ---------------------------------[jsp02] Object that produces a serial number----------------------------------------- */

var serial_maker = function () {
    // Produce an object that produces unique strings. A
    // unique string is made up of two parts: a prefix
    // and a sequence number. The object comes with
    // methods for setting the prefix and sequence
    // number, and a gensym method that produces unique
    // strings.
    var prefix = '';
    var seq = 0;
    return {
        set_prefix: function (p) {
            prefix = String(p);
        },
        set_seq: function (s) {
            seq = s;
        },
        gensym: function () {
            var result = prefix + seq;
            seq += 1;
            return result;
        }
    };
};
var seqer = serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensym();

/* ---------------------------------[jsp03] functional inheritance of coolCat with super method----------------------------------------- */

var mammal = function (spec) {
    var that = {};

    that.get_name = function () {
        return spec.name;
    };

    that.says = function () {
        return spec.saying || '';
    };

    return that;
};

var cat = function (spec) {
    spec.saying = spec.saying || 'meow';
    var that = mammal(spec);
    that.purr = function (n) {
        var i, s = '';
        for (i = 0; i < n; i += 1) {
            if (s) {
                s += '-';
            }
            s += 'r';
        }
        return s;
    };
    that.get_name = function () {
        return that.says() + " " + spec.name + " " + that.says();
    };
    return that;
};
var myCat = cat({ name: 'Henrietta' });

var coolcat = function (spec) {
    var that = cat(spec),
        super_get_name = that.superior('get_name');
    that.get_name = function (n) {
        return "like " + super_get_name() + " baby";
    };
    return that;
}

var myCoolCat = coolcat({ name: "Bix" });
var name = myCoolCat.get_name();
// console.log(name)

/* ---------------------------------[jsp04] Inheritance by parts----------------------------------------- */

var eventuality = function (that) {
    var registry = {};

    that.fire = function (event) {
        var array,
            func,
            i,
            type = typeof event == "string" ? event : event.type;

        if (registry.hasOwnProperty(type)) {
            array = registry[type];
            for (i = 0; i < array.length; i += 1) {
                handler = array[i]
                func = handler.method;
                if (typeof func === 'string') {
                    func = this[func];
                }
                func.apply(this,
                    handler.parameters || [event]
                );
            }
        }
        return this;
    };
    that.on = function (type, method, parameters) {
        var handler = {
            method: method,
            parameters: parameters
        };
        if (registry.hasOwnProperty(type)) {
            registry[type].push(handler);
        } else {
            registry[type] = [handler];
        }
        return this;
    };
    return that;
}

var myObject = { name: "test object" }
eventuality(myObject);

myObject.on("greet", function () {
    console.log("hello, " + this.name + "!");
});

myObject.fire("greet")