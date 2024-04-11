class MobileNavbar {
    constructor(menu_mobile, menu, menuli) {
        this.menu_mobile = document.querySelector(menu_mobile);
        this.menu = document.querySelector(menu);
        this.menuli = document.querySelectorAll(menuli);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this)
    }

    animateLinks() {
        this.menuli.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `menuliFade 0.5s ease forwards ${index / 7 + 0.3 }s`);
        });
    }

    handleClick () {
        this.menu.classList.toggle(this.activeClass);
        this.menu_mobile.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.menu_mobile.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.menu_mobile) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".menu_mobile",
    ".menu",
    ".menu li",
);
mobileNavbar.init();  