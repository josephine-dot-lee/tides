import React from 'react';
import axios from 'axios';

const baseURL = 'https://api.tidesandcurrents.noaa.gov/api/prod/datagetter';

function NoaaData() {
    const [id, setId] = React.useState(null);
    const [loc, setLoc] = React.useState(null);
    const [time, setTime] = React.useState(null);
    const [watTemp, setWatTemp] = React.useState(null);
    
      React.useEffect(() => {
        axios.get(baseURL, 
            {
                headers: {
                    "Content-Type": "application/json",
                },
                params:
                {
                  station: 9410170,
                  date: 'latest',
                  product: 'water_temperature',
                  datum: 'MLLW',
                  time_zone: 'lst_ldt',
                  units: 'english',
                  application: 'Tide_Tracket_Ext_Testing',
                  format: 'json'
                }
            }
        ).then((response) => {
            console.log(response.data)
            let resp = response.data;
  
            setId(resp.metadata["id"]);
            setLoc(resp.metadata.name);
            setTime(resp.data[0].t);
            setWatTemp(resp.data[0].v);
        });
    }, []);
  
      return(
          <>
              <div id="popup-content">
                <p>Current {loc} Tide Data</p>
                <p>from station {id}</p>
                <p>Last Updated: {time}</p>
                <p>Water Temp (F): {watTemp}</p>
              </div>
          </>
      )
  }

  export default NoaaData;