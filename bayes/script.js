function checkAnswer() {
  const input = document.getElementById("answer").value;

  if (input === "5.4") {
    window.location.href = "../climbing/index.html";
  } else {
    document.getElementById("result").innerText = "再想想 ✨";
  }
}
