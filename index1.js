// Knapp 1: ändrar artistnamn (nav-länkar)
document.querySelector("#knapp-artister").onclick = function () {
    document.querySelectorAll("nav a").forEach(a => a.style.color = "red");
};

// Knapp 2: ändrar figcaption
document.querySelector("#knapp-text").onclick = function () {
    document.querySelectorAll("figcaption").forEach(f => f.style.color = "green");
};