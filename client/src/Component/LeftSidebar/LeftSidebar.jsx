import React from 'react'
import {AiOutlineHome} from 'react-icons/ai';
import {MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary} from 'react-icons/md';
import {NavLink} from "react-router-dom";
import './LeftSidebar.css';
import Short from './Shorts.png';

function LeftSidebar() {
  return (
    <div className='container_leftSidebar'>
      <NavLink to={'/'} className="icon_sidebar_div">
        <AiOutlineHome size={22} className="icon_sidebar"/>
        <div className="text_sidebar_icon">Home</div>
      </NavLink>
      <div className="icon_sidebar_div">
        <MdOutlineExplore size={22} className="icon_sidebar"/>
        <div className="text_sidebar_icon">Explore</div>
      </div>
      <div className="icon_sidebar_div">
        <img src={Short} width={22} alt="short"className="icon_sidebar"/>
        <div className="text_sidebar_icon">Shorts</div>
      </div>
      <div className="icon_sidebar_div">
        <MdOutlineSubscriptions size={22} className="icon_sidebar"/>
        <div className="text_sidebar_icon" style={{fontSize:"12px"}}>Subscription</div>
      </div>
      <NavLink to={'/library'} className="icon_sidebar_div">
        <MdOutlineVideoLibrary size={22} className="icon_sidebar"/>
        <div className="text_sidebar_icon">Library</div>
      </NavLink>
    </div>
  )
}

export default LeftSidebar
