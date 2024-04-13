// CSS class name for dark theme
const darkTheme = "dark-theme";

const darkThemeSetUp = () => {
  if (getCurrentTheme() === "dark") {
    document.getElementById("toggleBtn").checked = true;
    document.getElementById("mode-text").textContent = "Dark Mode";
  } else {
    document.getElementById("toggleBtn").checked = false;
    document.getElementById("mode-text").textContent = "Light Mode";
  }
};

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";



const themeButton = document.getElementById("toggleBtn");
themeButton.addEventListener("change", () => {
  document.body.classList.toggle(darkTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  darkThemeSetUp();
});
