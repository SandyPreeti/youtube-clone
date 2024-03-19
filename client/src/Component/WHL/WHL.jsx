import React from 'react'
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import {useSelector, useDispatch} from 'react-redux'
import './WHL.css'
import WHLVideoList from './WHLVideoList';
import { clearHistory } from '../../action/History';
function WHL({page, videoList}) {
    const dispatch=useDispatch()
    const CurrentUser=useSelector(state=>state?.currentUserReducer);

    const handleClearHistory=()=>{
        if(CurrentUser){
            dispatch(clearHistory({
                userId:CurrentUser?.result._id
            }))
        }
    }

  return (
    <div className='container_Pages_App'>
        <LeftSidebar/>
        <div className="cotainer2_Pages_App">
<p className='container_whl'>
    <div className='box_whl leftside_Whl'>
        <b>Your {page} Shown Here</b>
        {
            page==="History"&&
            <div className='clear_history_btn' onClick={()=>handleClearHistory()}>
            Clear History
        </div>
        }
        
        </div> 
        <div className='rightSide_whl'>
            <h1> {page}</h1>
            <div className='whl_list'>
               <WHLVideoList
               CurrentUser={CurrentUser?.result._id}
               page={page} videoList={videoList}/>

            </div>
        </div>
        </p>


            </div>
        </div>
  )
}

export default WHL
