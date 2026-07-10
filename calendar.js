const today = new Date();
const year = today.getFullYear();
const month_index = today.getMonth();

document.getElementById("current_month_year").textContent =
  today.toLocaleDateString("en-US", { year: "numeric", month: "long" });

const grid = document.getElementById("calendar_grid");

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

for (const day of weekdays) {
  const cell = document.createElement("div");
  cell.textContent = day;
  cell.classList.add("weekday-label");
  grid.appendChild(cell);
}

const weekday_for_first_date_index = new Date(year, month_index, 1).getDay();

for (let blank = 0; blank < weekday_for_first_date_index; blank++) {
  const cell = document.createElement("div");
  grid.appendChild(cell);
}

const number_of_days = new Date(year, month_index + 1, 0).getDate();

for (let day = 1; day <= number_of_days; day++) {
  const cell = document.createElement("div");
  cell.textContent = day;
  cell.classList.add("day-cell")
  if (day === today.getDate() ) {
    cell.classList.add("today")
  }

  grid.appendChild(cell);
}
