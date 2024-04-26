import React from "react"; // Import CSS file with styles

function Map() {
  // Function to generate random data
  const generateRandomData = () => {
    const data = {};
    const districts = [
      "BURHANPUR",
      "SINGRAULI",
      "DINDORI",
      "BHIND",
      "BARWANI",
      "ALIRAJPUR",
      "SHIVPURI",
      "MANDLA",
      "SIDHI",
      "MOURENA",
    ]; // Add more districts if needed
    districts.forEach((district) => {
      data[district] = Math.random() * 20; // Random backwardness rank between 0 and 20
    });
    return data;
  };

  // Function to display the map with backwardness rank data
  const displayMap = (data) => {
    const mapElements = [];

    for (const district in data) {
      const backwardnessRank = data[district];

      // Set color based on backwardness rank
      let color;
      if (backwardnessRank <= 1) {
        color = "green";
      } else if (backwardnessRank <= 5) {
        color = "yellow";
      } else {
        color = "red";
      }

      // Push JSX elements to mapElements array
      mapElements.push(
        <div
          key={district}
          className="cities"
          id={district.toLowerCase().replace(/\s+/g, "")}
        >
          <h6 className="city">{district}</h6>
          <p>Backwardness rank in state is {backwardnessRank}st</p>
        </div>
      );
    }

    return mapElements;
  };

  // Generate random data
  const backwardnessData = generateRandomData();

  return (
    <div className="py-10">
      <div className="div pb-5 font-extrabold ">
        <h1 className="text-3xl text-black text-center">
          UNEMPLOYMENT RATE FOR MADHYA PRADESH{" "}
        </h1>
      </div>
      <div className="MP_map">
        <img src="/images/Madhya_Pradesh_map.png" alt="" />
        {displayMap(backwardnessData)}
      </div>
      <div className="para">
        <p className="text-xl px-40 text-center font-[500]">
          Unemployment rate for Madhya Pradesh was 3.71 %. Though Madhya Pradesh
          unemployment rate fluctuated substantially in recent months, it tended
          to increase through April 2022 - March 2023 period ending at 3.71 % in
          March 2023.Unemployment rate in India increased to eight per cent in
          February 2024 from 6.8 per cent in January 2024, according to CMIE's
          Consumer Pyramids Household Survey. While the unemployment rate eased
          in urban India, it rose substantially in rural India. <br />
          Madhya Pradesh, like many other states in India, has experienced fluctuations in its unemployment rate over time. The unemployment rate in Madhya Pradesh is influenced by various factors including economic conditions, industrial growth, government policies, and social factors.
        </p>
      </div>
    </div>
  );
}

export default Map;
