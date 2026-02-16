import { useState, useEffect } from "react";

export const useTemprature = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
    const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    if (lastUpdated === "celsius") {
      if (celsius === "") {
        setFahrenheit("");
      } else {
        const f = (parseFloat(celsius) * 9) / 5 + 32;
        setFahrenheit(parseFloat(f.toFixed(2)).toString());
      }
    }
  }, [celsius, lastUpdated]);

  useEffect(() => {
    if (lastUpdated === "fahrenheit") {
      if (fahrenheit === "") {
        setCelsius("");
      } else {
        const c = ((parseFloat(fahrenheit) - 32) * 5) / 9;
        setCelsius(parseFloat(c.toFixed(2)).toString());
      }
    }
  }, [fahrenheit, lastUpdated]);

  const handleCelsiusChange = (e) => {
    setCelsius(e.target.value);
    setLastUpdated("celsius");
  };

  const handleFahrenheitChange = (e) => {
    setFahrenheit(e.target.value);
    setLastUpdated("fahrenheit");
  };

  return {
    celsius,
    fahrenheit,
    handleCelsiusChange,
    handleFahrenheitChange,
  };
};
