import React, { useEffect } from "react";
// import vids from "../../Component/Video/video.mp4";
import "./VideoPage.css";
import LikeWatchLaterSaveBtns from "./LikeWatchLaterSaveBtns";
import Comments from "../../Component/Comments/Comments";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import { useSelector,useDispatch } from "react-redux";
import { addToHistory } from "../../action/History";
import { viewVideo } from "../../action/video";
function VideoPage() {
  const { vid } = useParams();

  const vids = useSelector((state) => state.videoReducer);
  const vv = vids?.data.filter((q) => q._id === vid)[0];
  const dispatch = useDispatch();

  // const chanels=useSelector(state=>state?.chanelReducers)
  // const currentChanel=chanels.filter(c=>c._id===Cid)[0];
  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const handleHistory=()=>{
    dispatch(
      addToHistory({
        videoId:vid,
        Viewer:CurrentUser?.result._id
      })
    )
  };
  const handleViews=()=>{
     dispatch(viewVideo({
      id:vid
     }))
  }
   useEffect(() => {
    if(CurrentUser){
      handleHistory();
    }
    handleViews()
   },[]);
  return (
    <>
      <div className="container_videoPage">
        <div className="container2_videoPage">
          <div className="video_display_screen_videoPage">
            <video
              src={`http://localhost:5500/${vv.filePath}`}
              controls
              autoPlay
              className={"video_ShowVideo_videoPage"}
            ></video>
            <div className="video_details_videoPage">
              <div className="video_btns_title_videoPage_cont">
                <p className="video_title_videoPage">{vv?.videoTitle}</p>
                <div className="views_date_btns_videoPage">
                  <div className="views_videoPage">
                    {vv.Views} views <div className="dot"></div>{" "}
                    {moment(vv?.createdAt).fromNow()}
                  </div>
                  <LikeWatchLaterSaveBtns  vv={vv} vid={vid}/>
                </div>
              </div>
              <Link to={`/chanelpage/${vv?.videoChanel}`} className="chanel_details_videoPage">
                <b className="chanel_logo_videoPage">
                  <p>{vv?.Uploder.charAt(0).toUpperCase()}</p>
                </b>
                <p className="chanel_name_videoPage">{vv?.Uploder}</p>
              </Link>
              <div className="comments_videoPage">
                <h2>
                  <u>Comments</u>
                </h2>
                <Comments  videoId={vv._id}/>
              </div>
            </div>
          </div>
          <div className="moreVideobar">More video</div>
        </div>
      </div>
    </>
  );
}

export default VideoPage;
