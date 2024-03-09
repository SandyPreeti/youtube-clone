import React, { useState } from 'react'
import './Comments.css';
import DisplayComment from './DisplayComment';
function Comments() {
    const [commentText,setCommentText] =useState("");

    const handleOnSubmit=(e)=>{
        e.preventDefault()
    }

    const commentList=[{
        _id:"1",
        commentBody:"hello",
        userCommented:"abc"
    },

    {    _id:"2",
        commentBody:"hello",
        userCommented:"abc"
    },
]
  return (
    <>
   <form action="" className="comments_sub_form_comments" onSubmit={handleOnSubmit}>
    <input type="text" onChange={e=>setCommentText(e.target.value)} className='comment_ibox' placeholder='Add Comments....'></input> 
    <input type='submit' value="add" className='comments_add_btn_comments'/> 
    </form> 
    
    <div className='display_comment_container'>
        {
            commentList.map(m=>{
                return (
                    <DisplayComment
                    commentBody={m.commentBody}
                    userCommented={m.userCommented}
                    cId={m._id}
                    />

                )
            })
        }

    </div>
    </>
  )
}

export default Comments
