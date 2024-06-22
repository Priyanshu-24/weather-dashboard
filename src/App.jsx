import Search from "./components/Search";
import WeatherDisplay from "./components/WeatherDisplay";
import { getWeatherOfCity } from "./utils/services";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const App = () => {
  const fetchWeather = (city) => {
    getWeatherOfCity(city).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <MainContainer>
      <h1>Weather Dashboard</h1>
      <Search fetchWeather={fetchWeather} />
      <WeatherDisplay />
    </MainContainer>
  );
};

export default App;
