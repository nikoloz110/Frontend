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
  //Add day
  addDayBtn.addEventListener("click", addDay);
  //Remove day
  removeDayBtn.addEventListener("click", removeDay);
  //Add student
  addStudentBtn.addEventListener("click", addStudent);
  //Remove student
  removeStudentBtn.addEventListener("click", removeStudent);
  // open statistics
  statsBtn.addEventListener("click", showStats);
  // close statistics
  closeStatisticsBtn.addEventListener("click", closeStatistics);
}

//Define starter vars
let daysCount = 0;
const date = new Date(2018, 3, 28);
//Create array of student objects.
const students = [];

//Student object constructor
function Student(name) {
  this.name = name;
  this.marks = [];
  this.countAvg = function() {
    if (this.marks.length === 0) {
      return " ";
    }
    let total = 0;
    for (let i = 0; i < this.marks.length; i++) {
      total += this.marks[i];
    }
    return Number((total / this.marks.length).toFixed(2));
  };
  students.push(this); //Add each created student object to students array.
  this.id = students.length - 1; //create id for each student
}

// =============================== Add Student =========================================

function addStudent() {
  let name = prompt("enter student full name");
  //validate name
  if (name == undefined || name == "") {
    return;
  } else {
    name = name.toLowerCase();
  }
  //Create new student object and add it to students array
  let student = new Student(name);
  generateAndShowMarks(); // adds or deletes marks to every student's marks array, and then shows them in marksTable
  showNameAndAvg(student); //calculate avg and show together with students name in nameAvgsTable
  calculateAndShowStatistics(); //calculate and show total statistics
  cellsChangeColor(); //change colors of every marksTable cell, depending its content
  addRemoveScrollBars(); //control scrollbars state to ensure exact scroll sync at the end of scroll.
}

// =============================== Remove Student =========================================

function removeStudent() {
  let name = prompt("enter student full name");
  //Validate input
  if (name == undefined || name == "") {
    return;
  } else {
    name = name.toLowerCase();
  }

  let studNumber = students.length;
  removeStudentFromStundentsArray(name);
  // if input does not match any name, terminate function
  if (studNumber === students.length) {
    return;
  }
  removeStudentAndAvgFromNameAvgsTable(name);
  generateAndShowMarks();
  calculateAndShowStatistics();
  cellsChangeColor();
  addRemoveScrollBars();
}
// =============================== Add Day =========================================

function addDay() {
  accumulateDate(date, "+"); //increases date objects date
  if (students.length > 0) {
    generateAndShowMarks();
    cellsChangeColor();
    students.forEach(function(student) {
      editShowAvg(student); //edit averages that are already shown.
    });
  }

  showDate();
  addRemoveScrollBars();
  calculateAndShowStatistics();
}

// =============================== Remove Day =========================================

function removeDay() {
  if (datesTable.firstElementChild) {
    // check if there are dates left in datesTable
    accumulateDate(date, "-"); //decreases date object
    //remove marks of last day from marksTable
    for (let i = 0; i < students.length; i++) {
      marksTable.removeChild(marksTable.lastChild);
    }
    datesTable.removeChild(datesTable.lastChild); //remove last date from datesTable
    daysCount--; //decrease day count by 1
    //remove marks of last day, from every students marks array.
    students.forEach(function(student, index) {
      student.marks.pop();
      editShowAvg(students[index]);
    });
    addRemoveScrollBars();
    calculateAndShowStatistics();
  }
}

// =============================== Add Mark =========================================

function addMark(e) {
  //validate input
  let input = parseInt(prompt("enter mark please"));
  if (input == undefined || input == "" || isNaN(input)) {
    return;
  } else if (input < 0) {
    input = 0;
  } else if (input > 5) {
    input = 5;
  }
  //get users input
  let value = (e.target.textContent = input);
  //get j and i indexes from clicked cell, and use them to write value in corresponding index in our 2D students array.
  let j = e.target.dataset.j;
  let i = e.target.dataset.i;
  //students[j] - gets corresponding student
  //marks[i] - get corresponding index in marks array.
  students[j].marks[i] = value;

  editShowAvg(students[j]);
  calculateAndShowStatistics();
  cellsChangeColor();
}

