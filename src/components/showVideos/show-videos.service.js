import axios from "axios";

// Function to make a GET Contents List request
export const postFetchContentsList = async ({ token }) => {
  try {
    const myHeaders = {
      "Content-Type": `application/json`,
      Authorization: token,
    };
    const response = await axios.post(
      `/content`,
      {
        query:
          '{ contentList(app_token:":app_token",product_key:":product_key",profile_uuid:":profile_uuid", page:1,per_page:5) {page_info{total_count} content_list{maturity_rating is_free_content content_uuid content_id content_name content_desc content_permalink content_search_tag content_category_uuid content_sub_category_uuid content_template_uuid content_parent_uuid content_asset_type content_asset_uuid content_trailer_uuid content_poster_uuid content_banner_uuid content_app_poster_uuid store_key app_token product_key content_user_uuid content_accessibility content_created_date content_updated_date content_trans{ content_trans_uuid content_trans_field_uuid content_trans_field_value content_trans_content_uuid} categories{category_uuid category_name category_parent_uuid category_permalink category_image_uuid created_date sub_category{category_uuid category_name category_parent_uuid category_permalink category_image_uuid created_date}} content_created_by content_updated_by content_level tags posters{website{file_uuid file_name file_url} tv_apps{file_uuid file_name file_url} mobile_apps{file_uuid file_name file_url}} banners{website{file_uuid file_name file_url} tv_apps{file_uuid file_name file_url} mobile_apps{file_uuid file_name file_url}} content_tvapp_poster_uuid content_mobileapp_poster_uuid content_tvapp_banner_uuid content_mobileapp_banner_uuid app_poster_details{image_uuid file_name file_url}  is_encoded cast_details{cast_uuid cast_name cast_bio cast_image_uuid created_date cast_image_details{image_uuid file_name file_url} app_token product_key store_key cast_type_details{cast_type_uuid cast_type_name} no_image_available_url}  no_image_available_url permalink_type path is_parent no_of_child_content root_parent_uuid video_details{video_uuid file_name file_url is_feed is_drm  encoding_end_time encoding_fail_time encoding_status duration expected_duration reference_uuid stream_type stream_format mpeg_path  hls_path content_key encryption_key is_offline ecnoding_provider_uuid drm_provider_uuid third_party_url resolution_details{resolution url}   encoded_url{resolution url} offline_url{resolution url}} trailer_details{video_uuid file_name file_url is_feed is_drm encoding_end_time encoding_fail_time encoding_status duration expected_duration reference_uuid stream_type stream_format mpeg_path  hls_path content_key encryption_key is_offline ecnoding_provider_uuid drm_provider_uuid third_party_url resolution_details{resolution url}   encoded_url{resolution url} offline_url{resolution url}}  audio_details{audio_uuid file_name file_url is_feed is_drm encoding_end_time encoding_fail_time encoding_status duration expected_duration reference_uuid stream_type stream_format mpeg_path  hls_path content_key encryption_key is_offline ecnoding_provider_uuid drm_provider_uuid third_party_url resolution_details{resolution url}   encoded_url{resolution url} offline_url{resolution url}     } child_content{content_uuid content_name content_desc content_permalink content_search_tag content_category_uuid content_sub_category_uuid content_template_uuid content_parent_uuid content_asset_type content_asset_uuid content_trailer_uuid content_poster_uuid content_banner_uuid content_app_poster_uuid store_key app_token product_key content_user_uuid content_accessibility content_created_date content_updated_date content_trans{ content_trans_uuid content_trans_field_uuid content_trans_field_value content_trans_content_uuid} categories{category_uuid category_name category_parent_uuid category_permalink category_image_uuid created_date sub_category{category_uuid category_name category_parent_uuid category_permalink category_image_uuid created_date}} content_created_by content_updated_by content_level tags posters{website{file_uuid file_name file_url} tv_apps{file_uuid file_name file_url} mobile_apps{file_uuid file_name file_url}} banners{website{file_uuid file_name file_url} tv_apps{file_uuid file_name file_url} mobile_apps{file_uuid file_name file_url}} content_tvapp_poster_uuid content_mobileapp_poster_uuid content_tvapp_banner_uuid content_mobileapp_banner_uuid app_poster_details{image_uuid file_name file_url}  is_encoded cast_details{cast_uuid cast_name cast_bio cast_image_uuid created_date cast_image_details{image_uuid file_name file_url} app_token product_key store_key cast_type_details{cast_type_uuid cast_type_name} no_image_available_url}  no_image_available_url permalink_type path is_parent no_of_child_content root_parent_uuid like_status total_likes_count avg_rating structure_uuid is_playlist level_one_count level_two_count content_status extension social_publish_status is_favourite user_type ugc_type video_details{video_uuid file_name file_url is_feed is_drm encoding_end_time encoding_fail_time encoding_status duration expected_duration reference_uuid stream_type stream_format mpeg_path  hls_path content_key encryption_key is_offline ecnoding_provider_uuid drm_provider_uuid third_party_url resolution_details{resolution url}   encoded_url{resolution url} offline_url{resolution url}} trailer_details{video_uuid file_name file_url is_feed is_drm encoding_end_time encoding_fail_time encoding_status duration expected_duration reference_uuid stream_type stream_format mpeg_path  hls_path content_key encryption_key is_offline ecnoding_provider_uuid drm_provider_uuid third_party_url resolution_details{resolution url}   encoded_url{resolution url} offline_url{resolution url}}  audio_details{audio_uuid file_name file_url is_feed is_drm encoding_end_time encoding_fail_time encoding_status duration expected_duration reference_uuid stream_type stream_format mpeg_path  hls_path content_key encryption_key is_offline ecnoding_provider_uuid drm_provider_uuid third_party_url resolution_details{resolution url}   encoded_url{resolution url} offline_url{resolution url}     }   }    }}}',
      },
      { headers: myHeaders }
    );
    return response.data;
  } catch (error) {
    console.error("Error in Getting Contents List:", error);
    throw error;
  }
};

// Function to make a GET Embded Links request
export const getEmbdedLinks = async ({ content_uuid, token }) => {
  try {
    const myHeaders = {
      "Content-Type": `application/json`,
      Authorization: token,
    };
    const response = await axios.post(
      `/content/embed/generate`,
      {
        content_uuid,
        secret_key: process.env.REACT_APP_SECRET_KEY,
        app_id: process.env.REACT_APP_APP_ID,
      },
      {
        headers: myHeaders,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in Getting Embded Links:", error);
    throw error;
  }
};
