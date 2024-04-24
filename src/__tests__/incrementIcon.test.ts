import { increaseIcon } from "../ts/components/IncrementIcon";

describe("test INCREMENTICON", function () {
  beforeEach(function () {
    document.body.innerHTML = `
        <i class="redes__icon fa-3x"></i> <i class="redes__icon fa-3x"></i>`;
  });
  afterEach(function () {
    document.body.innerHTML = "";
  });
  test("si el ancho es menor a 1024 se intercambiaran clases", function () {
    const icon = document.querySelectorAll(".redes__icon");
    window.innerWidth = 1024;
    increaseIcon();
    icon.forEach(function (icon) {
      let resultOne = icon.classList.contains("fa-3x");
      let resultTwo = icon.classList.contains("fa-4x");

      expect(resultOne).toBeTruthy();
      expect(resultTwo).toBeFalsy();
    });
  });
  test("si el ancho es mayor a 1024 se intercambiaran clases", function () {
    const icon = document.querySelectorAll(".redes__icon");
    window.innerWidth = 1025;
    increaseIcon();
    icon.forEach(function (icon) {
      let resultOne = icon.classList.contains("fa-4x");
      let resultTwo = icon.classList.contains("fa-3x");

      expect(resultOne).toBeTruthy();
      expect(resultTwo).toBeFalsy();
    });
  });
});
