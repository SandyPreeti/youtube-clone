import React, { useState } from "react";
import "./VideoUpload.css";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { uploadVideo } from "../../action/video";
function VideoUpload({ setVidUploadPage }) {
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state.currentUserReducer);

  const [title, setTitle] = useState("");
  const [videoFile, setVideoFile] = useState("");
  const [progress, setProgress] = useState(0);

  const handleSetVideoFile = (e) => {
    setVideoFile(e.target.files[0]);
  };
  const fileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setProgress(percentage);
      if (percentage === 100) {
        setTimeout(function () {}, 3000);
        setVidUploadPage(false)
      }
    },
  };

  const uploadVideoFile = () => {
    if (!title) {
      alert("Plz Enter A Title of the video");
    } else if (!videoFile) {
      alert("Plz Attach a video File");
    } else if (videoFile.size > 1000000) {
      alert("Plz Attach video file less than 1000000");
    } else {
      const fileData = new FormData();
      fileData.append("file", videoFile);
      fileData.append("title", title);
      fileData.append("chanel", CurrentUser?.result._id);
      fileData.append("Uploder", CurrentUser?.result.name);
      console.log(videoFile)
      dispatch(
        uploadVideo({
          fileData: fileData,
          fileOptions: fileOptions,
        })
      );
    }
  };
  return (
    <div className="container_VidUpload">
      <input
        type="submit"
        name="text"
        value={"X"}
        className="ibtn_x"
        onClick={() => setVidUploadPage(false)}
      />
      <div className="container2_VidUpload">
        <div className="ibox_div_vidupload">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="ibox_vidupload"
            maxLength={30}
            placeholder="Enter Title of your video"
          />
          <label htmlFor="file" className="ibox_vidupload btn_vidupload">
            <input
              onChange={(e) => handleSetVideoFile(e)}
              type="file"
              name="file"
              className="ibox_vidupload"
              style={{ fontSize: "1rem" }}
            />
          </label>
        </div>
        <div className="ibox_div_vidupload">
          <input
            type="submit"
            onClick={() => uploadVideoFile()}
            value="Upload"
            className="ibox_vidupload btn_vidupload"
          ></input>
        </div>
        <div className="loader ibox_div_vidupload">
          <CircularProgressbar
            value={progress}
            text={`${progress}`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              textSize: "20px",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(255,255,255,${progress / 100})`,
              textColor: "#f88",
              trailColor: "#adff2f",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default VideoUpload;
