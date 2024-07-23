const API_KEY = require("./env.js").API_KEY;
const HOST = require("./env.js").HOST;

const fetchData = (mfSchemeCode) => {
  const url = `https://${HOST}/latest?Scheme_Type=Open&Scheme_Code=${mfSchemeCode}`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": HOST,
    },
  };

  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        if (!result || result.length === 0) {
          throw new Error("No data found");
        }
        resolve(
          `Scheme Code: ${mfSchemeCode}\nScheme Name: ${result[0].Scheme_Name}\nLatest NAV: ${result[0].Net_Asset_Value} on Date: ${result[0].Date}`
        );
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const mfSchemeCodes = [122639, 135781, 120826, 118272, 118309, 140196, 114859];

Promise.all(mfSchemeCodes.map((mfSchemeCode) => fetchData(mfSchemeCode)))
  .then((messages) => {
    messages.forEach((message) => {
      console.log(message);
      console.log("-".repeat(10));
    });
  })
  .catch((error) => {
    console.error(error);
  });

Promise.race(mfSchemeCodes.map((mfSchemeCode) => fetchData(mfSchemeCode)))
  .then((message) => {
    console.log("Race result:");
    console.log(message);
    console.log("-".repeat(10));
  })
  .catch((error) => {
    console.error(error);
  });
