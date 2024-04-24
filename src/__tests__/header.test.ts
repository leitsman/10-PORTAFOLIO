import { isScroll } from "../ts/components/Header";

describe("funcion HEADER", function () {
  beforeEach(function () {
    document.body.innerHTML = `<header class="header">
    <div class="header__container flex"></div>
    </header>
    <a href="#pagPrincipal" class="container__arrow-up"></a>`;
  });
  afterEach(function () {
    document.body.innerHTML = "";
  });

  //?HEADER
  describe("container HEADERFIX", function () {
    test("cuando scrolly sea >= a 1, se agrege una clase a .header", function () {
      let header = document.querySelector(".header");
      isScroll();
      window.scrollY = 1;
      window.dispatchEvent(new Event("scroll"));
      let result = header?.classList.contains("header__fixed");
      expect(result).toBeTruthy();
    });
    test("si scrollY es 0, header no agrega ", function () {
      let header = document.querySelector(".header");
      isScroll();
      window.scrollY = 0;
      window.dispatchEvent(new Event("scroll"));
      let result = header?.classList.contains("header__fixed");
      expect(result).toBeFalsy();
    });
  });

  describe("inside HEADERFIX -> HEADERCONTAINER", function () {
    test("if scroll >= 1 add class header__container--shadow", function () {
      const contentHeader = document.querySelector(".header__container");
      isScroll();
      window.scrollY = 1;
      window.dispatchEvent(new Event("scroll"));
      let result = contentHeader?.classList.contains(
        "header__container--shadow"
      );
      expect(result).toBeTruthy();
    });
    test("if scroll < 0 remove class header__container--shadow", function () {
      const contentHeader = document.querySelector(".header__container");
      isScroll();
      window.scrollY = 0;
      window.dispatchEvent(new Event("scroll"));
      let result = contentHeader?.classList.contains(
        "header__container--shadow"
      );
      expect(result).toBeFalsy();
    });
  });

  describe("botton fix ARROW UP", function () {
    test("if scroll > 380 add class container__arrow-up--active", function () {
      const arrowButton = document.querySelector(".container__arrow-up");
      isScroll();
      window.scrollY = 380;
      window.dispatchEvent(new Event("scroll"));
      let result = arrowButton?.classList.contains(
        "container__arrow-up--active"
      );
      expect(result).toBeTruthy();
    });
    test("if scroll < 380 remove class container__arrow-up--active", function () {
      const arrowButton = document.querySelector(".container__arrow-up");
      isScroll();
      window.scrollY = 379;
      window.dispatchEvent(new Event("scroll"));
      let result = arrowButton?.classList.contains(
        "container__arrow-up--active"
      );
      expect(result).toBeFalsy();
    });
  });
});
