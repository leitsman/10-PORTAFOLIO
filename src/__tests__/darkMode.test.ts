import { darkMode } from "../ts/components/DarkMode";

describe("funcion DARKMODE", function () {
  beforeEach(function () {
    document.body.innerHTML = "";
  });

  test("deberia la funcion añadir la clase (dark) en body", function () {
    document.body.innerHTML = `<button id="buttonDark"></button>`;
    const button = document.getElementById("buttonDark") as HTMLButtonElement;
    darkMode();
    button.click();
    let result = document.body.classList.contains("dark");
    expect(result).toBeTruthy();
  });
});
