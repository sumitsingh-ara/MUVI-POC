import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Button, Input, Upload, notification } from "antd";
import { getUploadVideoCredetials, uploadAsset } from "./upload-asset.service";

const { Dragger } = Upload;

export const UploadAsset = () => {
  const [fileList, setFileList] = useState([]);
  const [contentName, setContentName] = useState("");
  const [loading, setLoading] = useState(false);
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
    if (!fileList.length || !contentName.trim().length) {
      api.error({
        message: "Upload Failed",
        description: !fileList.length
          ? "Please Choose a file to upload"
          : "Please Enter Content Name",
      });
      return;
    }

    try {
      setLoading(true);
      const uploadCredentials = await getUploadVideoCredetials({
        content_name: contentName.trim(),
      });

      const uploadResponse = await uploadAsset({
        fileList,
        uploadCredentials,
      });
      if (uploadResponse.status === 201) {
        setFileList([]);
        setContentName("");
        api.success({
          message: "File Uploaded Successfully",
          description:
            "Please wait for sometime to get the file ready to serve",
        });
      } else {
        api.error({
          message: "Upload Failed",
          description: fileList[0].file_name,
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
      <div style={{ width: "70%", margin: "auto", marginBottom: "20px" }}>
        <Input
          placeholder="Please Enter Content Name"
          value={contentName}
          onChange={({ target: { value } }) => {
            setContentName(value);
          }}
        />
      </div>
      <div style={{ width: "70%", margin: "auto" }}>
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
          Upload File & Create Content
        </Button>
      </div>

      {contextHolder}
    </div>
  );
};
