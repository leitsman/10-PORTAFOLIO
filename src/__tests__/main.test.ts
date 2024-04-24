import { menuOpenClose } from "../ts/components/menu";
import { darkMode } from "../ts/components/DarkMode";
import { increaseIcon } from "../ts/components/IncrementIcon";
import { isScroll } from "../ts/components/Header";
import { DOMReady } from "../ts/main";
jest.mock("../ts/components/menu");
jest.mock("../ts/components/IncrementIcon");
jest.mock("../ts/components/DarkMode");
jest.mock("../ts/components/Header");

//!warning: para que los tests aprueben se debe quitar la extension .js de imports de  main.js
//! cuando se lance a produccion se debe de añadir nuevamente la extension .js a los imports
describe("function MAIN ", function () {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should be call all functions in DOMReady", function () {
    DOMReady();
    expect(menuOpenClose).toHaveBeenCalled();
    expect(darkMode).toHaveBeenCalled();
    expect(increaseIcon).toHaveBeenCalled();
    expect(isScroll).toHaveBeenCalled();
  });
});
