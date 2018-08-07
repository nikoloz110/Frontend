let users = []
const saveUsers = function (usersArray) {
 
 localStorage.setItem('users', JSON.stringify(usersArray));
 }
const getUsers = function() {
 users = JSON.parse(localStorage.getItem('users'));
}
const generateDOM = function(usersList) {
  //empty dom
  app.innerHTML = '';
  //generate dom
  usersList.forEach(function(user, index){
    let pElement = document.createElement('p');
    pElement.textContent = `Name: ${user.name}  |||  City: ${user.address.city}`
    let removeBbn = document.createElement('button');
    let editBtn = document.createElement('button');
    removeBbn.addEventListener('click', remove)
    editBtn.addEventListener('click', edit)
    removeBbn.textContent = 'remove'
    removeBbn.setAttribute('data-id', `${index}`);
    editBtn.textContent = 'edit'
    editBtn.setAttribute('data-id', `${index}`);
    pElement.appendChild(removeBbn)
    pElement.appendChild(editBtn)
     app.appendChild(pElement);
  });
 }
const remove = function(e) {
  let index = (parseInt(e.target.dataset.id));
  users.splice(index, 1);
  saveUsers(users);
  getUsers();
  generateDOM(users);
}
const edit = function(e) {
  let index = (parseInt(e.target.dataset.id));
  getUsers();
  let newName = prompt('enter user name');
  let newCity = prompt('enter user city');
  users[index].name = newName;
  users[index].address.city = newCity;
  saveUsers(users);
  generateDOM(users);
}
if(!localStorage.getItem('users')) { //check if i already have fetched data
fetch('https://jsonplaceholder.typicode.com/users')
 .then(function(data) {
   return data.json();
   })
   .then((json) => {
     saveUsers(json)
     getUsers();
     generateDOM(users);
   }).catch((error) => {
     console.log(error);
   })
  } else {
    getUsers();
    generateDOM(users);
  }
