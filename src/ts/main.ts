import { menuOpenClose } from "./components/menu.js";
import { darkMode } from "./components/DarkMode.js";
import { increaseIcon } from "./components/IncrementIcon.js";
import { isScroll } from "./components/Header.js";

export function DOMReady() {
  menuOpenClose();
  darkMode();
  increaseIcon();
  isScroll();
}
window.addEventListener("DOMContentLoaded", DOMReady);
