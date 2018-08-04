let numsArr = [];
for (let i = 0; i < 150; i++) {
  numsArr.push(i);
}
function generateHTML(arr) {
  arr.forEach(element => {
    let aElement = document.createElement("a");
    aElement.textContent = element;
    aElement.className = "anchor";
    aElement.addEventListener("click", remove);
    app.appendChild(aElement);
  });
}
generateHTML(numsArr);

function remove(e) {
  let index = parseInt(e.target.textContent);
  console.log(index);
  numsArr.splice(index, 1);
  app.innerHTML = "";
  generateHTML(numsArr);
}

ascend.addEventListener("click", ascendNums);
descend.addEventListener("click", descendNums);
shuffle.addEventListener("click", shuffleNums);

function ascendNums(e) {
  numsArr.sort(function(a, b) {
    return a - b;
  });
  app.innerHTML = "";
  generateHTML(numsArr);
}
function descendNums(e) {
  numsArr.sort(function(a, b) {
    return b - a;
  });
  app.innerHTML = "";
  generateHTML(numsArr);
}

function shuffleNums(e) {
  app.innerHTML = "";
  for (let i = 0; i < 150; i++) {
    randomNum = Math.floor(Math.random() * 150);
    [numsArr[i], numsArr[randomNum]] = [numsArr[randomNum], numsArr[i]];
  }
  generateHTML(numsArr);
}
