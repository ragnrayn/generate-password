let passwordField = document.querySelector("#password-field");
let generatePasswordBtn = document.querySelector("#generate-password-btn");
let quantityInput = document.querySelector("#quantity-input");
let checkedCheckbox = document.querySelector("#checked-checkbox");

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
    if(checkedCheckbox.checked){
      let passwordStr = generatePassword(quantityInput.value || 20).replace(/[^a-zA-Z ]/g, "");
      passwordField.value = passwordStr;
    }else{
      passwordField.value = generatePassword(quantityInput.value || 20);
    }

});

// First generated password on page
window.onload = () => {
  passwordField.value = generatePassword();
};
