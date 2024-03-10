import React, { useEffect } from 'react'
import './Navbar.css';
import Logo from "./logo.png";
import SearchBar from '../SearchBar/SearchBar';
import {RiVideoAddLine} from 'react-icons/ri';
import{IoMdNotificationsOutline} from 'react-icons/io';
import {BiUserCircle} from 'react-icons/bi';
import {Link} from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';
import {gapi} from 'gapi-script';
import {useDispatch, useSelector} from 'react-redux';
import { login } from '../../action';

function Navbar({toggleDrawer}) {
    // const CurrentUser=null;
    // const CurrentUser= {
    //     result:{
    //         email:"preeti123@BiLogoGmail.com",
    //         joinedOn:"2222-07-15T09:57:23.4897"
    //     },
    // }
    const CurrentUser=useSelector(state=>state.currentUSerReducer)
    console.log()

    useEffect(()=>{
        function start(){
            gapi.client.init({
                clientId:"94564221489-h66jc6iumnjs2l3gn3mb5701sg8l098c.apps.googleusercontent.com",
                scope:"email"
            })
        }
        gapi.load("client:auth2",start)
    },[])
const dispatch=useDispatch()
     const onSuccess=(response)=>{
        const Email=response?.profileObj.email
        console.log(Email)
        dispatch(login({email:Email}))
     }

     const onFailure=(response)=>{
        console.log('Failed',response);
     }
  return (
    <div className='Container_Navbar'>
    <div className='Burger_Logo_Navbar'>
        <div className='burger' onClick={()=>toggleDrawer()}>
            <p></p>
            <p></p>
            <p></p>

        </div>
        <Link to={'/'} className='Logo_div_Navbar'>
            <img src={Logo} alt="logo"/>
            <p className='Logo_title_Navbar'>Youtube</p>
        </Link>
    </div>
    <SearchBar/>
    <RiVideoAddLine size={22} className={"vid_bell_Navbar"}/>
    <div className="apps_Box">
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>

    </div>
    <IoMdNotificationsOutline size={22} className="vid_bell_Navbar"/>
    <div className="Auth_cont_Navbar">
        {
            CurrentUser?(<>
            <div className="Chanel_logo_app">
                <p className="fstChar_logo_app">
                    {
                        CurrentUser?.result.name ?(
                            <> {CurrentUser?.result.name.charAt(0).toUpperCase()}</>
                        ):(<>
                        {CurrentUser?.result.email.charAt(0).toUpperCase()}
                        </>)
                    }
                </p>
            </div>
            
            </>):(<>
            <GoogleLogin
            clientId={"94564221489-h66jc6iumnjs2l3gn3mb5701sg8l098c.apps.googleusercontent.com"}
            onSuccess={onSuccess}
            onFailure={onFailure}
            
            render={(renderProps)=>(
                <p onClick={renderProps.onClick} className="Auth_btn">
            <BiUserCircle  size={22}/>
            <b>Sign in</b>
        </p>)
            }
            />
            </>)
        }
       
    </div>

    </div>
  )
}

export default Navbar
