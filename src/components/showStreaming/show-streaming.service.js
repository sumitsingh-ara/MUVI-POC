import axios from "axios";

// Function to make a GET Contents List request
export const fetchStreamsList = async () => {
  try {
    const myHeaders = {
      "X-Api-Key": process.env.REACT_APP_DACAST_X_API_KEY,
      "X-Format": "default",
    };
    const response = await axios.get(
      "https://developer.dacast.com/v2/channel",
      {
        headers: myHeaders,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in Getting Streams List:", error);
    throw error;
  }
};
