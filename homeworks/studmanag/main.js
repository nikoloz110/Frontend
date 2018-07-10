//Define UI vars
const addDayBtn = document.querySelector(".addDay");
const removeDayBtn = document.querySelector(".removeDay");
const removeStudentBtn = document.querySelector(".removeStudent");
const addStudentBtn = document.getElementById("addStudent");
const datesTable = document.querySelector(".datesTable");
const nameAvgsTable = document.querySelector(".nameAvgsTable");
const marksTable = document.querySelector(".marksTable");
const closeStatisticsBtn = document.querySelector(".closeStatisticsBtn");
const statsBtn = document.querySelector(".statsBtn");
const statistics = document.querySelector(".statistics");

//Load all eventListeners
loadEventListeners();

function loadEventListeners() {
  //Add day event
  addDayBtn.addEventListener("click", addDay);
  //Remove day event
  removeDayBtn.addEventListener("click", removeDay);
  //Add student event
  addStudentBtn.addEventListener("click", addStudent);
  //Remove student
  removeStudentBtn.addEventListener("click", removeStudent);
}
//Create array of student objects
const students = [];

//Student object constructor
function Student(name) {
  this.name = name;
  this.score = [];
  this.countAvg = function() {
    if (this.score.length === 0) {
      return " ";
    }
    let total = 0;
    for (let i = 0; i < this.score.length; i++) {
      total += this.score[i];
    }
    return Number((total / this.score.length).toFixed(2));
  };
  students.push(this);
  this.id = students.length - 1;
}
function addStudent() {
  console.log("student add function");
  debugger;
  //Create new student object and add it to student array
  let name = (prompt("enter student full name"));;
  if (name == undefined || name == "") {
    return;
  } else {
    name = name.toLowerCase();
  }
  let student = new Student(name);
  //add mark to student.score taking into account case, where there are days added before students
  if ( daysCount >= students.length && students.length === 1) {
    for(let i = 0; i <= daysCount -1; i++) {
      addMarksToStudents();
    }
  } 
  showStudent(student);
  showMarks();
  showAvg(student);
  addRemoveScrollBars();
}


function showStudent(obj) {
  let student = document.createElement("div");
  student.textContent = obj.name;
  student.setAttribute("data-fullname", obj.name); 
  student.setAttribute("class", "nameCell");
  nameAvgsTable.appendChild(student);
}


function removeStudent(e) {
  //Get student name
  let name = (prompt("enter student full name"));
  if (name == undefined || name == "") {
    return;
  } else {
    name = name.toLowerCase();
  }
  removeStudentFromStundentsArray(name);
  removeStudentFromNameAvgsTable(name);
  removeAvgFromNameAvgsTable(name);
  showMarks();
  addRemoveScrollBars();
}
function removeStudentFromStundentsArray(name) {
  students.forEach(function(student) {
    // students[i].id = i;
    if (student.name === name) {
      students.splice(student.id, 1);
    }
  });
  
}
function removeStudentFromNameAvgsTable(name) {
  document.querySelector(`.nameAvgsTable div[data-fullname="${name}"]`).remove();
}
function removeAvgFromNameAvgsTable(name) {
  document.querySelector(`.nameAvgsTable div[data-fullname2="${name}"]`).remove();
}


function showAvg(obj) {
  let avg = document.createElement("div");
  avg.setAttribute("data-fullname2", obj.name);
  avg.setAttribute("class", "avgCell");
  avg.textContent = obj.countAvg();
  nameAvgsTable.appendChild(avg);
}


function editShowAvg(obj) {
  let average = document.querySelector(`.nameAvgsTable div[data-fullname2="${obj.name}"]`);
  average.textContent = obj.countAvg();
}


//Add day
function addDay() {
  if (students.length > 0)  {
    addMarksToStudents();
    showMarks();
  }
  accumulateDate(date);
  showDate();
  addRemoveScrollBars();
  students.forEach(function(student){
    editShowAvg(student)
  });

}
function addMarksToStudents() {
  students.forEach(function(student) {
    student.score.push(0);
  });
}
    

let date = new Date(2018, 3, 28);
function showDate() {
  let str = dateToString(date);
  day = document.createElement("div");
  day.className = "day";
  //modify date string for line break
  let span = document.createElement('span');
  span.textContent = str.slice(-3);
  span.setAttribute("style", "display: block");
  day.textContent = str.slice(0, -3);
  day.appendChild(span);
  day.className = "dateCell";
  datesTable.appendChild(day);
}
let daysCount = 0;
function accumulateDate(date) {
  daysCount++;
  if (date.getDay() === 5) {
     date.setDate(date.getDate() + 1);
  } else {
     date.setDate(date.getDate() + 2);
  }
}

function dateToString(date) {
  str = date.toDateString();
  let lastIndex = str.lastIndexOf(" ");
  str = str.substring(0, lastIndex);
  return str;
}

let grade;

