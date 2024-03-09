import React from 'react'
import LeftSidebar from '../../Component/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../Component/ShowVideoGrid/ShowVideoGrid'
import vid from '../../Component/Video/video.mp4';
import './YourVideos.css';
function YourVideos() {
  const vids=[{
    _id:1,
    video_src:vid,
    chanel:"adfdk",
    Uploder:"abc",
    description:"description of video 1"
  },
  {
    _id:2,
    video_src:vid,
    chanel:"adfdk",
    title:"video 2",
    Uploder:"abc",

    description:"description of video 2"
  },
  {
    _id:3,
    video_src:vid,
    chanel:"adfdk",
    title:"video 3",
    Uploder:"abc",

    description:"description of video 3"
  },
  {
    _id:4,
    video_src:vid,
    chanel:"adfdk",
    title:"video 4",
    Uploder:"abc",

    description:"description of video 4"
  },
]
  return (
     
    <div className='container_Pages_App'>
        <LeftSidebar/>
        <div className="cotainer2_Pages_App">
          <div className='container_youVideo'>
          <h1>Your Video</h1>
          <ShowVideoGrid vids={vids}/>

          </div>
        </div>
      
    </div>
  )
}

export default YourVideos
