import React from 'react'
import vids from '../../Component/Video/video.mp4';
import './VideoPage.css';
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns';
import Comments from '../../Component/Comments/Comments';
function VideoPage() {
  return (
   <>
   <div className="container_videoPage">
    <div className="container2_videoPage">
        <div className='video_display_screen_videoPage'>
            <video src={vids} controls autoPlay className={'video_ShowVideo_videoPage'}></video>
          <div className="video_details_videoPage">
            <div className="video_btns_title_videoPage_cont">
              <p className="video_title_videoPage">Title</p>
              <div className="views_date_btns_videoPage">
                <div className="views_videoPage">
                5 views <div className="dot"></div> uploaded 1 year ago
                </div>
            <LikeWatchLaterSaveBtns/>
              </div>
            </div>
            <div className="chanel_details_videoPage">
              <b className='chanel_logo_videoPage'>
                <p>C</p>
              </b>
              <p className='chanel_name_videoPage'>Chanel name</p>
            </div>
            <div className="comments_videoPage">
              <h2><u>Comments</u></h2>
              <Comments/>
            </div>
          </div>

        </div>
        <div className="moreVideobar">
          More video
        </div>
    </div>
   </div>
   
   </>
  )
}

export default VideoPage
