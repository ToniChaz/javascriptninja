// Asyncronous simple test
var asynchronousSimpleTest = function() {
    test("Async Test #1", function() {
        pause();
        setTimeout(function() {
            assert(true, "First test completed");
            resume();
        }, 1000);
    });
    test("Async Test #1", function() {
        pause();
        setTimeout(function() {
            assert(true, "Second test completed");
            resume();
        }, 1000);
    });
    test("isNible()", function() {
        pause();
        setTimeout(function() {
            assert(typeof window.isNible === "function", "isNible() defined");
            resume();
        }, 1000);
        pause();
        setTimeout(function() {
            assert(isNible.name === "isNible", "isNible() is global");
            resume();
        }, 1000);
    });
};
// example functions
function isNible() {
    return true;
}

// Call functions
var callFunctions = function() {
    test("Creep in window", function() {
        assert(creep() === window, "Creeping in the window");
    });

    test("Sneak in window", function() {
        var sneak = creep;
        assert(sneak() === window, "Sneaking in the window");
    });

    test("Ninja1 skulking", function() {
        var ninja1 = {
            skulk: creep
        };
        assert(ninja1.skulk() === ninja1, "The 1 ninja is skulking");
    });

    test("Ninja2 skulking", function() {
        var ninja2 = {
            skulk: creep
        };
        assert(ninja2.skulk() === ninja2, "The 2 ninja is skulking");
    });
};

// example functions
function creep() {
    return this;
}

// Apply & Call
var applyCall = function() {
    function jungle() {
        var result = 0;
        for (var i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
        this.result = result;
    }
    var ninja1 = {};
    var ninja2 = {};

    jungle.apply(ninja1, [1, 2, 3, 4]);
    jungle.call(ninja2, 5, 6, 7, 8);

    test("Apply", function() {
        assert(ninja1.result === 10, "Jungled via apply");
    });
    test("Call", function() {
        assert(ninja2.result === 26, "Jungled via call");
    });
};

// For each
var forEach = function() {
    function _forEach(list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback.call(list[i], i);
        }
    }
    var weapons = ["knife", "katana", "bomb"];
    _forEach(weapons, function(index) {
            assert(this == weapons[index], "Got the excepted value of " + weapons[index]);
    });
};
