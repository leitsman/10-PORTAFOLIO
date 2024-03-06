export function menuOpenClose(): void {
  const menuPrincipal = document.getElementById(
    "menu-principal"
  ) as HTMLDivElement;
  const imgOpenMenu = document.getElementById("menu__img-open") as HTMLElement;
  const imgCloseMenu = document.getElementById(
    "menu__img-close"
  ) as HTMLElement;

  imgOpenMenu?.addEventListener("click", (e) =>
    menuPrincipal?.classList.add("menu__open")
  );
  imgCloseMenu?.addEventListener("click", (e) =>
    menuPrincipal?.classList.remove("menu__open")
  );
  clickAndCloseMenu(menuPrincipal);
}
//! =============== CLICK AND CLOSE MENU
function clickAndCloseMenu(elementHtml: HTMLElement | null) {
  const itemMenu = document.querySelectorAll("a.ul__item");

  itemMenu.forEach((button) => {
    button.addEventListener("click", (e) => {
      elementHtml?.classList.remove("menu__open");
    });
  });
}
