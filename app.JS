var textInput = document.querySelector("#txtinput");
var btnTranslate = document.querySelector("#btntranslate");
var outputDiv = document.querySelector("#output");
function clickHandler() {
  var year = textInput.value;

  function checkLeapYear(year) {
    if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
      console.log(year + " is a leap year");
    } else {
      console.log(year + " is not a leap year");
    }
  }
}

btnTranslate.addEventListener("click", clickHandler);
