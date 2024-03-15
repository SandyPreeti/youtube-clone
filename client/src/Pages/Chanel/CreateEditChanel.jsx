import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import './CreateEditChanel.css';
import { login } from '../../action/auth';
import { updateChanelDate } from '../../action/chanelUser';
function CreateEditChanel({setEditCreateChanelBtn}) {
    // const CurrentUser= {
    //     result:{
    //         email:"preeti123@BiLogoGmail.com",
    //         joinedOn:"2222-07-15T09:57:23.4897"
    //     },
    // }
    const CurrentUser=useSelector(state=>state.currentUserReducer)

    const [name, setName] = useState(CurrentUser?.result.name)
    const[desc, setDesc] = useState(CurrentUser?.result.name)
const dispatch=useDispatch();

   const handleSubmit=()=>{
    if(!name){
        alert("Plz Enter Name !")
    }else if(!desc){
        alert("Plz Enter Discription !")
    }else{
        dispatch(updateChanelDate(CurrentUser?.result._id,{
            name:name,
            desc:desc,
        }));
        setEditCreateChanelBtn(false);
        setTimeout(()=>{
            dispatch(login({email:CurrentUser?.result.email}));
        },5000)

    }

   }

  return (
    <div className="container_createEditChanel">
        <input type="submit" name="text" value={"X"}
        className='ibtn_x' onClick={()=>setEditCreateChanelBtn(false)}
        />
    <div className="container2_createEditChanel">
        <h1>{
            CurrentUser?.result.name?<>
            Edit</>:<>
            Create</>
            } Your Chanel</h1>
            <input type='text'
            value={name} onChange={(e)=>setName(e.target.value)} 
            placeholder='Enter Your/Chanel Name' className='ibox' name='text'/>
            <textarea type="text" 
            value={desc} onChange={(e)=>setDesc(e.target.value)} 
            rows={15} placeholder={"Enter Chanel Discription"} className={"ibox"}/>
            <input type="submit"
            onClick={handleSubmit}
             value={"Submit"} className='ibtn'/>

    </div>
        
    </div>
  )
}

export default CreateEditChanel
