function countTimer() {
  let month = document.getElementById("months");
  let day = document.getElementById("days");
  let hour = document.getElementById("hours");
  let minute = document.getElementById("minutes");
  let sec = document.getElementById("seconds");

  let nowDate = new Date().getTime();
  let nextDate = new Date("Feb 17, 2026").getTime();
  let msDiff = nextDate - nowDate;
  // console.log(msDiff);
  if (msDiff < 0) {
    document.querySelector(".timer").innerHTML = "<h2>🌙 Ramadan Mubarak! Remember Me In Your Prayer🌙</h2>";
    return;
  }

  let months = Math.floor((msDiff / (1000 * 60 * 60 * 24 * 30)) % 12);
  let days = Math.floor((msDiff / (1000 * 60 * 60 * 24)) % 30);
  let hours = Math.floor((msDiff / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((msDiff / (1000 * 60)) % 60);
  let seconds = Math.floor((msDiff / 1000) % 60);
  // console.log(months);

  month.innerHTML = months;
  day.innerHTML = days;
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  sec.innerHTML = seconds;
}

setInterval(function () {
  countTimer();
}, 1000);
