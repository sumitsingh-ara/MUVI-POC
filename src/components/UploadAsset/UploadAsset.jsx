import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Button, Upload, notification } from "antd";
import { uploadAsset } from "./upload-asset.service";
import { useNavigate } from "react-router-dom";

const { Dragger } = Upload;

export const UploadAsset = ({ token }) => {
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  const props = {
    name: "file",
    multiple: false,
    fileList: fileList,
    beforeUpload: (file) => {
      setFileList([file]);
      return false; // Prevent default upload behavior
    },
    onRemove: () => {
      setFileList([]);
    },
  };

  async function uploadVideo() {
    if (!fileList.length) {
      api.error({
        message: "Upload Failed",
        description: "Please Choose a file to upload ",
      });
      return;
    }
    if (!token) navigate("/");

    try {
      setLoading(true);
      const { code, message, data } = await uploadAsset({ fileList, token });
      if (code === 200) {
        setFileList([]);
        api.success({
          message,
          description: data[0].file_name,
        });
      } else {
        api.error({
          message,
          description: data[0].file_name,
        });
      }
    } catch (error) {
      setLoading(false);
      api.error({
        message: "Upload Failed",
        description: error.message,
      });
    }
    setLoading(false);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div style={{ width: "50%", margin: "auto" }}>
        <Dragger {...props} disabled={loading}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </Dragger>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Button disabled={loading} loading={loading} onClick={uploadVideo}>
          Upload File
        </Button>
      </div>

      {contextHolder}
    </div>
  );
};
