import { useState, useEffect } from "react";
import "./weatherApi.css";
function WebApi(props) {
  const [displayValue, setDisplayValue] = useState('');
  const [weatherValue, setWeatherValue] = useState("");
  const [requestStatus, setRequestStatus] = useState();
  let PrevValue = displayValue;
  if (props.sentValue && PrevValue !== props.message) {
    setDisplayValue(props.message);
    PrevValue = props.message;
  }

  useEffect(() => {
    if (displayValue !== "") {
      setRequestStatus("pending");
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=a0095c765c3146b99a7194304251502&q=${displayValue}`
      )
        .then((result) => {
          return result.json();
        })
        .then((response) => {
          setTimeout(() => {
            setRequestStatus("fullfilled");

            setWeatherValue({
              location: response.location.country,
              city: response.location.name,
              region: response.location.region,
              temp: response.current.temp_c,
            });
          }, 1000);
        });
    }
  }, [displayValue]);

  if (requestStatus === "pending") {
    return <p>Loading</p>;
  } else if (requestStatus === "fullfilled") {
    return (
      <div className="weather-container">
        <p>Name of the city:- {weatherValue.city}</p>
        <p>Temperature:- {weatherValue.temp} Celsius</p>
        <p>region:- {weatherValue.region}</p>
        <p>Country:- {weatherValue.location}</p>
      </div>
    );
  }
}

export default WebApi;
