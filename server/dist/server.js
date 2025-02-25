require("dotenv").config();
const express = require("express");
const fs = require("fs");
const axios = require("axios");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 3001;
const API_KEY = process.env.OPENWEATHER_API_KEY;

app.use(cors());
app.use(express.json());

const HISTORY_FILE = "./searchHistory.json";

// Get Search History
app.get("/api/weather/history", (req, res) => {
  fs.readFile(HISTORY_FILE, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error reading file" });
    res.json(JSON.parse(data || "[]"));
  });
});

// Fetch Weather Data & Save Search History
app.post("/api/weather", async (req, res) => {
  const { city } = req.body;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    // Get city coordinates
    const geoResponse = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    );
    const { lat, lon } = geoResponse.data[0];

    // Get weather data
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    // Save search history
    const newSearch = { id: uuidv4(), city, lat, lon };
    fs.readFile(HISTORY_FILE, "utf8", (err, data) => {
      const history = data ? JSON.parse(data) : [];
      history.push(newSearch);
      fs.writeFile(HISTORY_FILE, JSON.stringify(history, null, 2), (err) => {
        if (err) console.error("Error saving search history");
      });
    });

    res.json(weatherResponse.data);
  } catch (error) {
    res.status(500).json({ error: "Weather data fetch failed" });
  }
});

// Delete a city from history
app.delete("/api/weather/history/:id", (req, res) => {
  const cityId = req.params.id;
  fs.readFile(HISTORY_FILE, "utf8", (err, data) => {
    let history = data ? JSON.parse(data) : [];
    history = history.filter((entry) => entry.id !== cityId);
    fs.writeFile(HISTORY_FILE, JSON.stringify(history, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Error deleting city" });
      res.json({ message: "City deleted" });
    });
  });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
