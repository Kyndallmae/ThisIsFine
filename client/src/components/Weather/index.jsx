import { useState, useEffect } from 'react';

const APIKey = '67a0cbd93605189d6b08a86935fedbd8';

function Weather() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState(''); // Use state to track the city input

  const urlBuilder ='https://api.openweathermap.org/data/2.5/weather?q=' + city +'&appid=' +APIKey +'&units=imperial';

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Fetch data based on the entered city when the form is submitted
    fetch(urlBuilder)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
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

      {/* IF logic to hide the below until the submit button is clicked. */}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Enter a city to see the current weather!'}
    </div>
  );
}
  // Local storage, search history
  var searchHistory = JSON.parse(localStorage.getItem("search")) || [];
  console.log("search history: ", searchHistory);

  // shows search history
  function renderHistory() {
    historyEl.text("");
      for (i = 0; i < searchHistory.length; i++) {
          var historyBtn = $("<button>");
          historyBtn.text(searchHistory[i]);
          historyBtn.attr("data-location", searchHistory[i]);
          historyBtn.attr("class", "btn btn-info my-2 d-block")
          historyBtn.on("click", function () {
              getCurrentWeather($(this).data("location"));
              getForecast($(this).data("location"));
              console.log($(this).data("location"));
          });
          $(historyEl).append(historyBtn);
      };
  };

  renderHistory();
export default Weather;