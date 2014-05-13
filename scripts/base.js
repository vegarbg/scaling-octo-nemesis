define(function (require) {
    var domReady, crossroads, hasher;
    domReady = require("domReady");
    crossroads = require("crossroads");
    hasher = require("hasher");

    domReady(function() {
        var aboutBtn, aboutBox, parseHash;

        crossroads.addRoute("", function() {
            aboutBox = document.querySelectorAll(".about")[0];
            aboutBox.style.display = "none";
        });
        crossroads.addRoute("about", function() {
            aboutBox = document.querySelectorAll(".about")[0];
            aboutBox.style.display = "block";
        });

        parseHash = function(newHash, oldHash) {
            crossroads.parse(newHash);
        };

        hasher.initialized.add(parseHash);
        hasher.changed.add(parseHash);
        hasher.init();

        aboutBtn = document.querySelectorAll(".btn-about")[0];
        aboutBtn.addEventListener("click", function() {
            hasher.setHash("about");
        });
    });
});
