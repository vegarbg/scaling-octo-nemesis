define(function (require) {
    var domReady, crossroads, hasher;
    domReady = require("domReady");
    crossroads = require("crossroads");
    hasher = require("hasher");

    domReady(function() {
        var e, n;
        e = document.querySelectorAll("p")[0];
        n = document.createElement("p");
        n.textContent = "Seems to be working.";
        e.parentNode.appendChild(n);

        console.log(crossroads);
        console.log(hasher);
    });
});
