import axios from "axios";

const API_KEY = "633194e51a95fe9b110a9a264feca45d";

const fetchWeather = async ({ city }) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { fetchWeather };
