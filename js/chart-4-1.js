// Anonymous functions
var anonymousFunction = function() {

    window.onload = function() {
        assert(true, "power!");
    };

    var ninja = {
        shout: function() {
            assert(true, "Ninja");
        }
    };

    ninja.shout();

    // Force window onload event for this case:
    var evt = document.createEvent('Event');  
    evt.initEvent('load', false, false);  
    window.dispatchEvent(evt);

    setTimeout(function() {
        assert(true, "Forever!");
    }, 500);
};
