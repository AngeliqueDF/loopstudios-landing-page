const MobileMenu = function (headerNavSelector) {
	return {
		toggleMenu: function () {
			const headerNav = document.querySelector(headerNavSelector);
			const body = document.querySelector("body");
			headerNav.classList.toggle("mobile-menu-open");
			body.classList.toggle("mobile-menu-open");
		},
		/**
		 * Removes the .mobile-menu-open class from header and body. Used when the screen width is above 1440px.
		 */
		removeMobileMenu: function () {
			if (window.innerWidth >= 1440) {
				const elementsWithClass = Array.from(
					document.querySelectorAll(".mobile-menu-open")
				);
				if (elementsWithClass.length) {
					elementsWithClass.forEach((element) =>
						element.classList.remove("mobile-menu-open")
					);
				}
			}
		},
	};
};

Object.freeze(MobileMenu);

export default MobileMenu;
