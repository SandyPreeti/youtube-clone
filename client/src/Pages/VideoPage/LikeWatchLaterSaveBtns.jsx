import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdPlaylistAddCheck } from "react-icons/md";
import {
  RiHeartAddFill,
  RiPlayListAddFill,
  RiShareForwardFill,
} from "react-icons/ri";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import "./LikeWatchLaterSaveBtns.css";
import { useDispatch, useSelector } from "react-redux";
import { likeVideo } from "../../action/video";
import { addTolikedVideo, deletelikedVideo } from "../../action/likedVideo";
import { useEffect } from "react";
import { addTowatchLater, deleteWatchLater } from "../../action/watchLater";

function LikeWatchLaterSaveBtns({ vv, vid }) {
  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const dispatch = useDispatch();
  const [saveVideo, setSaveVideo] = useState(false);
  const [dislikeBtn, setDislikeBtn] = useState(false);
  const [likeBtn, setLikeBtn] = useState(false);
  const likedVideoList = useSelector((state) => state.likedVideoReducer);
  const watchLaterList = useSelector(state=>state.watchLaterReducer)


  useEffect(() => {
    likedVideoList?.data
      .filter(
        (q) => q?.videoId === vid && q?.Viewer === CurrentUser?.result._id
      )
      .map((m) => setLikeBtn(true));
      watchLaterList?.data
      .filter(
        (q) => q?.videoId === vid && q?.Viewer === CurrentUser?.result._id
      )
      .map((m) => setSaveVideo(true));
  }, []);

  const toggleSavedVideo = () => {
    if (CurrentUser) {
      if (saveVideo) {
        setSaveVideo(false);
        dispatch(
          deleteWatchLater({
            videoId: vid,
            Viewer: CurrentUser?.result._id,
          })
        );
      } else {
        setSaveVideo(true);
        dispatch(
          addTowatchLater({
            videoId: vid,
            Viewer: CurrentUser?.result._id,
          })
        );
      }
    } else {
      alert("Plz Login To Save the video");
    }
  };
  const toggleLikeBtn = (e, lk) => {
    if (CurrentUser) {
      if (likeBtn) {
        setLikeBtn(false);
        dispatch(
          likeVideo({
            id: vid,
            Like: lk - 1,
          })
        );
        dispatch(deletelikedVideo({
          videoId: vid,
          Viewer: CurrentUser?.result._id,
        }))
      } else {
        setLikeBtn(true);
        dispatch(
          likeVideo({
            id: vid,
            Like: lk + 1,
          })
        );
        dispatch(
          addTolikedVideo({
            videoId: vid,
            Viewer: CurrentUser?.result._id,
          })
        );
        setDislikeBtn(false);
      }
    } else {
      alert("Plz Login To give a like");
    }
  };
  const toggleDislikeBtn = (e, lk) => {
    if (CurrentUser) {
      if (dislikeBtn) {
        setDislikeBtn(false);
      } else {
        setDislikeBtn(true);
        if (likeBtn) {
          dispatch(
            likeVideo({
              id: vid,
              Like: lk - 1,
            })
          );
          dispatch(deletelikedVideo({
            videoId: vid,
            Viewer: CurrentUser?.result._id,
          }))
        }
        setLikeBtn(false);
      }
    } else {
      alert("Plz Login To give a like");
    }
  };
  return (
    <div className="btns_cont_videoPage">
      <div className="btn_videoPage">
        <BsThreeDots />
      </div>
      <div className="btn_videoPage">
        <div
          className="like_videoPage"
          onClick={(e) => toggleLikeBtn(e, vv.Like)}
        >
          {likeBtn ? (
            <>
              <AiFillLike size={22} className="btns_videoPage" />
            </>
          ) : (
            <>
              {" "}
              <AiOutlineLike size={22} className="btns_videoPage" />
            </>
          )}
          <b>{vv?.Like}</b>
        </div>
        <div
          className="like_videoPage"
          onClick={(e) => toggleDislikeBtn(e, vv.Like)}
        >
          {dislikeBtn ? (
            <>
              <AiFillDislike size={22} className="btns_videoPage" />
            </>
          ) : (
            <>
              {" "}
              <AiOutlineDislike size={22} className="btns_videoPage" />
            </>
          )}
          <b>Dislike</b>
        </div>
        <div className="like_videoPage" onClick={toggleSavedVideo}>
          {saveVideo ? (
            <>
              <MdPlaylistAddCheck size={22} className="btns_videoPage" />
              <b>Saved</b>
            </>
          ) : (
            <>
              <RiPlayListAddFill size={22} className="btns_videoPage" />
              <b>Save</b>
            </>
          )}
        </div>
        <div className="like_videoPage">
          <>
            <RiHeartAddFill size={22} className="btns_videoPage" />
            <b>Thanks</b>
          </>
        </div>
        <div className="like_videoPage">
          <>
            <RiShareForwardFill size={22} className="btns_videoPage" />
            <b>Share</b>
          </>
        </div>
      </div>
    </div>
  );
}

export default LikeWatchLaterSaveBtns;
