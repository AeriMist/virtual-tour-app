import axios from "axios";

const API_KEY = "BLj60TTKFRKPhlJLihAAKkrayzq1zEJF";

const fetchWeather = async ({ city }) => {
  try {
    const response = await axios.get(
      `https://api.tomorrow.io/v4/weather/forecast?location=${city}&timesteps=daily&units=metric&apikey=${API_KEY}`
    );
    return response.data.timelines.daily[0];
  } catch (error) {
    console.error(error);
  }
};

export { fetchWeather };
