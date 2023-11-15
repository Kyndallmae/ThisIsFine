import { useState, useEffect } from 'react';
// const APIKey = process.env.WEATHER_API_KEY || '';

const APIKey = '67a0cbd93605189d6b08a86935fedbd8' /* TODO: API Keys should always live in either a DB or the .ENV file */

function Weather() {
    const [data, setData] = useState(null);
    let city = 'Dallas'; /* TODO: Make this be controlled by the input below */
    const urlBuilder = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey + '&units=imperial'

    useEffect(() => {
        fetch(urlBuilder)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);

    return(
        <div>
            City: <input placeholder='Dallas'></input>
            {/* IF logic to hide the below until the submit button is clicked. */}
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    )
}

export default Weather;