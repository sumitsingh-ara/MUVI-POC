import { useEffect, useState } from "react";
import { getEmbdedLinks, postFetchContentsList } from "./show-videos.service";
import { Skeleton } from "antd";
import { useNavigate } from "react-router-dom";

export const ShowVideos = ({ token }) => {
  const [loading, setLoading] = useState(true);
  const [contentsVideos, setContentsVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/");
    async function fetchContentsList() {
      try {
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
          const match = data.match(srcRegex);
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
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {contentsVideos.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              width: "31%",
              minHeight: "250px",
              margin: "10px",
            }}
          >
            <iframe
              style={{
                width: "100%",
                minHeight: "100%",
                borderRadius: "3%",
              }}
              title="videos"
              src={item}
              allowFullScreen
              allow="encrypted-media"
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};
