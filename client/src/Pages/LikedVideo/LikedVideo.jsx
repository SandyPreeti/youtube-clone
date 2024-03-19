import React from 'react'
// import vid from '../../Component/Video/video.mp4';
import WHL from '../../Component/WHL/WHL';
import {useSelector} from 'react-redux';

function LikedVideo() {
  const likedVideoList = useSelector(state=>state.likedVideoReducer)
  console.log(likedVideoList)
//   const likedVideo=[{
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

   <WHL page={"LikedVideo"} videoList={likedVideoList} />
  )
}

export default LikedVideo
