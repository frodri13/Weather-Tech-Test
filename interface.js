let temperature = document.querySelector("#current-temperature");

document.querySelector("#select-city").addEventListener("submit", (event) => {
  event.preventDefault();
  const city = document.querySelector("#current-city").value;

  if (city === "London") {
    displayWeather(2643743);
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
