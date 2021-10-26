let temperature = document.querySelector("#current-temperature");

document.querySelector("#select-city").addEventListener("submit", (event) => {
  event.preventDefault();
  const city = document.querySelector("#current-city").value.toLowerCase();

  if (city === "london") {
    displayWeather(2643743);
  } else if (city === "paris") {
    displayWeather(2988507);
  } else if (city === "new york") {
    displayWeather(5128581);
  } else if (city === "delhi") {
    displayWeather(2650225);
  } else if (city === "tokyo") {
    displayWeather(1850147);
  } else {
    alert("Chose a city between: London, Paris, New York, Delhi or Tokyo ");
  }
});

const displayWeather = (city) => {
  const key = "9d50450a48809637b4862bdcb125927d";
  const url = `http://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${key}&units=metric`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      temperature.innerText = data.main.temp;
    });
};
