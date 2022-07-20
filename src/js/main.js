import MobileMenu from "./MobileMenu";

const mobileMenuToggler = MobileMenu("header");

// If the user resizes the window when the mobile menu is open, make sure the menu is not visible if the screen width is above 1440px.
window.addEventListener("resize", function () {
	mobileMenuToggler.removeMobileMenu();
});

document.querySelector("#mobile-menu-toggle").addEventListener("click", (e) => {
	mobileMenuToggler.toggleMenu();
});
