var textInput = document.querySelector("#txtinput");
var btnTranslate = document.querySelector("#btntranslate");
var outputDiv = document.querySelector("#output");

function clickHandler() {
  var year = textInput.value;

  function ckeckLeapYear(year){
if ((yeear % 4 === o) && (year % 100 ===0)|| (year % 400 ===0)){
    var result = (year + "this is leap year")
    console.log(result);
    outputDiv.innerText = result;
} 
}

btnTranslate.addEventListener("click", clickHandler);