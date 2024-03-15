import './App.css';
import Navbar from './Component/Navbar/Navbar';
import{BrowserRouter as Router} from 'react-router-dom';
import AllRoutes from './Component/AllRoutes';
import DrawerSidebar from './Component/LeftSidebar/DrawerSidebar';
import  React ,{ useEffect, useState } from 'react';
import CreateEditChanel from './Pages/Chanel/CreateEditChanel';
import { fetchAllChanel } from './action/chanelUser';
import {useDispatch} from 'react-redux';
import VideoUpload from './Pages/VideoUpload/VideoUpload';
import { getAllVideos } from './action/video';
function App() {


 const dispatch= useDispatch();


useEffect(()=>{
  dispatch(fetchAllChanel());
  dispatch(getAllVideos());

},[dispatch])



const [toggleDrawerSidebar, setToggleDrawerSidebar]= useState({display:"none"});
const toggleDrawer=()=>{
  if(toggleDrawerSidebar.display==='none'){
    setToggleDrawerSidebar({display:"flex"})
  }
else{
  setToggleDrawerSidebar({display:'none'})
}

}
const [editCreateChanelBtn,setEditCreateChanelBtn]= useState(false)
const [vidUploadPage, setVidUploadPage] = useState(false);

  return (
    <Router>
      {
        vidUploadPage &&
      <VideoUpload setVidUploadPage={setVidUploadPage}/>

      }

      {editCreateChanelBtn &&  <CreateEditChanel  setEditCreateChanelBtn={setEditCreateChanelBtn}/>}
     
<Navbar
setEditCreateChanelBtn={setEditCreateChanelBtn}
toggleDrawer={toggleDrawer}/>

{<DrawerSidebar  toggleDrawer={toggleDrawer}  toggleDrawerSidebar={toggleDrawerSidebar}/>}
<AllRoutes 
setVidUploadPage={setVidUploadPage}
setEditCreateChanelBtn={setEditCreateChanelBtn}
/>
    </Router>
  
  );
}

export default App;
