import Search from "./components/Search";
import WeatherDisplay from "./components/WeatherDisplay";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const App = () => {
  const fetchWeather = (city) => {
    console.log(city);
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
