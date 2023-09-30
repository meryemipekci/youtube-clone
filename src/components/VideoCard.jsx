import millify from "millify";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const VideoCard = ({ video }) => {
  console.log("video goruntuleme", VideoCard);
  return (
    <Link to={`/watch/${video?.videoId}`}>
      <div>
        {/* resim alani */}
        <div>
          {video?.thumbnails ? (
            <img
              className="rounded w-full"
              src={video?.thumbnails?.pop()?.url}
            />
          ) : (
            <Loading />
          )}
        </div>
        {/* // bilgi alani */}
        <div className="flex gap-3 mt-5 text-white">
          <img
            className="w-12 h-12 rounded-full"
            src={video?.author?.avatar[0].url}
          />

          <div>
            <h4 className="font-bold">{video?.title}</h4>
            <p>{video?.author?.title}</p>
            <div className="flex gap-3">
              <p>{millify(video?.stats.views)}</p>
              <p>{video?.publishedTimeText}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default VideoCard;
