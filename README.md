# Rainly App

Rainly is a weather app for the USA. What sets it apart from other weather apps is its practicality and simplicity: to say if it's raining - hence the name Rainly. If I am like most people, all I really care to know is if it's raining.

The cities and states are part of a MySQL database. When you select a state, the cities for that state are queried and populate the second dropdown. The list of cities and states I used may be found here: https://github.com/kelvins/US-Cities-Database.

The weather API I use is called openweathermap (One Call API 3.0). I also use an API called Geoapify (Forward Geocoding API found here: https://apidocs.geoapify.com/docs/geocoding/forward-geocoding/#about) to convert city/state to latitude and longitude. That latitude and longitude is then fed into openweathermap, producing the weather data.

Because Rainly only says if it's raining or not, thunderstorms and snow also count as rain for this app.

You can see the app in action here: https://rainly.andrewschaeffer.com

To see my other projects, go to my website here: https://andrewschaeffer.com

Creator: Andrew Schaeffer

## Installation

Copy the files and folders over to your code editor. Copy-paste the SQL code found here https://github.com/kelvins/US-Cities-Database to your database. You may need to configure the wp-config file so that those credentials point to your database server.

## License

MIT
