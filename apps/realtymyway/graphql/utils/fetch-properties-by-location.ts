import axios from "axios";

export const fetchPropertiesByLocation = async (params) => {
  try {
    const options = {
      method: "GET",
      url: `${process.env.RAPID_API_HOST_FULL}/locationSuggestions`,
      params: params,
      headers: {
        "X-RapidAPI-Key": `${process.env.RAPID_API_KEY}`,
        "X-RapidAPI-Host": `${process.env.RAPID_API_HOST}`,
      },
    };

    const response = await axios.request(options);
    const data = await response.data;

    if (process.env.NODE_ENV !== "production") {
      console.log("PASSED PARAMS: ", params);
      console.log("FETCH PROPERTIES BY LOCATION DATA: ", data);
    }

    const { resultType, results } = data.resultGroups[0];

    return {
      resultType,
      results,
    };
  } catch (err) {
    console.error(err);
  }
};
