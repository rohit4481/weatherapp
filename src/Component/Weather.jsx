import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const apiKey = "6c9424bd0115ec28182db65a1415583f";
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});

  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("respons", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChangeInput = (e) => {
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWeatherDetails(inputCity);
  };

  return (
    <div>
      <div>Weather</div>

      <input type="text" onChange={handleChangeInput} />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>

      <div>
        <h2>{data?.name}</h2>
        <h3>{(data?.main?.temp - 273.15).toFixed(2)}°C</h3>
      </div>
    </div>
  );
};

export default Weather;
