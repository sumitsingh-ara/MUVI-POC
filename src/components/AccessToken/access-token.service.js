// service.js
import axios from "axios";

const baseURL = "https://api.example.com"; // Replace this with your API base URL

// Function to make a POST request
export const postFetchToken = async (payload) => {
  const myHeaders = {
    "Content-Type": `application/json`,
  };
  try {
    const response = await axios.post(`/get-user-token-details`, payload, {
      headers: myHeaders,
    });
    return response.data;
  } catch (error) {
    console.error("Error in POST request:", error);
    throw error;
  }
};

// Function to make a GET request
export const getData = async () => {
  try {
    const response = await axios.get(`${baseURL}/endpoint`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error in GET request:", error);
    throw error;
  }
};
