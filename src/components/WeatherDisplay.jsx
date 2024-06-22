import styled from "styled-components";

const WeatherContainer = styled.div`
  text-align: center;
  background: #fff;
  padding: 1.25rem;
  border-radius: 0.5em;
  box-shadow: 0 0 0.625em rgba(0, 0, 0, 0.1);
  margin-top: 1.25rem;
  width: 18.75rem;
`;

const Info = styled.p`
  margin: 0.3125em 0;
  font-size: 1rem;
`;

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  return (
    <WeatherContainer>
      <h2>{weather.name}</h2>
      <Info>
        Country Code: <strong>{weather?.sys?.country}</strong>
      </Info>
      <Info>
        Temperature:{" "}
        <strong>{(weather?.main?.temp - 273.15).toFixed(2)} °C</strong>
      </Info>
      <Info>
        Humidity: <strong>{weather?.main?.humidity} %</strong>
      </Info>
      <Info>
        Pressure: <strong>{weather?.main?.pressure} hPa</strong>
      </Info>
      <Info>
        Weather Description: <strong>{weather?.weather[0]?.description}</strong>
      </Info>
      <Info>
        Wind Speed: <strong>{weather?.wind?.speed} m/s</strong>
      </Info>
    </WeatherContainer>
  );
};

export default WeatherDisplay;