// ========================== Generate and Show Marks====================

let mark;
function generateAndShowMarks() {
  // empty Marks table
  while (marksTable.firstElementChild) {
    marksTable.firstElementChild.remove();
  }
  //set grid layout
  marksTable.setAttribute(
    `style`,
    `grid-template-rows: repeat(${students.length}, 40px)`
  );

  //iterate through every mark of every student
  //use j to iterate through students array, i to iterate through marks array of each student, k to stop the iteration.
  for (
    let i = 0, j = 0, k = 0;
    k < students.length * daysCount; //  total number of marks
    j++, k++
  ) {
    let showContent = students[j].marks[i]; //store mark in showContent
    //if index we are trying to reach is not yet created, then we create that index and assign it to 0, while setting showContent to 0 too.
    if (showContent === undefined) {
      showContent = students[j].marks[i] = 0;
    }
    //generate mark div and show it
    mark = document.createElement("div");
    mark.className = "mark";
    mark.textContent = `${showContent}`;
    mark.setAttribute("data-j", j);
    mark.setAttribute("data-i", i);
    mark.addEventListener("click", addMark);
    mark.setAttribute("class", "markCell");
    marksTable.appendChild(mark);

    // if (students.length - 1 == j) is True, means we have iterated through every mark[i] of every student. so we need to iterate students from the start again (set j to 0), this time incrementing i, to reach next mark of every student. eventually k gets equal to total number of scores, meaning we have iterated through every score of every student.
    if (students.length - 1 == j) {
      i++;
      j = -1; //j gets 0 when re-enters iteration
    }
  }
}
// =============================== View functions =========================================

function showNameAndAvg(obj) {
  let student = document.createElement("div");
  student.textContent = obj.name;
  student.setAttribute("data-fullname", obj.name);
  student.setAttribute("class", "nameCell");
  nameAvgsTable.appendChild(student);

  let avg = document.createElement("div");
  avg.setAttribute("data-fullname2", obj.name);
  avg.setAttribute("class", "avgCell");
  avg.textContent = obj.countAvg();
  nameAvgsTable.appendChild(avg);
}

function showDate() {
  let str = dateToString(date);
  day = document.createElement("div");
  day.className = "day";
  //modify date string for line break
  let span = document.createElement("span");
  span.textContent = str.slice(-3);
  span.setAttribute("style", "display: block");
  day.textContent = str.slice(0, -3);
  day.appendChild(span);
  day.className = "dateCell";
  datesTable.appendChild(day);
}
function dateToString(date) {
  str = date.toDateString();
  let lastIndex = str.lastIndexOf(" ");
  str = str.substring(0, lastIndex);
  return str;
}
function removeStudentAndAvgFromNameAvgsTable(name) {
  document
    .querySelector(`.nameAvgsTable div[data-fullname="${name}"]`)
    .remove();
  document
    .querySelector(`.nameAvgsTable div[data-fullname2="${name}"]`)
    .remove();
}

function editShowAvg(obj) {
  let average = document.querySelector(
    `.nameAvgsTable div[data-fullname2="${obj.name}"]`
  );
  average.textContent = obj.countAvg();
}

function cellsChangeColor() {
  Array.from(marksTable.children).forEach(cell => {
    if (cell.textContent === "0") {
      cell.classList.add("red");
    } else {
      cell.classList.add("green");
    }
  });
}

function showStats() {
  statistics.setAttribute("style", "width: 100%;");
}

function closeStatistics() {
  statistics.removeAttribute("style");
}

// ================ functions changing Data =========================

function removeStudentFromStundentsArray(name) {
  students.forEach(function(student) {
    if (student.name === name) {
      students.splice(student.id, 1);
    }
  });
}

function accumulateDate(date, operation) {
  if (operation === "+") {
    daysCount++;
    if (date.getDay() === 5) {
      date.setDate(date.getDate() + 1);
    } else {
      date.setDate(date.getDate() + 2);
    }
  } else {
    if (date.getDay() === 6) {
      date.setDate(date.getDate() - 1);
    } else {
      date.setDate(date.getDate() - 2);
    }
  }
}

