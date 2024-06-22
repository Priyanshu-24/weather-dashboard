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
  return (
    <MainContainer>
      <h1>Weather Dashboard</h1>
      <Search />
      <WeatherDisplay />
    </MainContainer>
  );
};

export default App;
