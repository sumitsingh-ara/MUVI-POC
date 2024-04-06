import { useEffect, useState } from "react";
import { getEmbdedLinks, postFetchContentsList } from "./show-videos.service";
import { Col, Row, Skeleton } from "antd";
import { useNavigate } from "react-router-dom";

export const ShowVideos = ({ token }) => {
  const [loading, setLoading] = useState(true);
  const [contentsVideos, setContentsVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/");
    async function fetchContentsList() {
      try {
        debugger;
        const {
          data: {
            contentList: { content_list },
          },
        } = await postFetchContentsList({ token });
        const promises = content_list.map(({ content_uuid }) =>
          getEmbdedLinks({ content_uuid, token })
        );

        const results = await Promise.all(promises);
        const modifiedResults = results.map(({ data }) => {
          const srcRegex = /src\s*=\s*"([^"]*)"/i;
          const match = data?.match(srcRegex);
          const srcValue = match ? match[1] : null;
          return srcValue;
        });
        setContentsVideos(modifiedResults);
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    }
    fetchContentsList();
  }, [navigate, token]);

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
    </Row>
  );
};
