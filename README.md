# WeatherApp
# 🌦️ Simple Weather Forecast Website

A simple and interactive Weather Forecast Web App built using HTML, CSS, and JavaScript.
This project allows users to search for any city around the world and instantly get real-time weather information such as temperature, humidity, wind speed, and weather conditions — all in a clean and responsive interface.


# Features

🌍 Search weather by city name

🌡️ Displays temperature, humidity, and wind speed

☁️ Dynamic weather icons and conditions (e.g., sunny, cloudy, rainy)

📱 Fully responsive design that works on mobile, tablet, and desktop

⚡ Fetches live data using a weather API (e.g., OpenWeatherMap)

🧠 Built with pure JavaScript — no frameworks required

🛠️ Technologies Used
Technology	Purpose
HTML5	Structure and layout
CSS3	Styling and animations
JavaScript (ES6)	API calls and interactivity
OpenWeatherMap API	Weather data source


# How It Works

The user enters a city name in the search bar.

The app sends a request to the OpenWeatherMap API using fetch() in JavaScript.

The API returns a JSON response containing real-time weather data.

JavaScript extracts and displays relevant information like:

Temperature (°C)

Weather condition (e.g., sunny, cloudy, raining)

Humidity (%)

Wind speed (km/h)

The background or weather icon updates dynamically based on the weather condition.

# Code Highlights

Uses fetch() for API requests

Converts Kelvin to Celsius for easy readability

Includes error handling (e.g., when an invalid city name is entered)

Clean and modular JavaScript structure


# How to Use Locally

Clone this repository
git clone https://github.com/<your-username>/weather-forecast-app.git
Open the project folder
cd weather-forecast-app


Open index.html in your browser
(You can simply double-click it or run with Live Server in VS Code)

Enter a city name and view the real-time weather updates!

 API Setup

If you’re using OpenWeatherMap, follow these steps:

Go to OpenWeatherMap.org

Create a free account and get your API key

Replace the placeholder in your JavaScript code:

const apiKey = "YOUR_API_KEY";


 UI and Design

The interface is minimalistic and user-friendly:

Gradient background that changes subtly with conditions

Weather icons for quick visual recognition

Centered layout with clean typography


Future Improvements

Add 5-day weather forecast

Include location-based auto-detection

Support for multiple languages

Add dark/light mode toggle


Author

Faruk Wahab
🌍 Passionate about Web Development, Environmental Sustainability, and Technology
📫 Email: fshaarptechservices@gmail.com

📱 Phone: +2349033982713
🔗https://linkedin.com/in/wahab-umar-faruk
 (X)Twitter https://x.com/TheFarouk_01
 
