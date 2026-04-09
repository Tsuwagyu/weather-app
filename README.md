# weather-app

Simple weather application using vanilla JavaScript to employ the fetch api by fetching real-time weather data from the [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api). Built as part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum.

# features
 - Search weather conditions for any location worldwide
 - Toggle between imperial and metric units
 - Active weather alerts for the searched location
 - Loading indicator while fetching data
 - Error handling for invalid or null inputs

# tech stack
 - HTML
 - CSS
 - JavaScript (async/await, Fetch API)
 - Visual Crossing Weather API

# how it works
 - Uses async and await with the Fetch API to request weather data, the raw API response is processed by a dedicated function that extracts relevant fields into an object, which is rendered to the DOM. Unit toggling will re-fetch the data using the APIs built in `unitGroup` parameter, and a lookup object to handle display labels.

# learning experience
 - Working with async / await and try / catch for asynchronous operations
 - Handle HTTP errors using `response.ok` since `fetch` only rejects on network failures and not bad status codes. 
 - Processing JSON responses into app specific objects
 - Form validation and user input handling
 - Custom CSS properties and reusable design tokens

# future improvements
 - Grid-based layout for the weather stats
 - Dynamic backgrounds or icons to represent weather conditions based on search location
 - Geolocation support

# acknowledgements
 - Built as part of [The Odin Project](https://www.theodinproject.com/) Full Stack JavaScript path.