function changeColorAndText1() {
  document.getElementById("column1").style.backgroundColor = "red";
  document.getElementById("heading1").innerText = "Goodbye";
  const newHeadingText = document.getElementById("textField1").value;
  document.getElementById("heading1").textContent = newHeadingText;
}
function changeColorAndText2() {
  document.getElementById("column2").style.backgroundColor = "aqua";
  document.getElementById("heading2").innerText = "Earth";
  const newHeadingText = document.getElementById("textField2").value;
  document.getElementById("heading2").textContent = newHeadingText;
}
