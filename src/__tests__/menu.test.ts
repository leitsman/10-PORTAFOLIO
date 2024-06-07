import { menuOpenClose } from "../ts/components/menu";

describe("function MENU", function () {
  beforeEach(function () {
    document.body.innerHTML = `
    <i id="menu__img-open"></i>
    <div class="menu__close" id="menu-principal">
        <i id="menu__img-close"></i>
        <ul>
            <li><a class="ul__item">Acerca de mí</a></li>
            <li><a class="ul__item">Mis habilidades</a></li>
            <li><a class="ul__item">Experiencia</a></li>
            <li><a class="ul__item">Portafolio</a></li>
            <li><a class="ul__item">Contacto</a></li>
        </ul></div>`;
  });
  describe("functions about BUTTONS OPEN CLOSE", function () {
    test("button open should be open menu", function () {
      const menuElement = document.getElementById("menu-principal");
      const imgOpenMenu = document.getElementById("menu__img-open");
      menuOpenClose();
      imgOpenMenu?.click();
      const result = menuElement?.classList.contains("menu__open");
      expect(result).toBeTruthy;
    });
    test("button close should be close menu", function () {
      const menuElement = document.getElementById("menu-principal");
      menuElement?.classList.add("menu__open");
      const imgCloseMenu = document.getElementById("menu__img-close");
      menuOpenClose();
      imgCloseMenu?.click();
      const result = menuElement?.classList.contains("menu__open");
      expect(result).toBeFalsy();
    });
  });
  describe("functions about for each ITEM of MENU", function () {
    test("item's menu should be close menu", function () {
      const menuElement = document.getElementById("menu-principal");
      const itemMenu = document.querySelectorAll(
        "a.ul__item"
      ) as NodeListOf<HTMLAnchorElement>;
      menuOpenClose();
      itemMenu.forEach((e) => {
        menuElement?.classList.add("menu__open");
        e.click();
        const result = menuElement?.classList.contains("menu__open");
        expect(result).toBeFalsy();
      });
    });
  });
});
