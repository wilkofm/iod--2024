function changeColor() {
  document.getElementById("column1").style.backgroundColor = "red";
  document.getElementById("heading1").innerText = "Goodbye";
}
function changeText() {
  document.getElementById("column2").style.backgroundColor = "aqua";
  document.getElementById("heading2").innerText = "Earth";
  var inputvalue = document.getElementById("textField1").value;
  document.getElementById("heading1").innerText = inputValue;
}
