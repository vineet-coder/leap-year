var textInput = document.querySelector("#txtinput");
var btnTranslate = document.querySelector("#btntranslate");
var outputDiv = document.querySelector("#output");
function clickHandler(year) {
  var year = textInput.value;

   checkLeapYear(year) 
    if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) 
      console.log(checkLeapYear(year));
   

}

btnTranslate.addEventListener("click", clickHandler);
