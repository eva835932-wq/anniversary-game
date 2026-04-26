// JS部分：检查密码
const correctPassword = "y"; // 设定为小写

function checkPassword() {
  // 获取输入，trim() 去掉空格，toLowerCase() 统一转为小写
  const input = document.getElementById("passwordInput").value.trim().toLowerCase();
  const result = document.getElementById("result");

  // 现在无论用户输入 Y 还是 y，input 变量都会变成 "y"
  if(input === correctPassword){
    result.textContent = "太棒啦！";
    result.style.color = "#81C784";
   
    setTimeout(function() {
      window.location.href = "../ending/index.html"; 
    }, 800);
  } else {
    result.textContent = "再想想吧";
    result.style.color = "#EF5350";
  }
}
