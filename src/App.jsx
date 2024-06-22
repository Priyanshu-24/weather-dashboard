import Search from "./components/Search";
import WeatherDisplay from "./components/WeatherDisplay";
import { getWeatherOfCity } from "./utils/services";
import styled from "styled-components";
import { useState } from "react";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const App = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = (city) => {
    getWeatherOfCity(city).then((res) => {
      setWeather(res?.data);
    });
  };

  return (
    <MainContainer>
      <h1>Weather Dashboard</h1>
      <Search fetchWeather={fetchWeather} />
      <WeatherDisplay weather={weather} />
    </MainContainer>
  );
};

export default App;
