let searchBar = document.getElementById("searchBar");
let productCards = document.querySelectorAll(".product-card");

// Array of product names (optional but helps)
let products = [
    "StrideX Pro Runner",
    "StrideX AirFlex",
    "StrideX UltraBoost",
    "StrideX FusionLow",
    "StrideX Velocity Max",
    "StrideX Sports Prime"
];

searchBar.addEventListener("keyup", function () {
    let text = searchBar.value.toLowerCase();

    productCards.forEach(card => {
        let name = card.getAttribute("data-name").toLowerCase();

        if (name.includes(text)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
