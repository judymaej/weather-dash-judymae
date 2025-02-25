import { Router } from "express";
const router = Router();

// TODO: POST Request with city name to retrieve weather data
router.post("/", (req, res) => {
  // Check if req.body contains a city name (you can add further logic here)
  const city = req.body.city; // assuming you send the city name in the request body
  if (city) {
    res
      .status(200)
      .json({ message: `Weather data for ${city} will be fetched here.` });
  } else {
    res.status(400).json({ message: "City name is required." });
  }
});

// TODO: GET search history
router.get("/history", async (req, res) => {
  try {
    // Simulate fetching search history (replace with actual service)
    const history = []; // Example: fetching from database or a service
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: "Error fetching history" });
  }
});

// BONUS TODO: DELETE city from search history
router.delete("/history/:id", async (req, res) => {
  try {
    const cityId = req.params.id;
    // Simulate removing a city from history (replace with actual logic)
    res
      .status(200)
      .json({ message: `City with ID ${cityId} deleted from history.` });
  } catch (error) {
    res.status(500).json({ message: "Error deleting city from history." });
  }
});

export default router;
