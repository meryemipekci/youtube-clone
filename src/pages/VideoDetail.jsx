import ReactPlayer from "react-player";
import ChannelDetail from "../components/ChannelDetail";
import { useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { YoutubeContext } from "../context/YoutubeContext";
import { useParams } from "react-router-dom";
import { getData } from "../helpers";
import RelatedContents from "../components/RelatedContents";
import SideNav from "../components/SideNav";

const VideoDetail = () => {
  const [detail, setDetail] = useState(null);
  const [relatedContents, setRelatedContents] = useState(null);
  const { videoId } = useParams();
  //console.log(videoId)

  useEffect(() => {
    setDetail(null);
    setRelatedContents(null);

    //todo videolarin detay bılgısını id parametresi ile cekme
    getData(`/video/details/?id=${videoId}`)
      .then((detail) => setDetail(detail))
      .catch((error) => console.log("detailerror", error));

    //video ile alakalı icerik alma
    getData(`/video/related-contents/?id=${videoId}`).then((relatedData) => {
      console.log("rela", relatedData);
      setRelatedContents(relatedData.contents);
    });
  }, [videoId]);
  // console.log("detailstate", setDetail);
  console.log("statecont", relatedContents);

  return (
    <div className="lg:px-[100px] flex flex-col gap-5 lg:flex-row min-h-[95vh] text-white">
      <SideNav />
      {/* player tarafi */}
      <div>
        <ReactPlayer
          width={"100%"}
          height={"500px"}
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
        />
        {!detail ? <Loading /> : <ChannelDetail detail={detail} />}
      </div>
      {/* related content */}
      {!relatedContents ? (
        <Loading />
      ) : (
        <RelatedContents contents={relatedContents} />
      )}
    </div>
  );
};

export default VideoDetail;