// ================= statistics =====================
function calculateAndShowStatistics() {
  let statElements = document.querySelectorAll(".statistics .stat");
  generateStatsArray();
  statElements.forEach(function(element, index) {
    element.textContent = ` ${statsArray[index]}`;
  });
}

function generateStatsArray() {
  return (statsArray = [totalDays(), missedDays(), avgMark(), totalStudents()]);
}
function totalDays() {
  return daysCount;
}

function totalStudents() {
  return students.length;
}

function missedDays() {
  let missedDays = 0;
  students.forEach(function(student) {
    missedDays += student.marks.filter(marks => {
      return marks === 0;
    }).length;
  });
  return missedDays;
}

function avgMark() {
  totalAvgs = 0;
  students.forEach(student => {
    totalAvgs += student.countAvg();
  });
  if (isNaN(totalAvgs / students.length)) {
    return 0;
  } else {
    return Number((totalAvgs / students.length).toFixed(2));
  }
}

// ==================== Scroll functions ======================

//sync nameAvgsTable's and marksTable's  vertical scrolls and fix event bouncing causing sluggish scroll

nameAvgsTable.addEventListener("scroll", syncScroll);
marksTable.addEventListener("scroll", syncScroll);
let timeout;
function syncScroll(e) {
  // clear the 'timeout' every 'scroll' event call
  // to prevent re-assign 'scroll' event to other element
  // before finished scrolling
  window.clearTimeout(timeout);
  //determine on which element to use function on.
  e.target == nameAvgsTable
    ? ((source = nameAvgsTable), (source2 = marksTable))
    : ((source = marksTable), (source2 = nameAvgsTable));
  //remove syncScroll from element and set the 'scrollTop'
  source2.removeEventListener("scroll", syncScroll);
  source2.scrollTop = source.scrollTop;
  // create a new 'timeout' and reassign 'scroll' event
  // to other element on 100ms after the last event call
  timeout = setTimeout(function() {
    source2.addEventListener("scroll", syncScroll);
  }, 100);
}
//sync datesTable's and marksTable's horizontal scroll
datesTable.addEventListener("scroll", function() {
  marksTable.scrollLeft = datesTable.scrollLeft;
});
marksTable.addEventListener("scroll", function() {
  datesTable.scrollLeft = marksTable.scrollLeft;
});

//check on window resize, if there is need to add or remove scrollbars to datesTable and nameAvgsTable, ensuring their max scrollWidth and scrollHeight is equal to marksTables max scrollWidth and scrollHeight.
window.addEventListener("resize", function() {
  addRemoveScrollBars();
});

function addRemoveScrollBars() {
  addRemoveScrollBarX();
  addRemoveScrollBarY();
}
function addRemoveScrollBarX() {
  let clientWidth = marksTable.clientWidth;
  if (marksTable.scrollHeight > marksTable.clientHeight) {
    clientWidth += 17;
  }
  if (marksTable.scrollWidth > clientWidth) {
    nameAvgsTable.classList.add("scrollBar");
  } else {
    nameAvgsTable.classList.remove("scrollBar");
  }
}
function addRemoveScrollBarY() {
  if (marksTable.scrollHeight > marksTable.clientHeight) {
    datesTable.classList.add("scrollBar");
  } else {
    datesTable.classList.remove("scrollBar");
  }
}

// if users uses touchscreen, then remove absolute position, used to hide scrollbars.
window.onload = function() {
  checkMobile();
};
var checkMobile = function() {
  let isTouch = "ontouchstart" in document.documentElement;
  if (isTouch) {
    datesTable.style.position = "static";
    nameAvgsTable.style.position = "static";
  }
};

// P.S Touch simulation does not work in fireFox Responsive Design Mode, also tables dont sync well when touch scrolling on virtual devices. Both of them works fine on real devices.

// P.P.S application is live on: https://nikoloz110.github.io/Frontend/project1/
