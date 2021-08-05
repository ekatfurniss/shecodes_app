// Homework Week 4
// Feature #1

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let currentDay = days[date.getDay()];
  let currentTime = `${now.getHours()}:${
    (now.getMinutes() < 10 ? "0" : "") + now.getMinutes()
  }`;
  let currentDate = `${currentDay} ${currentTime}`;

  return currentDate;
}
let now = new Date();
let dayAndTime = document.querySelector("#today");
dayAndTime.innerHTML = formatDate(now);

// Homework Week 4 Feature #2 & Homework Week 5
function handleSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;
  let h2 = document.querySelector("h2");
  h2.innerHTML = city;
  searchCity(city);
}
function searchCity(city) {
  let apiKey = "0e954a27e70e02e021adf652b4a8e0b0";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiURL}&appid=${apiKey}`).then(showTemperature);
}
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${temperature}°C`;
}

let form = document.querySelector("#input-form");
form.addEventListener("submit", handleSubmit);


function showGeoTemp(response) {
  let h1 = document.querySelector("h1");
  let h2 = document.querySelector("h2");
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  h1.innerHTML = `${temperature}°C`;
  h2.innerHTML = `${response.data.name}`;
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

function retrievePosition(position) {
  let apiKey = "0e954a27e70e02e021adf652b4a8e0b0";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log(lat);
  console.log(lon);
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showGeoTemp);
}

let button = document.querySelector("#current-location");
button.addEventListener("click", getCurrentLocation);

// Homework Week 4 Feature #3

//let h1 = document.querySelector("h1");
//console.log(h1);
//console.log(h1.innerHTML);

//var timesClicked = 0;

//function changeFormat() {
//timesClicked++;
//if (timesClicked % 2 === 0) {
// h1.innerHTML = "15°C";
//} else {
// h1.innerHTML = "59°F";
// }
//}

//let tempButton = document.querySelector("#change-temp");
//tempButton.addEventListener("click", changeFormat);

// Homework Week 3
// let weather = {
//   paris: {
//     temp: 19.7,
//     humidity: 80
//   },
//   tokyo: {
//     temp: 17.3,
//     humidity: 50
//   },
//   lisbon: {
//     temp: 30.2,
//     humidity: 20
//   },
//   "san francisco": {
//     temp: 20.9,
//     humidity: 100
//   },
//   moscow: {
//     temp: -5,
//     humidity: 20
//   }
// };

// let city = prompt("Please enter a city");
// city = city.trim().toLowerCase();
// if (city === "paris") {
//   alert(
//     `The temperature is ${weather.paris.temp}°C ( ${
//       Math.round(weather.paris.temp * 9) / 5 + 32
//     } °F) and the humidity is ${weather.paris.humidity}`
//   );
// } else if (city === "tokyo") {
//   alert(
//     `The temperature is ${weather.tokyo.temp} and the humidity is ${weather.tokyo.humidity}`
//   );
// } else if (city === "lisbon") {
//   alert(
//     `The temperature is ${weather.lisbon.temp} and the humidity is ${weather.lisbon.humidity}`
//   );
// } else if (city === "san francisco") {
//   alert(
//     `The temperature is ${weather["san francisco"]["temp"]} and the humidity is ${weather["san francisco"]["humidity"]}`
//   );
// } else if (city === "moscow") {
//   alert(
//     `The temperature is ${weather.moscow.temp} and the humidity is ${weather.moscow.humidity}`
//   );
// } else {
//   alert(
//     "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+" +
//       city
//   );
// }
