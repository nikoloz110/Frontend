  let userNum = Number(prompt("enter number"));

  while (isNaN(userNum)) {
    alert("error");
    userNum = Number(prompt("enter number"));
  }