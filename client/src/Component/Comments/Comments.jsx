import React, { useState } from "react";
import "./Comments.css";
import DisplayComment from "./DisplayComment";
import { useSelector, useDispatch } from "react-redux";
import { postComment } from "../../action/comment";
function Comments({ videoId }) {
  const [commentText, setCommentText] = useState("");
  const CurrentUser = useSelector((state) => state?.currentUserReducer);

  const commentList = useSelector((s) => s.commentReducer);
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(CurrentUser){
    if (!commentText) {
      alert("Plz Type your comment !");
    } else {
      dispatch(
        postComment({
          videoId: videoId,
          userId: CurrentUser?.result._id,
          commentBody: commentText,
          userCommented: CurrentUser?.result.name,
        })
      );
      setCommentText("");
    }}else{
      alert("Plz Login to Post Your Comments")
    }

    
  };

  //     const commentList=[{
  //         _id:"1",
  //         commentBody:"hello",
  //         userCommented:"abc"
  //     },

  //     {    _id:"2",
  //         commentBody:"hello",
  //         userCommented:"abc"
  //     },
  // ]
  return (
    <>
      <form
        action=""
        className="comments_sub_form_comments"
        onSubmit={handleOnSubmit}
      >
        <input
          type="text"
          onChange={(e) => setCommentText(e.target.value)}
          className="comment_ibox"
          value={commentText}
          placeholder="Add Comments...."
        ></input>
        <input
          type="submit"
          value="add"
          className="comments_add_btn_comments"
        />
      </form>

      <div className="display_comment_container">
        {commentList?.data?.filter(q=> videoId === q?.videoId).reverse().map((m) => {
          return (
            <DisplayComment
              commentBody={m.commentBody}
              userCommented={m.userCommented}
              cId={m._id}
              userId={m.userId}
              commentOn={m.commentOn}
            />
          );
        })}
      </div>
    </>
  );
}

export default Comments;
