import { useEffect, useState } from "react";
import { fetchStreamsList } from "./show-streaming.service";
import { Col, Row, Skeleton } from "antd";

export const ShowStreaming = () => {
  const [loading, setLoading] = useState(true);
  const [contentsVideos, setContentsVideos] = useState([]);

  useEffect(() => {
    async function fetchStreamingChannels() {
      try {
        const { data } = await fetchStreamsList();
        const modifiedResults = data.map(
          ({ title, share_code: { facebook } }) => {
            return { url: facebook, title };
          }
        );
        setContentsVideos(modifiedResults);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }
    fetchStreamingChannels();
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
            <div style={{ textAlign: "center" }}>
              <h3>Channel Name - {item.title}</h3>
              <iframe
                style={{
                  width: "100%",
                  minHeight: "200px",
                  borderRadius: "3%",
                }}
                title="videos"
                src={item.url}
                allowFullScreen
                allow="encrypted-media"
              ></iframe>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};
