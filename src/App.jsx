import LoadingSpinner from "./components/LoadingSpinner";
import Search from "./components/Search";
import WeatherDisplay from "./components/WeatherDisplay";
import { getWeatherOfCity } from "./utils/services";
import styled from "styled-components";
import { useState } from "react";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ErrorText = styled.p`
  color: red;
`;

const App = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = (city) => {
    setLoading(true);
    setWeather("");
    setError("");
    getWeatherOfCity(city)
      .then((res) => {
        setWeather(res?.data);
      })
      .catch(() => {
        setError("Failed to fetch weather for the given city");
      })
      .finally(() => setLoading(false));
  };

  return (
    <MainContainer>
      <h1>Weather Dashboard</h1>
      <Search fetchWeather={fetchWeather} />
      {loading && <LoadingSpinner />}
      {error && <ErrorText>{error}</ErrorText>}
      <WeatherDisplay weather={weather} />
    </MainContainer>
  );
};

export default App;
