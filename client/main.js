document.getElementById("get-weather").addEventListener("click", async () => {
  const city = document.getElementById("city-input").value;

  if (city) {
    const response = await fetch(`/weather?city=${city}`);
    const data = await response.json();

    const weatherInfo = document.getElementById("weather-info");
    if (data.weather) {
      weatherInfo.innerHTML = `
          <p>Weather in ${city}: ${data.weather[0].description}</p>
          <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C</p>
        `;
    } else {
      weatherInfo.innerHTML = `<p>No weather data found for ${city}.</p>`;
    }
  } else {
    alert("Please enter a city!");
  }
});
