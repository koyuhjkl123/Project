// JavaScript 코드
function toggleInfo(message) {
  var infoBox = document.getElementById("infoBox");
  infoBox.innerHTML = "<p>" + message + "</p>";
  infoBox.style.display = "block";
}