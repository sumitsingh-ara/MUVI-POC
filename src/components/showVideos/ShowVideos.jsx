import { useEffect, useState } from "react";
import { fetchContentsList } from "./show-videos.service";
import { Col, Row, Skeleton, notification } from "antd";

export const ShowVideos = () => {
  const [loading, setLoading] = useState(true);
  const [contentsVideos, setContentsVideos] = useState([]);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    async function fetchContents() {
      try {
        const { data } = await fetchContentsList();
        const modifiedResults = data.map(({ share_code: { facebook } }) => {
          return facebook;
        });
        setContentsVideos(modifiedResults);
      } catch (err) {
        api.error({
          message: err.message,
          description: err.name,
        });
      }
      setLoading(false);
    }
    fetchContents();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Skeleton active />;
  }

  return (
    <Row
      gutter={[16, 16]}
      style={{
        justifyContent: "center",
        padding: "10px",
      }}
    >
      {contentsVideos.map((item, index) => {
        return (
          <Col xs={20} sm={10} md={8} lg={6} xl={6} key={index}>
            <iframe
              style={{
                width: "100%",
                minHeight: "200px",
                borderRadius: "3%",
              }}
              title="videos"
              src={item}
              allowFullScreen
              allow="encrypted-media"
            ></iframe>
          </Col>
        );
      })}
      {contextHolder}
    </Row>
  );
};
