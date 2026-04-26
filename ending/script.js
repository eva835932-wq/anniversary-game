const lines = document.querySelectorAll(".line");

// 逐行浮现
lines.forEach((line, index) => {
  setTimeout(() => {
    line.classList.add("show");
  }, index * 2000);
});