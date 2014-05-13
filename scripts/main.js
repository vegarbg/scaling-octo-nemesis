requirejs.config({
    baseUrl: "scripts",
    paths: {
        "signals": "vendor/signals",
        "crossroads": "vendor/crossroads",
        "hasher": "vendor/hasher",
        "domReady": "vendor/domReady",
    },
    shim: {
        "crossroads": {
            deps: [ "signals" ],
            exports: "crossroads",
        },
        "hasher": {
            deps: [ "signals" ],
            exports: "hasher",
        },
    },
    deps: [ "base" ],
});
