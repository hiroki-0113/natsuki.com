
class MobileMenu {
  constructor(){
    this.DOM = {};
    this.DOM.menu = document.querySelector('.header__menu');
    this.DOM.nav = document.querySelector('.header__nav');
    this.DOM.nav.addEventListener('click',this._toggle.bind(this));
  }

  _toggle(){
    this.DOM.menu.classList.toggle('slide');
    this.DOM.nav.classList.toggle('inview');
  }
}
new MobileMenu();

