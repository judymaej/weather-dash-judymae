const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const results = document.querySelector("#results");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = input.value.trim();
  if (!city) return;

  try {
    const response = await fetch("http://localhost:3001/api/weather", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ city }),
    });

    const data = await response.json();
    results.innerHTML = `<h2>${city} Weather</h2><p>Temp: ${data.list[0].main.temp}</p>`;
  } catch (error) {
    console.error("Error fetching weather data");
  }
});
