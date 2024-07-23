const API_KEY = require("./env.js").API_KEY;
const HOST = require("./env.js").HOST;

const fetchData = async (mfSchemeCode) => {
  const url = `https://${HOST}/latest?Scheme_Type=Open&Scheme_Code=${mfSchemeCode}`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": HOST,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    if (!result || result.length === 0) {
      throw new Error("No data found");
    }
    console.log(
      `Scheme Name: ${result[0].Scheme_Name}\nLatest NAV: ${result[0].Net_Asset_Value} on Date: ${result[0].Date}`
    );
  } catch (error) {
    console.error(error);
  }
};

fetchData(122639);
