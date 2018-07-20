const body = document.body;
const children = body.children;
const wrapper = children[0];

Array.from(wrapper.children).forEach((element, index)=>{
  if(index == 2 || index ==3 || index==8 || index == 9 || index == 26 || index ==27 || index==32|| index==33) {
    element.style.backgroundColor = "navy"
  }
  if(index == 12 || index ==13 || index == 15 || index == 16 || index ==17 || index==18|| index==19 || index == 20 || index==22 || index==23) {
    element.style.backgroundColor = "CornflowerBlue "
  }
  if(index == 14 || index ==21) {
    element.style.backgroundColor = "crimson "
  }
});

