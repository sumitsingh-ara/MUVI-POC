import { useEffect, useState } from "react";
import { fetchContentsList } from "./show-videos.service";
import { Col, Row, Skeleton } from "antd";

export const ShowVideos = () => {
  const [loading, setLoading] = useState(true);
  const [contentsVideos, setContentsVideos] = useState([]);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);

  useEffect(() => {
    async function fetchContents() {
      try {
        const { data } = await fetchContentsList();
        const modifiedResults = data.map(({ share_code: { facebook } }) => {
          return facebook;
        });
        setContentsVideos(modifiedResults);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }
    fetchContents();
  }, []);

  const playVideo = (index) => {
    // Pause currently playing video
    if (currentPlayingIndex !== null) {
      const iframe = document.getElementById(`iframe-${currentPlayingIndex}`);
      if (iframe) {
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: "pauseVideo" }),
          "*"
        );
      }
    }

    // Play clicked video
    const iframe = document.getElementById(`iframe-${index}`);
    if (iframe) {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "playVideo" }),
        "*"
      );
      setCurrentPlayingIndex(index);
    }
  };

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
