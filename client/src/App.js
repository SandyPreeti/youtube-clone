import './App.css';
import Navbar from './Component/Navbar/Navbar';
import{BrowserRouter as Router} from 'react-router-dom';
import AllRoutes from './Component/AllRoutes';
import DrawerSidebar from './Component/LeftSidebar/DrawerSidebar';
import { useState } from 'react';
function App() {
const [toggleDrawerSidebar, setToggleDrawerSidebar]= useState({display:"none"});
const toggleDrawer=()=>{
  if(toggleDrawerSidebar.display==='none'){
    setToggleDrawerSidebar({display:"flex"})
  }
else{
  setToggleDrawerSidebar({display:'none'})
}

}

  return (
    <Router>
<Navbar
toggleDrawer={toggleDrawer}/>

{<DrawerSidebar  toggleDrawer={toggleDrawer}  toggleDrawerSidebar={toggleDrawerSidebar}/>}
<AllRoutes/>
    </Router>
  
  );
}

export default App;
