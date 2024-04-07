import axios from "axios";

// Function to make a GET Contents List request
export const fetchContentsList = async () => {
  try {
    const myHeaders = {
      "X-Api-Key": process.env.REACT_APP_DACAST_X_API_KEY,
      "X-Format": "default",
    };
    const response = await axios.get("https://developer.dacast.com/v2/vod", {
      headers: myHeaders,
    });
    return response.data;
  } catch (error) {
    console.error("Error in Getting Contents List:", error);
    throw error;
  }
};

// // Function to make a GET Embded Links request
// export const getEmbdedLinks = async ({ content_uuid, token }) => {
//   try {
//     const myHeaders = {
//       "Content-Type": `application/json`,
//       Authorization: token,
//     };
//     const response = await axios.post(
//       `/content/embed/generate`,
//       {
//         content_uuid,
//         secret_key: process.env.REACT_APP_SECRET_KEY,
//         app_id: process.env.REACT_APP_APP_ID,
//       },
//       {
//         headers: myHeaders,
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error in Getting Embded Links:", error);
//     throw error;
//   }
// };
