const frisby = require("frisby");
const Joi = frisby.Joi;
const city = 2643743;
const key = "9d50450a48809637b4862bdcb125927d";
const url = `http://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${key}&units=metric`;

it("should return a status of 200", function () {
  return frisby.get(url).expect("status", 200);
});

it("should have London as a city name", function () {
  return frisby.get(url).expect("json", {
    name: "London",
  });
});

it("should return an integer for the temperature", function () {
  return frisby.get(url).expect("jsonTypes", "main", {
    temp: Joi.number(),
  });
});

it("should return an integer for the humidity", function () {
  return frisby.get(url).expect("jsonTypes", "main", {
    humidity: Joi.number(),
  });
});

it("should return an integer for the temp-min", function () {
  return frisby.get(url).expect("jsonTypes", "main", {
    temp_min: Joi.number(),
  });
});

it("should return an integer for the temp-max", function () {
  return frisby.get(url).expect("jsonTypes", "main", {
    temp_max: Joi.number(),
  });
});

it("should return a string for the description", function () {
  return frisby.get(url).expect("jsonTypes", "weather[0]", {
    description: Joi.string(),
  });
});
