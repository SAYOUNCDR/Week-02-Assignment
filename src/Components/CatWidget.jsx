import { useState, useEffect } from "react";

const CatWidget = () => {
  const [data, setData] = useState("");
  const getCatFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      console.log(data.fact); // This was only for checking if the API call was successful and to see the structure of response for making ui
      setData(data.fact);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
    }
  };
  useEffect(() => {
    getCatFact();
  }, []);

  return (
    <div className="flex flex-col w-100 border-2 border-gray-300 rounded-lg p-4 gap-4 m-10">
      <h1 className="text-center"> 😸 Random Cat Fact</h1>
      <p className="text-sm">{data}</p>
      <button onClick={getCatFact} className="border border-yellow-500 py-2 rounded-md cursor-pointer bg-amber-500 text-white font-bold">Get new Fact</button>
    </div>
  );
};

export default CatWidget;
