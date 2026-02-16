import React from "react";
import { useTemprature } from "./useTemprature";

const TemperatureInput = ({ value, onChange, placeholder, label }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-gray-700">{label}</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

const TempratureChange = () => {
  const { celsius, fahrenheit, handleCelsiusChange, handleFahrenheitChange } =
    useTemprature();

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Temperature Converter
      </h1>
      <div className="flex flex-col gap-6">
        <TemperatureInput
          label="Celsius"
          value={celsius}
          onChange={handleCelsiusChange}
          placeholder="Enter temperature in Celsius"
        />
        <TemperatureInput
          label="Fahrenheit"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          placeholder="Enter temperature in Fahrenheit"
        />
      </div>
    </div>
  );
};

export default TempratureChange;
