import React, { useState } from 'react';
import './Comments.css'

function DisplayComment({cId,commentBody,userCommented}) {
const [edit,setEdit] =useState(false);
const [commentBdy,setCommentBdy]= useState('')

const handleEdit=(ctId,ctBdy)=>{
setEdit(true);
setCommentBdy(ctBdy)
}

const handleOnSubmit=(e)=>{
    e.preventDefault()
    setEdit(false)
}


  return (
   <>
   {
    edit?(<>
    <form action="" className="comments_sub_form_comments" onSubmit={handleOnSubmit} >
    <input type="text" onChange={e=>setCommentBdy(e.target.value)} value={commentBdy} className='comment_ibox' placeholder='Edit Comments....'></input> 
    <input type='submit' value="Change" className='comments_add_btn_comments'/> 
    </form> 
    </>):(<>
   <p className='comment_body'>{commentBody}</p>
    </>)
   }
   <p className='usercomment'> - {userCommented} commented</p>
<p className='EditDel_DisplayCommented'>
    <i onClick={()=>handleEdit(cId,commentBody)}>Edit</i>
    <i>Delet</i>
</p>

   </>
  )
}

export default DisplayComment
