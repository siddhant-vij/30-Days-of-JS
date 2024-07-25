import { API_KEY, HOST } from "./env.js";
import axios from "axios";

const correctUrl = `https://${HOST}/latest?Scheme_Type=Open&Scheme_Code=`;

const fetchData = (mfSchemeCode) => {
  const url = `${correctUrl}${mfSchemeCode}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": HOST,
    },
  };
  axios
    .get(url, options)
    .then((response) => {
      if (!response.data || response.data.length === 0) {
        throw new Error("No data found");
      }
      console.log(
        `Scheme Name: ${response.data[0].Scheme_Name}\nLatest NAV: ${response.data[0].Net_Asset_Value} on Date: ${response.data[0].Date}`
      );
    })
    .catch((error) => {
      console.error(error);
    });
};

fetchData(122639);
