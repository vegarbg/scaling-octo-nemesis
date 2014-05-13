requirejs.config({
    baseUrl: "scripts",
    paths: {
        "signals": "vendor/signals.min",
        "crossroads": "vendor/crossroads",
        "hasher": "vendor/hasher",
    },
    shim: {
        "signals": {
            exports: "signals",
        },
        "crossroads": {
            deps: [ "signals" ],
            exports: "crossroads",
        },
        "hasher": {
            deps: [ "signals" ],
            exports: "hasher",
        },
    },
});

requirejs(["crossroads", "hasher"],
function(crossroads, hasher) {
    var e, n;
    e = document.querySelectorAll("p")[0];
    n = document.createElement("p");
    n.textContent = "Seems to be working.";
    e.parentNode.appendChild(n);

    console.log(crossroads);
    console.log(hasher);
});
