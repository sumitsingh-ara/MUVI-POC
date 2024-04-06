import axios from "axios";

// Function to make a GET Assets List request
export const postFetchAssetsList = async ({ token }) => {
  try {
    const myHeaders = {
      "Content-Type": `application/json`,
      Authorization: token,
    };
    const response = await axios.post(
      `/library`,
      {
        query:
          '{assetList(app_token:":app_token", user_uuid:":me", user_type:":user_type", product_key:":product_key",file_type:"video",page:1,per_page:10){page_info{total_count} asset_list{video_uuid audio_uuid image_uuid document_uuid file_name file_url user_uuid created_date file_size duration audio_bitrate file_type video_bitrate bit_rate frame_rate resolution video_width video_height reference_uuid expected_duration encoding_status is_embeded_url encoding_profile_uuid drm_provider_uuid encoding_resolutions is_cropped base64str image_height image_width upload_source user_type} }}',
      },
      { headers: myHeaders }
    );
    return response?.data;
  } catch (error) {
    console.error("Error in GET request:", error);
    throw error;
  }
};

// Function to make a GET Assets List request
export const createContent = async ({ payload, token }) => {
  try {
    const myHeaders = {
      "Content-Type": `application/json`,
      Authorization: token,
    };
    const response = await axios.post(`/content/save`, payload, {
      headers: myHeaders,
    });
    return response.data;
  } catch (error) {
    console.error("Error in Creaing Content:", error);
    throw error;
  }
};
