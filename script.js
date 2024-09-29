document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const communityExchangeToggle = document.getElementById("community-exchange-toggle");
    const communityExchangeSubmenu = document.getElementById("community-exchange-submenu");

    // Toggle the main menu visibility
    menuToggle.addEventListener("click", function(event) {
        event.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Toggle the Community Exchange submenu visibility
    communityExchangeToggle.addEventListener("click", function(event) {
        event.preventDefault();
        communityExchangeSubmenu.style.display = communityExchangeSubmenu.style.display === "block" ? "none" : "block";
    });
});
