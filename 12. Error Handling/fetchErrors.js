const API_KEY = require("./env.js").API_KEY;
const HOST = require("./env.js").HOST;

const correctUrl = `https://${HOST}/latest?Scheme_Type=Open&Scheme_Code=`;

const incorrectUrl = `https://${HOST}/latest123?Scheme_Type=Open&Scheme_Code=`;

const fetchData = (mfSchemeCode) => {
  const url = `${incorrectUrl}${mfSchemeCode}`;

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
          `Scheme Name: ${result[0].Scheme_Name}\nLatest NAV: ${result[0].Net_Asset_Value} on Date: ${result[0].Date}`
        );
      })
      .catch((error) => {
        reject(error);
      });
  });
};

fetchData(122639)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error.message);
  });
