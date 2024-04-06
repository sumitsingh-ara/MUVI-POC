import { Typography } from "antd";
import { useEffect } from "react";
import { postFetchToken } from "./access-token.service";

const { Title } = Typography;

export const AccessToken = ({ setFetchingToken, setToken, token }) => {
  useEffect(() => {
    async function getToken() {
      const payload = {
        secret_key: process.env.REACT_APP_SECRET_KEY,
        app_id: process.env.REACT_APP_APP_ID,
      };
      const { response } = await postFetchToken(payload);
      setToken(`Bearer ${response.access_token}`);
    }

    if (token === null) {
      getToken();
    }
    setFetchingToken(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <>
      <Title level={2} style={{ textAlign: "center" }}>
        Fetching Access Token
      </Title>
    </>
  );
};
