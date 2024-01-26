import React from 'react';
import axios from 'axios';
import waves from './waves.jpg';
import './App.css';

 const baseURL = 'https://api.stormglass.io/v2/weather/point';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={waves} className="App-logo" alt="logo" />
        <div>
          <h1>San Diego</h1>
          
          <p>
            Hello!
          </p>

          <GetData />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function GetData() {
  const [time, setTime] = React.useState(null);
  const [airTemp, setAirTemp] = React.useState(null);
  const [watTemp, setWatTemp] = React.useState(null);
  const [clouds, setClouds] = React.useState(null);
  const [height, setHeight] = React.useState(null);

  const d = new Date();
  let date = d.toISOString();

    React.useEffect(() => {
        axios.get(baseURL, 
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "14e26dba-bbf3-11ee-8b92-0242ac130002-14e26e50-bbf3-11ee-8b92-0242ac130002",
                },
                params:
                {
                  lat: 32.7157,
                  lng: -117.1610,
                  params: 'airTemperature,cloudCover,waterTemperature,waveHeight',
                  start: date,
                  end: date,
                }
            }
        ).then((response) => {
            console.log(response.data)
            let resp = response.data.json().parse();

            setAirTemp(resp[0].airTemperature);
            setTime(resp[0].time);
            setClouds(resp[0].cloudClover);
            setWatTemp(resp[0].waterTemperature);
            setHeight(resp[0].waveHeight);
        })/*.catch(ex => {
            const error =
            ex.response.status === 404
              ? "Resource Not found"
              : "An unexpected error has occurred";
            // DO SOMETHING setError(error);
          })*/;
    }, []);

    return(
        <>
            <div id="popup-content">
              <p>Live San Diego Tide Data</p>
              <p>Time: {time}</p>
              <p>Air Temp: {airTemp}</p>
              <p>Water Temp: {watTemp}</p>
              <p>Wave Height: {height}</p>
              <p>Cloud Coverage: {clouds}</p>
            </div>
        </>
    )
}

export default App;
