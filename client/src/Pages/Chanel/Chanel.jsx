import React from 'react'
import ShowVideoGrid from '../../Component/ShowVideoGrid/ShowVideoGrid';
import LeftSidebar from '../../Component/LeftSidebar/LeftSidebar';
// import vid from '../../Component/Video/video.mp4';
import DescribeChanel from './DescribeChanel';
import{useParams} from 'react-router-dom';
import {useSelector} from 'react-redux'

function Chanel({setEditCreateChanelBtn, setVidUploadPage}) {
const{Cid}=useParams();

const vids = useSelector((state) => state.videoReducer)
?.data?.filter((q) => q?.videoChanel === Cid)
.reverse();

    // const vids=[{
    //     _id:1,
    //     video_src:vid,
    //     chanel:"adfdk",
    //     Uploder:"abc",
    //     description:"description of video 1"
    //   },
    //   {
    //     _id:2,
    //     video_src:vid,
    //     chanel:"adfdk",
    //     title:"video 2",
    //     Uploder:"abc",
    
    //     description:"description of video 2"
    //   },
    //   {
    //     _id:3,
    //     video_src:vid,
    //     chanel:"adfdk",
    //     title:"video 3",
    //     Uploder:"abc",
    
    //     description:"description of video 3"
    //   },
    //   {
    //     _id:4,
    //     video_src:vid,
    //     chanel:"adfdk",
    //     title:"video 4",
    //     Uploder:"abc",
    
    //     description:"description of video 4"
    //   },
    // ]
  return (
    <div className='container_Pages_App'>
    <LeftSidebar/>
    <div className="cotainer2_Pages_App">
        <DescribeChanel
        Cid={Cid}
        setVidUploadPage={setVidUploadPage}
setEditCreateChanelBtn={setEditCreateChanelBtn}
/>
      <ShowVideoGrid vids={vids}/>
    </div>
  
</div>
  )
}

export default Chanel
