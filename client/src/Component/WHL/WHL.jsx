import React from 'react'
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import './WHL.css'
import WHLVideoList from './WHLVideoList';
function WHL({page, videoList}) {
  return (
    <div className='container_Pages_App'>
        <LeftSidebar/>
        <div className="cotainer2_Pages_App">
<p className='container_whl'>
    <div className='box_whl leftside_Whl'>
        <b>Your {page} Shown Here</b>
        {
            page==="History"&&
            <div className='clear_history_btn'>
            Clear History
        </div>
        }
        
        </div> 
        <div className='rightSide_whl'>
            <h1> {page}</h1>
            <div className='whl_list'>
               <WHLVideoList
               
               page={page} videoList={videoList}/>

            </div>
        </div>
        </p>


            </div>
        </div>
  )
}

export default WHL
