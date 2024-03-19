import React, { useState } from "react";
import "./Comments.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, editComment } from "../../action/comment";
import moment from "moment";

function DisplayComment({
  cId,
  commentBody,
  userId,
  commentOn,
  userCommented,
}) 
{

  const [edit, setEdit] = useState(false);
  const [commentBdy, setCommentBdy] = useState("");
  const [cmtId, setCmtId] = useState("");
  const CurrentUser = useSelector((state) => state?.currentUserReducer);

  const dispatch = useDispatch();

  const handleEdit = (ctId, ctBdy) => {
    setEdit(true);
    setCommentBdy(ctBdy);
    setCmtId(ctId);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!commentBdy) {
      alert("Type Your comments");
    } else {
      dispatch(
        editComment({
          id: cmtId,
          commentBody: commentBdy,
        })
      );
      setCommentBdy("");
    }
    setEdit(false);
  };
  const handleDel=(id)=>{
    dispatch(deleteComment(id)
      
    )
  }


  return (
    <>
      {edit ? (
        <>
          <form
            action=""
            className="comments_sub_form_comments"
            onSubmit={handleOnSubmit}
          >
            <input
              type="text"
              onChange={(e) => setCommentBdy(e.target.value)}
              value={commentBdy}
              className="comment_ibox"
              placeholder="Edit Comments...."
            ></input>
            <input
              type="submit"
              value="Change"
              className="comments_add_btn_comments"
            />
          </form>
        </>
      ) : (
        <>
          <p className="comment_body">{commentBody}</p>
        </>
      )}
      <p className="usercomment"> - {userCommented} commented {moment(commentOn).fromNow()}</p>

      {
        CurrentUser?.result._id === userId && (
          <p className="EditDel_DisplayCommented">
          <i onClick={() => handleEdit(cId, commentBody)}>Edit</i>
          <i onClick={()=> handleDel(cId)}>Delete</i>
        </p>
        )
      }
     
    </>
  );
}

export default DisplayComment;
