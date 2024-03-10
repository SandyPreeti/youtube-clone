import React from 'react';
import{FaHistory} from 'react-icons/fa';
import LeftSidebar from '../../Component/LeftSidebar/LeftSidebar';
import WHLVideoList from '../../Component/WHL/WHLVideoList';
import vid from '../../Component/Video/video.mp4';

import './Library.css';
import { MdOutlineWatchLater } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';
function Library() {
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
          <div className="container_libraryPage">
              <h1 className='title_container_libraryPage'>
                <b>
                  <FaHistory/>
                </b>
                <b>History</b>
              </h1>
              <div className='container_videoList_LibraryPage'>
                <WHLVideoList
                page={"History"} videoList={vids}/>
              </div>
            </div>
            <div className="container_libraryPage">
              <h1 className='title_container_libraryPage'>
                <b>
                  <MdOutlineWatchLater/>
                </b>
                <b>Watch Later</b>
              </h1>
              <div className='container_videoList_LibraryPage'>
                <WHLVideoList
                page={"WatchLater"} videoList={vids}/>
              </div>
            </div>
            <div className="container_libraryPage">
              <h1 className='title_container_libraryPage'>
                <b>
                  <AiOutlineLike/>
                </b>
                <b>Like Video</b>
              </h1>
              <div className='container_videoList_LibraryPage'>
                <WHLVideoList
                page={"LikedVideo"} videoList={vids}/>
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default Library
