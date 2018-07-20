let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let numArr = [];
  lowerCaseArr = arr.map(item => {
    return item.toLowerCase();
  });
  lowerCaseArr.forEach(function(item, index, array) {
    for (let j = 1; j < array.length - index; j++) {
      for (let i = 0; i < item.length; i++) {
        if (
          !item.includes(array[index + j][i]) ||
          item.length !== array[index + j].length ||
          numArr.includes(index + j)
        ) {
          break;
        }
        if (i == item.length - 1) {
          numArr.push(index + j);
          break;
        }
      }
    }
  });

  numArr.sort((a, b) => {
    return b - a;
  });
  numArr.forEach(index => {
    lowerCaseArr.splice(index, 1);
  });
  return lowerCaseArr;
}

console.log(aclean(arr));
