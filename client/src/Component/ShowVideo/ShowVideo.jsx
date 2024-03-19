import React from "react";
import "./ShowVideo.css";
import { Link } from "react-router-dom";
import moment from 'moment';
function ShowVideo({ vid }) {
  // console.log(vid)
  return (
    <>
      <Link to={`/videopage/${vid?._id}`}>
        <video src={`http://localhost:5500/${vid.filePath}`} className="video_Showvideo"></video>
      </Link>
      <div className="video_discription">
        <div className="Chanel_logo_app">
          <div className="fstChar_logo_app">
            {vid?.Uploder?.charAt(0).toUpperCase()}
          </div>
        </div>
        <div className="video_details">
          <p className="title_vid_ShowVideo">{vid?.videoTitle}</p>
          <pre className="vid_views_UploadTime">{vid?.Uploder}</pre>
          <pre className="vid_views_UploadTime">
            {vid?.Views} views <div className="dot"></div>  {moment(vid?.createdAt).fromNow()}
          </pre>
        </div>
      </div>
    </>
  );
}

export default ShowVideo;
