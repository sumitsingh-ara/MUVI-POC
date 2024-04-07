import axios from "axios";

//Function to get Upload Secrets
export const getUploadVideoCredetials = async ({ content_name }) => {
  try {
    const myHeaders = {
      "X-Api-Key": process.env.REACT_APP_DACAST_X_API_KEY,
      "X-Format": "default",
      "Content-Type": "application/json",
    };
    const response = await axios.post(
      "https://developer.dacast.com/v2/vod",
      {
        upload_type: "ajax",
        auto_encoding: true,
        source: content_name,
      },
      {
        headers: myHeaders,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error in Getting Upload Video Credetials", error);
    throw error;
  }
};

// Function to make a POST request
export const uploadAsset = async ({ fileList, uploadCredentials }) => {
  const boundary = `-----${Date.now().toString(16)}`;

  try {
    const myHeaders = {
      "Content-Type": `multipart/form-data; boundary=${boundary}`,
    };
    const formdata = new FormData();
    formdata.append("acl", uploadCredentials.acl);
    formdata.append("bucket", uploadCredentials.bucket);
    formdata.append("key", uploadCredentials.key);
    formdata.append("policy", uploadCredentials.policy);
    formdata.append(
      "success_action_status",
      uploadCredentials.success_action_status
    );
    formdata.append("x-amz-algorithm", uploadCredentials["x-amz-algorithm"]);
    formdata.append("x-amz-credential", uploadCredentials["x-amz-credential"]);
    formdata.append("x-amz-date", uploadCredentials["x-amz-date"]);
    formdata.append("x-amz-signature", uploadCredentials["x-amz-signature"]);
    formdata.append("file", fileList[0]);

    const response = await axios.post("https://upload.dacast.com", formdata, {
      headers: myHeaders,
    });

    return response;
  } catch (error) {
    console.error("Error in Uploading Video To AWS Bucket", error);
    throw error;
  }
};
