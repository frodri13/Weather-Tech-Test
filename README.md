# Weather-Tech-Test

## Description

This project is base upon the use of the OpenWeatherMap API. Even though we could use this API for countless cities, we've narrowed it down to just 5 for this exercises.

The querries are being done using the city id's rather than the city names.

Once fetched, the program will display the temp, humidity, description, the minimum and maximum temperatures.

## Languages and dependencies

I decided to use JavaScript and Jest for the logic and testing. I installed frisby for testing the API.

## How to use?

1. Clone this repository
2. run `npm install`
3. run `npm test` to run all tests.
4. Open with live server index.html if you want to take it for a spin.

## Testing

Since the queries will be done using the city ID. An event listener has been placed into the search bar for the 5 cities that can be selected.

In order to ensure that only the cities above are used with the api. The program will pop up an alert (with the cities that can be searched) if any other city is typed into the search bar.

I also took into account if the name of the city is typed with capital letters or not. Either way, it will be set to downcase to avoid unnecessary mistakes.

My testing covers that the API is giving a 200 status and that the return data types match each of the results required.

## To implement

Additional testing with selenium. I could not implement it due to time constrains.
