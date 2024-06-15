let passwordField = document.querySelector("#password-field");
let generatePasswordBtn = document.querySelector("#generate-password-btn");

// Generate Password
var generatePassword = (
  length = 20,
  characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$"
) =>
  Array.from(crypto.getRandomValues(new Uint32Array(length)))
    .map((x) => characters[x % characters.length])
    .join("");

// When press on button - generate new password
generatePasswordBtn.addEventListener("click", () => {
    passwordField.value = generatePassword();
});

// First generated password on page
window.onload = () => {
  passwordField.value = generatePassword();
};
