function checkAnswer() {
  const input = document.getElementById("answer").value;

  if (input === "5.4") {
    window.location.href = "final.html";
  } else {
    document.getElementById("result").innerText = "再想想 ✨";
  }
}