function checkPassword() {
  const input = document.getElementById("password").value;
  const message = document.getElementById("message");

  const correctPassword = "102.66,25.06";

  if (input === correctPassword) {
    message.style.color = "lightgreen";
    message.innerText = "我就知道我家小毛最最最聪明啦！";

    setTimeout(() => {
      window.location.href = "https://codepen.io/mrjrnjiu-the-selector/full/myrqERx";
    }, 1500);
  } else {
    message.style.color = "salmon";
    message.innerText = "好像不太对，再想想吧";
  }
}