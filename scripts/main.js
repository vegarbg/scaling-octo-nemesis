requirejs.config({
    baseUrl: "scripts",
});

(function() {
    var e, n;
    e = document.querySelectorAll("p")[0];
    n = document.createElement("p");
    n.textContent = "Seems to be working.";
    e.parentNode.appendChild(n);
})();
