import "dotenv/config";
import axios from "axios";

const apiKey = process.env.OPENWEATHER_API_KEY; // Uses the environment variable here

const getWeather = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

// Example usage:
getWeather("New York");
