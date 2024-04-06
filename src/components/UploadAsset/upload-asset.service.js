import axios from "axios";

// Function to make a POST request
export const uploadAsset = async ({ fileList, token }) => {
  const boundary = `-----${Date.now().toString(16)}`;

  try {
    const myHeaders = {
      "Content-Type": `multipart/form-data; boundary=${boundary}`,
      Authorization: token,
    };

    const formdata = new FormData();
    formdata.append("file_type", "video");
    formdata.append("upload_source", "CMS");
    formdata.append("files", fileList[0], fileList[0].name);
    const response = await axios.post("/upload-asset", formdata, {
      headers: myHeaders,
    });

    return response.data;
  } catch (error) {
    console.error("Error in Uploading Asset", error);
    throw error;
  }
};
