let login = prompt("enter the program please");
let password;
if(login === "Admin") {
  password = prompt("enter password");
  if(password === "TheMaster") {
    alert("Welcome");
  } else if(password === "" || password === null || password === undefined) {
    alert("cancelled");
  }
  else {
    alert("Wrong password");
  }
} else if(login === "" || login === null || login === undefined){
  alert("cancelled");
} else {
  alert("i do not trust you");
}

