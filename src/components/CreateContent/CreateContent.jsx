import { useEffect, useState } from "react";
import { createContent, postFetchAssetsList } from "./create-content.service";
import { Button, Form, Input, Row, Select, Space, notification } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

export const CreateContent = ({ token }) => {
  const [assetsList, setAssetsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const onFinish = async ({
    content_name,
    content_desc,
    content_asset_uuid,
  }) => {
    const payload = {
      store_key: ":store_key",
      app_token: ":app_token",
      product_key: ":product_key",
      user_type: ":user_type",
      content_name,
      content_permalink:
        "https://d10xsoss226fg9.cloudfront.net/LTnVmEQn2p5d7VMEkXgOQVquvipUE3z1/B05C552148D643158A8AD703B26331CC/vl/EBB00C5865C14593A30BA9B8A884A311/sample-5s-1712089057808.mp4",
      content_desc,
      tags: "[sumit]",
      content_category_uuid: "0702fffc64e24982b2e8ed1cae8c06f5",
      content_asset_type: 1,
      content_asset_uuid,
      content_template_uuid: "2b31263c3ab946d9b8fcb68d3b71b983",
      content_field_uuid: "b67d36dda19f4fc3ac34d95afbb829b5",
    };

    try {
      setLoading(true);
      const { code, message, data } = await createContent({ payload, token });
      if (code === 200) {
        api.success({
          message,
          description: `${data.content_name}`,
        });
        onReset();
      } else {
        api.error({
          message,
          description: `${data.content_name}`,
        });
      }
    } catch (error) {
      api.error({
        message: "Content Creation Failed",
        description: error.message,
      });
    }
    setLoading(false);
  };
  const onReset = () => {
    form.resetFields();
  };

  useEffect(() => {
    if (!token) navigate("/");
    async function getAssets() {
      try {
        const {
          data: {
            assetList: { asset_list },
          },
        } = await postFetchAssetsList({ token });
        setAssetsList(asset_list);
      } catch (err) {
        console.log(err);
      }
    }
    getAssets();
  }, [navigate, token]);

  return (
    <Row
      style={{ marginTop: "20px", padding: "5px", justifyContent: "center" }}
    >
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{
          width: "90%",
          maxWidth: "800px",
        }}
      >
        <Form.Item
          name="content_name"
          label="Content Name"
          rules={[
            {
              required: true,
              message: "Please Enter Content Name!",
            },
          ]}
        >
          <Input placeholder="Enter Content Name" />
        </Form.Item>
        <Form.Item
          name="content_desc"
          label="Content Description"
          rules={[
            {
              required: true,
              message: "Please Enter Content Description!",
            },
          ]}
        >
          <Input placeholder="Enter Content Description" />
        </Form.Item>
        <Form.Item
          name="content_asset_uuid"
          label="Available Videos"
          rules={[
            {
              required: true,
              message: "Please select a video to create the content!",
            },
          ]}
        >
          <Select placeholder="Select the Video for the content" allowClear>
            {assetsList.map(({ video_uuid, file_name }) => {
              return (
                <Option key={video_uuid} value={video_uuid}>
                  {file_name}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Space>
            <Button
              loading={loading}
              disabled={loading}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
            <Button disabled={loading} htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>
      {contextHolder}
    </Row>
  );
};