function showMarks() {
  // empty table
  // debugger;
  while (marksTable.firstElementChild) {
    marksTable.firstElementChild.remove();
  }
  //set layout
  marksTable.setAttribute(
    `style`,
    `grid-template-rows: repeat(${students.length}, 40px)`
  );

  for (
    let i = 0, j = 0, k = 0; k < students.length * students[0].score.length; j++, k++
  ) {

    let showContent = students[j].score[i];
    if (showContent === undefined) {
      showContent = students[j].score[i] = 0;
    }
    // editAvg(j);
    grade = document.createElement("div");
    grade.className = "grade";
        grade.textContent = `${showContent}`;
     grade.setAttribute("data-j", j);
     grade.setAttribute("data-i", i);
    grade.addEventListener("click", addGrade);
    grade.setAttribute("class", "markCell");



    marksTable.appendChild(grade);
        if (students.length - 1 == j) {
      i++;
      j = -1;
    }

  }
  showStatistics();
  cellChangeColor();
}
// showStatistics();
// cellChangeColor();
function cellChangeColor() {
  Array.from(marksTable.children).forEach((cell)=>{
    if(cell.textContent === "0") {
      cell.style.backgroundColor = "#8d021f";
    } else {
      cell.style.backgroundColor = "green";
    }
  });
}
// var observer = new MutationObserver(()=> {
  
//   Array.from(marksTable.children).forEach((cell)=>{
//     if(cell.textContent === "0") {
//       cell.style.backgroundColor = "red";
//     } else {
//       cell.style.backgroundColor = "green";
//     }
//   });
// });

// var config = {attributes: true, childList: true, characterData: true, subtree: true };

// observer.observe(marksTable, config);


function addGrade(e) {
  //check for number types only. and for null undefined of course
  let input = parseInt(prompt("enter grade please"));
  if (input == undefined || input == "" || isNaN(input)) {
    return;
  } else if (input < 0) {
    input = 0;
  } else if(input > 5){
    input = 5;
  }
  let value = e.target.textContent = input;
  let j = e.target.dataset.j
  let i = e.target.dataset.i
  students[j].score[i] = value;

  editShowAvg(students[j]);
  showStatistics();
  cellChangeColor();
}


function removeDay() {
  if (datesTable.firstElementChild) {
    if (date.getDay() === 6) {
      date.setDate(date.getDate() - 1);
    } else {
      date.setDate(date.getDate() - 2);
    }
    for (let i = 0; i < students.length; i++) {
      marksTable.removeChild(marksTable.lastChild);
    }
    datesTable.removeChild(datesTable.lastChild);
  }
  students.forEach(function(student, index) {
    student.score.pop();
    editShowAvg(students[index]);
  });
  addRemoveScrollBars()
  showStatistics();
}

statsBtn.addEventListener("click", showStats);

closeStatisticsBtn.addEventListener("click", closeStatistics);

function showStats(e) {

  statistics.setAttribute("style", "width: 100%;");

}

function closeStatistics(e) {
  statistics.removeAttribute("style");
  // closeBtn.setAttribute("style", "display: none");
}

//#region scrolls
let timeout;
datesTable.addEventListener("scroll", function() {
  marksTable.scrollLeft = datesTable.scrollLeft;
});
marksTable.addEventListener("scroll", function() {
  datesTable.scrollLeft = marksTable.scrollLeft;
});

nameAvgsTable.addEventListener("scroll", callback);
marksTable.addEventListener("scroll", callback);
function callback(e) {
  {
    window.clearTimeout(timeout);
    e.target == nameAvgsTable
      ? ((source = nameAvgsTable), (source2 = marksTable))
      : ((source = marksTable), (source2 = nameAvgsTable));
    source2.removeEventListener("scroll", callback);
    source2.scrollTop = source.scrollTop;
    timeout = setTimeout(function() {
      source2.addEventListener("scroll", callback);
    }, 100);
  }
}
//#endregion

// ================= statistics =====================

function totalDays() {
  return daysCount;
}

function totalStudents() {
  return students.length;
}

function missedDays() {

  let missedDays = 0;
  students.forEach(function(student){
    missedDays += student.score.filter((score)=>{
      return score === 0;
    }).length
  });
  return missedDays;
}

function avgMark() {
  totalAvgs = 0;
  students.forEach((student)=>{
    totalAvgs += student.countAvg();
  });
  if (isNaN(totalAvgs / students.length)) {
    return 0 
  } else {
    return Number((totalAvgs / students.length).toFixed(2));
  }

}

statsArray = [];
function generateStatsArray() {
  return statsArray = [totalDays(), missedDays(), avgMark(), totalStudents()];
}

function showStatistics() {
  let statElements = document.querySelectorAll('.statistics .stat');
  generateStatsArray();
  statElements.forEach(function(element, index){
    element.textContent = ` ${statsArray[index]}`
  });
}
window.addEventListener('resize', function() {
  addRemoveScrollBars();
});
// ====================== extra========================
function addRemoveScrollBars() {
  addRemoveScrollBarX();
  addRemoveScrollBarY();
}
function addRemoveScrollBarX() {
  //tuki y scrollbari aqvs an ert an meores mashi cientwitdh +17
  // 
  let clientWidth = marksTable.clientWidth;
  if ((marksTable.scrollHeight > marksTable.clientHeight)) {
    clientWidth += 17;
  }
  if( marksTable.scrollWidth > clientWidth ) {
    nameAvgsTable.classList.add("scrollBar");
   } else {
     nameAvgsTable.classList.remove("scrollBar");
   }
}
function addRemoveScrollBarY() {
  if(marksTable.scrollHeight > marksTable.clientHeight) {
    datesTable.classList.add("scrollBar");
   } else {
     datesTable.classList.remove("scrollBar");
   }
}
window.onload =function () {
  checkMobile();
};
var checkMobile = function(){

  //Check Device
  let isTouch = ('ontouchstart' in document.documentElement);
  if (isTouch) {
    console.log("you are on touchscreen");
    datesTable.style.position = "static";
    nameAvgsTable.style.position = "static";
  } 
}