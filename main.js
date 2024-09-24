let password = document.querySelector(".pass");
let num = document.querySelector(".num input");
let sym = document.querySelector(".sym input");
let btn = document.querySelector("button");
let select = document.querySelector("select");
let copy = document.querySelector(".copy");

let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charsNums =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let charsSympol =
  '"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"!#$%&@#$%^&()_+*/-{|}:;<=>?~."';
let charsNumsSympol =
  '" !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"';

btn.onclick = function () {
  addRandomPassword();
};

function addRandomPassword() {
  var randomChar;
  password.value = "";
  for (let i = 0; i < select.value; i++) {
    if ((sym.checked && num.checked) == true) {
      randomChar = Math.random() * charsNumsSympol.length;
      password.value += charsNumsSympol.substring(randomChar, randomChar + 1);
    } else if (num.checked == true) {
      randomChar = Math.random() * charsNums.length;
      password.value += charsNums.substring(randomChar, randomChar + 1);
    } else if (sym.checked == true) {
      randomChar = Math.random() * charsSympol.length;
      password.value += charsSympol.substring(randomChar, randomChar + 1);
    } else if ((sym.checked && num.checked) == false) {
      randomChar = Math.random() * chars.length;
      password.value += chars.substring(randomChar, randomChar + 1);
    }
  }
}

copy.addEventListener("click", function () {
  password.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(password.value);

  copy.innerHTML = "Copied";

  setTimeout(() => {
    copy.innerHTML = "Copy";
  }, 1000);
});
