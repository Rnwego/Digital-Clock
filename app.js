function Time() {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var session = "AM";

  if (hour === 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  var time = hour + ":" + minute + ":" + second + " " + session;
  document.getElementById("display").innerText = time;
  document.getElementById("display").textContent = time;

  setTimeout(Time, 1000);
}

Time();
