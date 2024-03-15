import React from "react";
import "./Auth.css";
import { GoogleLogout } from "react-google-login";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../action/currentUser";
import { Link } from "react-router-dom";
function Auth({ User, setAuthBtn, setEditCreateChanelBtn }) {
  const dispatch = useDispatch();
  const onLogoutSuccess = () => {
    dispatch(setCurrentUser(null));
    alert("Log Out Successfully");
  };

  return (
    <div className="Auth_container" onClick={() => setAuthBtn(false)}>
      <div className="Auth_container2">
        <p className="User_Details">
          <div className="Chanel_logo_app">
            <p className="fstChar_logo_app">
              {User?.result.name ? (
                <>{User?.result.name.charAt(0).toUpperCase()}</>
              ) : (
                <>{User?.result.email.charAt(0).toUpperCase()}</>
              )}
            </p>
          </div>
          <div className="email_Auth">{User?.result.email} </div>
        </p>
        <div className="btns_Auth">
          {User?.result.name ? 
            <>
            {
                <Link to={`/chanelpage/${User?.result._id}`} className="btn_Auth">Your Chanel</Link>
                
                      
                  
            }
             
            </>:<>
              <input
                type="submit"
                value="Create Your Chanel"
                className="btn_Auth"
                onClick={() => setEditCreateChanelBtn(true)}
              />
            </>
              }

          <div>
            <GoogleLogout
              clientId={
                "94564221489-h66jc6iumnjs2l3gn3mb5701sg8l098c.apps.googleusercontent.com"
              }
              onLogoutSuccess={onLogoutSuccess}
              render={(renderProps) => (
                <div onClick={renderProps.onClick} className="btn_Auth">
                  <BiLogOut />
                  Log Out
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
