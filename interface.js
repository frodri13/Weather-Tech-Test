const displayWeather = (city) => {
  const api = "9d50450a48809637b4862bdcb125927d";
  const url = `http://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${api}&units=metric`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.querySelector("#current-temperature").innerText = data.main.temp;
    });
};

displayWeather(2643743);
