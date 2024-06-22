import axios from "axios";

export const getWeatherOfCity = (city_name) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${
      import.meta.env.VITE_OPENWEATHERMAP_API_KEY
    }`
  );
