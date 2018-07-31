btn.addEventListener('click', colorize);
function colorize() {
  let randomNum = Math.floor((Math.random() * 20)) + 1
  let box = document.querySelector(`[data-id="${randomNum}"]`);
  if(box.style.backgroundColor == '') {
    box.style.backgroundColor = "LightSkyBlue";
  } else if(box.style.backgroundColor == "lightskyblue") {
    box.style.backgroundColor = "RoyalBlue ";
  } else if (box.style.backgroundColor == "royalblue") {
    box.style.backgroundColor = "DarkBlue"; 
  } else if(box.style.backgroundColor == "darkblue"){
    box.style.backgroundColor = '';
  }
}