import React from 'react'
import ShowVideo from '../ShowVideo/ShowVideo'
import vid from '../../Component/Video/video.mp4';

function ShowVideoList({videoId}) {
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
    <div className='Containe_ShowVideoGrid'>
    {
        vids?.filter(q=>q._id===videoId).map(vi=>{

            return (
                <div  key={vi._id}className='video_box_app'>
                    <ShowVideo vid={vi}/>

                </div>
            )


        })
    }
  
</div>
  )
}

export default ShowVideoList
