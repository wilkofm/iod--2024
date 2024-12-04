const axios = require("axios");

const getHarryPotter = async (req, res) => {
  try {
    const response = await axios
      .get("https://hp-api.onrender.com/api/characters")
      .then((response) => console.log(response.data))
      .catch((error) => console.error("error:", error.message));

    console.log("API response:", response);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching harry potter characters",
      error: error.message,
    });
  }
};

const getHarryPotterCharacterById = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(
      `https://hp-api.onrender.com/api/characters/${id}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching harry potter character by ID",
      error: error.message,
    });
  }
};

module.exports = {
  getHarryPotter,
  getHarryPotterCharacterById,
};
