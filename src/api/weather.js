import axios from "axios";

// Open-Meteo — free, no API key needed
export const getWeather = (latitude, longitude) => {
  return axios.get("https://api.open-meteo.com/v1/forecast", {
    params: {
      latitude,
      longitude,
      current_weather: true,
    },
  });
};

// WMO weather codes ko readable text + icon me convert karta hai
export const weatherCodeMap = {
  0: { desc: "Clear Sky", icon: "☀️" },
  1: { desc: "Mainly Clear", icon: "🌤️" },
  2: { desc: "Partly Cloudy", icon: "⛅" },
  3: { desc: "Overcast", icon: "☁️" },
  45: { desc: "Foggy", icon: "🌫️" },
  48: { desc: "Foggy", icon: "🌫️" },
  51: { desc: "Light Drizzle", icon: "🌦️" },
  53: { desc: "Drizzle", icon: "🌦️" },
  55: { desc: "Heavy Drizzle", icon: "🌧️" },
  61: { desc: "Light Rain", icon: "🌧️" },
  63: { desc: "Rain", icon: "🌧️" },
  65: { desc: "Heavy Rain", icon: "🌧️" },
  71: { desc: "Light Snow", icon: "🌨️" },
  73: { desc: "Snow", icon: "🌨️" },
  75: { desc: "Heavy Snow", icon: "❄️" },
  80: { desc: "Rain Showers", icon: "🌦️" },
  81: { desc: "Rain Showers", icon: "🌧️" },
  82: { desc: "Violent Showers", icon: "⛈️" },
  95: { desc: "Thunderstorm", icon: "⛈️" },
  96: { desc: "Thunderstorm", icon: "⛈️" },
  99: { desc: "Thunderstorm", icon: "⛈️" },
};

export const getWeatherInfo = (code) =>
  weatherCodeMap[code] || { desc: "Clear", icon: "🌤️" };