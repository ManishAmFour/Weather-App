import { use, useState } from "react";
import WebApi from "./weatherApi.jsx";
function App() {
  const [message, setValue] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [weatherData, setWeatherData] = useState(false);

  function inputchange(e) {
    setValue(e.target.value);
    setIsSent(false);
  }

  function sent() {
    setIsSent(true);
  }

  return (
    <>
      <div className="input-forms">
        <input className="input-bar" onChange={inputchange} value={message} />
        <button className="input-button" onClick={sent}>Enter</button>
      </div>
      <WebApi
        setWeatherData={setWeatherData}
        function={setIsSent}
        sentValue={isSent}
        message={message}
      />
    </>
  );
}

export default App;
