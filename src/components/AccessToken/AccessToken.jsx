import { Typography } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { postFetchToken } from "./access-token.service";

const { Title } = Typography;

export const AccessToken = ({ updateAuthToken, setFetchingToken }) => {
  useEffect(() => {
    async function getToken() {
      // const payload = {
      //   secret_key: process.env.REACT_APP_SECRET_KEY,
      //   app_id: process.env.REACT_APP_APP_ID,
      // };
      // const { response } = await postFetchToken(payload);
      // updateAuthToken(response.access_token);
      updateAuthToken(
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtdXZpLWNtcyIsInN1YiI6IlBCWmZSUWFJRExJbXNONjFpUkRHakxLZldPYWs0aFZrQXdENXlaOU9keE8yWDZ6SmpRcmJ4TUY4dHcwM0dHWHVlR1A1dGRoNUNKcThSOEpHeXFzZHAwQW5NTjhXdDhBOUMyTUpiYjBFTUNmMDU5SHB1SzZES211NzZST2h6Smh2UkV3NDM4TWVDUWJBelwvYUZNdnZWR1E4XC9FR3k1ays4OU95VlZUSndkXC9GY05rN21mVzZGNCtVZTBqc0UwXC9zckpTNTREdU9Vb1ByS2ZHNlR3NnZGSUVjaW1EZWEyc0xHVTVsU1lreXgzcVwvNjZzXC9SZ3BpeHFUYm5vN1dhYnAwc2lFalwvM2p1UEx3UjltcUkxRnYzVWFXemxcL3FjWTJVdVpsOFRVdGVWZVN4Qml0YjFrb2F3RVVHQ0JNVjIyTXZ0NnpVTDVOZzhmNzFXbEY2UmQrWFB4bm94YkxXXC9ORzFEcGlRelVnT0doVG5vVkhZcUxQcmZEdGFXS09lV2x4SXJJR0ZvVkljXC8rKzlBT3FnUVZuSEtlWDVvOFwvYktQNjRYM0VwaCtHVlNjNTBIcUhqRmxcL2JJaDFROUFEZTljYW4zd09zV2lMWm9jWGJBTTdDdlJzYzIzaG5LUzg1dWJESnlqZEhwZXliRERGbkFzSjJxTnBTYzN4R1FRaDhtemNaSzlEXC9YSFJGUG5wRnpsdzhpaStwT2dtS0JBb1VMNXppSlRodnpZZkVWUmkwMG03VU5EbWRDeWRyT0ZvcDUyK1NYYVRWNTRmNHU5N2sycnJZQzdJWXJWTjBEV2tucWtaRG50MEZaY0ZnSjBJOXhTXC9WZ0txdkorQldwR3o2c05wTjRvbkJUTFNhNkI1bit2UW03ZXdrSUluMXArRWxTd2xxdFJCUlpqM0xVdGFiU3piSkpLYlNuMU5Zd2JJbkNuaHJwQzVzdCttY1BwRmRHdVZ4cjZkNEFkT2lpM1V2OFFWaU5XUXdXRUFjcjB5SXdxMHlcL0ZkY1wva3lLWTVtSkE3WHZcL0U2bFVSVXdFOUFRMVpsSlVMa0ZpcytaUmdmVVhLRTJjYnVRd29Ya3ZEU1JIM2diaXA2b2dcL25ISWpzbHUrdzBrY1prYlB2SkpHZDM0WW90aFB5TW1RbFwvU0dSZlRVVGZsOWhubkllc2FjczBPQ1wvMGh0Y0RnNWVKSG9uNFpmS1p2c0VZVDZNSkp5Q2lIMys3dllvTzdxRGc0WVFiVHoyTzF5bFwvWUN2b2hCNlE2dllxeGZOckxTMmM1OE1CSkNyaXc3TmJFZlFMcExDUDZEWUpTeEhKVUNyMThEN0djcUlSUTVqRjRLK2VaXC9MYlhHc1k4bys2eVlRZHFqalFCZE9ZWjJONUxQbEdST1lXc2w5XC80V3BZY3lcLzFvSnZORGcwZWhWQ0RHMkpsN21jdUpvMjFIeVBlSWlRRnpka1ZDelpCSFg2dXJxQjhPeklcLzF0QmdEQlE5d0hrRmNsd0NWSzc3bHIzdkRnaHhpWGQ5aW5aT1hGUkFJUlpJbW0zR2lyUFJZZUpUZTlDTWlvemFzMUFVcnNXRTNmSkxzc3hPSG5ZSmJvY2U5K0JobU8yUlRuODJleEtZa0Z2YWE1Tml0RFdwemwwSElyUys1R1VWcjMzblB1QjRIa2dJcFF5R25DZ09hVXZlZUEyb3VMQ2lUdWFGaTVsM1wvNUI2OUU1bm5HbzRBaTVLTHg3ZVFZV2JVMVwvTXBlWXE3YnVXbnNMRFI3cjBXOE5MN0NkV3lKVnZUajdQRnZCbWpGM2xUQUFRdkpBRFltVjhWNVNOaUhHQVh0SEtqWjQ0ejNnbnIxS0RQVHBPMWIwb3hqMUxvaEJwbGJ1Z0ZsN1RndUxoMnBzeUxvRXBsXC9CIiwiaWF0IjoxNzEyMzUxODAzLCJleHAiOjE3MTI0MzgyMDN9.F3e8vt2YuVcBIvL2wUIQk2_gXMjBa0A6HhX6zdqKVvA"
      );
      setFetchingToken(false);
    }

    if (!axios.defaults.headers.common["Authorization"]) {
      getToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateAuthToken]);

  return (
    <>
      <Title level={2} style={{ textAlign: "center" }}>
        Fetching Access Token
      </Title>
    </>
  );
};
