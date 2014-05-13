requirejs.config({
    baseUrl: "scripts",
    paths: {
        "signals": "vendor/signals",
        "crossroads": "vendor/crossroads",
        "hasher": "vendor/hasher",
        "domReady": "vendor/domReady",
    },
    deps: [ "base" ],
});
