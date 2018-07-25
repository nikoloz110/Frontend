function createCalendar(elem, year, month) {
  document.getElementsByTagName("table")[0].className = elem;
  // empty calendar
  let allCells = document.querySelectorAll(`.${elem} td`);
  allCells.forEach(cell => {
    cell.textContent = "";
  });

  let lastDay = new Date(year, month, 0).getDate();
  let day = new Date(year, month - 1).getDay();
  let firstWeekCells = document.querySelectorAll(
    `.firstWeek td:nth-of-type(n + ${day + 1}`
  );

  let i = 0;
  firstWeekCells.forEach(cell => {
    i++;
    cell.textContent = i;
  });

  let cells = document.querySelectorAll(".dynamic td");
  cells.forEach(cell => {
    if (i < lastDay) {
      i++;
      cell.textContent = i;
    }
  });
}

createCalendar("cal", 2018, 6);
