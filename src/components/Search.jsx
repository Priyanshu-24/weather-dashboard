import React, { useState } from "react";

import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.25rem 0;
`;

const Input = styled.input`
  padding: 0.625em;
  font-size: 1rem;
  border: 0.125em solid #ddd;
  border-radius: 0.25em;
  margin-right: 0.625em;
  width: 12.5rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 0.625em 1.25em;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Search = ({ fetchWeather }) => {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  return (
    <Form onSubmit={handleSearch}>
      <Input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city for it's weather"
        required
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default Search;
