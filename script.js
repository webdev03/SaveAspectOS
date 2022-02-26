function addToList() {
  var signer = document.getElementById("userInput").value;
  document.getElementById("demo").innerHTML = "Signed by: " + signer;
  alert("Thanks for signing, " + signer)
}
