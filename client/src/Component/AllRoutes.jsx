import React from 'react';
import{Routes,Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Library from '../Pages/Library/Library';
import WatchHistory from '../Pages/WatchHistory/WatchHIstory';
import LikedVideo from '../Pages/LikedVideo/LikedVideo';
import WatchLater from '../Pages/WatchLater/WatchLater';
import YourVideos from '../Pages/Your videos/YourVideos';
import VideoPage from '../Pages/VideoPage/VideoPage';

function AllRoutes() {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/library' element={<Library/>}/>
    <Route path='/history' element={<WatchHistory/>}/>
    <Route path='/likedvideo' element={<LikedVideo/>}/>
    <Route path='/watchlater' element={<WatchLater/>}/>
    <Route path='/yourvideo' element={<YourVideos/>}/>
    <Route path='/videopage/:vid' element={<VideoPage/>}/>




  </Routes>
  )
}

export default AllRoutes
