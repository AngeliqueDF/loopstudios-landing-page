import MobileMenu from "./MobileMenu";

const mobileMenuToggler = MobileMenu("header");

window.addEventListener("resize", function () {
	mobileMenuToggler.removeMobileMenu();
});

document.querySelector("#mobile-menu-toggle").addEventListener("click", (e) => {
	mobileMenuToggler.toggleMenu();
});
