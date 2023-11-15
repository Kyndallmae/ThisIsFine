import React, { useState, useEffect } from 'react';

const APIKey = '67a0cbd93605189d6b08a86935fedbd8';

function Weather() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState(null); // Add error state

  const urlBuilder = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`;

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when starting the fetch

    try {
      const response = await fetch(urlBuilder);
      if (!response.ok) {
        throw new Error('City not found');
      }

      const json = await response.json();
      setData(json);
      setError(null);
    } catch (error) {
      setError('City not found. Please enter a valid city.');
      setData(null);
    } finally {
      setLoading(false); // Set loading to false after fetch is complete
    }
  };

  useEffect(() => {
    // This effect will run once when the component mounts
    // You might want to fetch default data or perform other actions here
  }, []);

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          City:
          <input
            type="text"
            placeholder="Search"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>
            Temperature: {data.main.temp}&deg;F, Feels like: {data.main.feels_like}&deg;F
          </p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Weather: {data.weather[0].description}</p>
          <p>Wind: {data.wind.speed} mph</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
}

export default Weather;
