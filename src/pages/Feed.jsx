import { useContext } from "react";
import SideNav from "../components/SideNav";
import { YoutubeContext } from "../context/YoutubeContext";
import Loading from "../components/VideoCard";
import VideoCard from "../components/VideoCard";

const Feed = () => {
  const { videos } = useContext(YoutubeContext);
  return (
    <div className="flex bg-[#0f0f0f] min-h-screen text-white  ">
      <SideNav />

      <div className="videos">
        {/* veriler null ise loading bas 
        -veriler gldiyse sadce type i video olanlari ekrana bas*/}
        {videos === null ? (
          <Loading />
        ) : (
          videos.map(
            (item) =>
              item.type === "video" && (
                <VideoCard key={item.video.videoId} video={item.video} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
