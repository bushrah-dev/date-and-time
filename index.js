let dateCont = document.querySelector(".date-container");
let clockCont = document.querySelector(".clock-container");
const weekday =["sunday","monday", "tuesday","wednesday", "thursday", "friday", "saturday"]
const monthName =["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


const dateClock = setInterval(function dateTime() {
  const today = new Date();
  let date = today.getDate();
  let day = weekday[today.getDay()];
  let month = monthName[today.getMonth()];

  let hours = today.getHours();
  let minutes = today.getMinutes();

  minutes = minutes < 10 ? "0" + minutes : minutes;

  dateCont.innerHTML = `<p>${day}</p><p><span>${date}</span></p><p>${month}</p>`;
  clockCont.innerHTML = `${hours}:${minutes}`;
}, 1000);