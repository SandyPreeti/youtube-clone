import React from "react";
import LeftSidebar from "../../Component/LeftSidebar/LeftSidebar";
import ShowVideoGrid from "../../Component/ShowVideoGrid/ShowVideoGrid";
// import vid from '../../Component/Video/video.mp4';
import { useSelector } from "react-redux";
import {useParams} from 'react-router-dom'
// import './Search.css';
function Search() {
const {searchQuery}=useParams()

  const vids = useSelector((state) => state.videoReducer)
    ?.data?.filter((q) =>
      q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())
    )
    .reverse();

  return (
    <div className="container_Pages_App">
      <LeftSidebar />
      <div className="cotainer2_Pages_App">
        <h2 style={{color:"white"}}>Search Reasults for {searchQuery}....</h2>
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  );
}

export default Search;
