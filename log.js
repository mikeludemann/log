(function () {
    var method;
    var insert = function () { };
    var allMethods = [
        'assert', 
        'clear', 
        'count', 
        'debug', 
        'dir', 
        'dirxml', 
        'error',
        'exception', 
        'group', 
        'groupCollapsed', 
        'groupEnd', 
        'info', 
        'log',
        'markTimeline', 
        'profile', 
        'profileEnd', 
        'table', 
        'time', 
        'timeEnd',
        'timeStamp', 
        'trace', 
        'warn'
    ];
    var length = allMethods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = allMethods[length];

        if (!console[method]) {
            console[method] = insert;
        }
    }


    if (Function.prototype.bind) {
        window.log = Function.prototype.bind.call(console.log, console);
    }
    else {
        window.log = function () {
            Function.prototype.apply.call(console.log, console, arguments);
        };
    }
})();