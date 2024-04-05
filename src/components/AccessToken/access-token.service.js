import axios from "axios";

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
