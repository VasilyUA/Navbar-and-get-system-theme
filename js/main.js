const isDarkMode = window?.matchMedia("(prefers-color-scheme: dark)")?.matches;

const body = document.querySelector("body");
body.style.backgroundColor = isDarkMode ? "#222" : "#fff";
