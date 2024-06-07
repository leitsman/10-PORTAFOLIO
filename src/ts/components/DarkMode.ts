export function darkMode(): void {
  const btnDark = document.getElementById("buttonDark") as HTMLButtonElement;

  btnDark?.addEventListener("click", (e) => {
    document.body.classList.toggle("dark");
  });
}
