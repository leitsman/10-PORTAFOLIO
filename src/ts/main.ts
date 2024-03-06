import { menuOpenClose } from "./components/menu.js";
import { darkMode } from "./components/DarkMode.js";
import { increaseIcon } from "./components/IncrementIcon.js";
import { isScroll } from "./components/Header.js";

window.addEventListener("DOMContentLoaded", (e) => {
  menuOpenClose();
  darkMode();
  increaseIcon();
  isScroll();
});
