import React, { useEffect } from 'react'
import { get_current, logout } from '../JS/actions/authActions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./assets/css/styles.css"

const Navbar = ({sethovered,hovered}) =>{
  
    const dispatch=useDispatch()
    useEffect(() => {dispatch(get_current())} 
    , []);
    const user=useSelector(state=> state.authReducer.user)
    const navigate=useNavigate()
    const token= localStorage.getItem('token')
console.log(hovered)

  return (
    <>
 { token ? 
<div>
        {/*========== HEADER ==========*/}
        <header className="header">
         
        </header>
        {/*========== navir ==========*/}
        <div className="navir" id="navirbar"  onMouseEnter={()=>sethovered(true)}  onMouseLeave={()=>sethovered(false)} >
          <nav className="navir__container">
            <div>
              <a href="#" className="navir__link navir__logo">
                <i className="bx bxs-disc navir__icon" />
                <span className="navir__logo-name">Bedimcode</span>
              </a>
              <div className="navir__list">
                <div className="navir__items">
                  <h3 className="navir__subtitle">Profile</h3>
                  <a href="/" className="navir__link active">
                    <i className="bx bx-home navir__icon" />
                    <span className="navir__name">Home</span>
                  </a>
                  <div className="navir__dropdown">
                    <a href="/profile" className="navir__link">
                      <i className="bx bx-user navir__icon" />
                      <span className="navir__name">Profile</span>
                      <i className="bx bx-chevron-down navir__icon navir__dropdown-icon" />
                    </a>
                    <div className="navir__dropdown-collapse">
                      <div className="navir__dropdown-content">
                        <a href="#" className="navir__dropdown-item">Passwords</a>
                        <a href="#" className="navir__dropdown-item">Mail</a>
                        <a href="#" className="navir__dropdown-item">Accounts</a>
                      </div>
                    </div>
                  </div>
                  <a href={`/inbox/${user._id}`} className="navir__link">
                    <i className="bx bx-message-rounded navir__icon" />
                    <span className="navir__name">Messages</span>
                  </a>
                </div>
                <div className="navir__items">
                  <h3 className="navir__subtitle">Menu</h3>
                  <div className="navir__dropdown">
                    <a href="#" className="navir__link">
                      <i className="bx bx-bell navir__icon" />
                      <span className="navir__name">Notifications</span>
                      <i className="bx bx-chevron-down navir__icon navir__dropdown-icon" />
                    </a>
                    <div className="navir__dropdown-collapse">
                      <div className="navir__dropdown-content">
                        <a href="#" className="navir__dropdown-item">Blocked</a>
                        <a href="#" className="navir__dropdown-item">Silenced</a>
                        <a href="#" className="navir__dropdown-item">Publish</a>
                        <a href="#" className="navir__dropdown-item">Program</a>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="navir__link">
                    <i className="bx bx-compass navir__icon" />
                    <span className="navir__name">Explore</span>
                  </a>
                  <a href="#" className="navir__link">
                    <i className="bx bx-bookmark navir__icon" />
                    <span className="navir__name">Saved</span>
                  </a>
                </div>
              </div>
            </div>
            <a onClick={()=>{dispatch(logout())}} href='/' className="navir__link navir__logout">
              <i className="bx bx-log-out navir__icon" />
              <span className="navir__name">Log Out</span>
            </a>
          </nav>
        </div>
      </div> : <div>
        {/*========== HEADER ==========*/}
        <header className="header">
         
        </header>
        {/*========== navir ==========*/}
        <div className="navir" id="navirbar"  onMouseEnter={()=>sethovered(true)}  onMouseLeave={()=>sethovered(false)} >
          <nav className="navir__container">
            <div>
              <a href="#" className="navir__link navir__logo">
                <i className="bx bxs-disc navir__icon" />
                <span className="navir__logo-name">Bedimcode</span>
              </a>
              <div className="navir__list">
                <div className="navir__items">
                  <h3 className="navir__subtitle">Profile</h3>
                  <a href="/" className="navir__link active">
                    <i className="bx bx-home navir__icon" />
                    <span className="navir__name">Home</span>
                  </a>
                  <div className="navir__dropdown">
                    <a href="/login" className="navir__link">
                      <i className="bx bx-user navir__icon" />
                      <span className="navir__name">Signin</span>
                    </a>
                 
                  </div>
                 
                </div>
                <div className="navir__items">
                  <h3 className="navir__subtitle">Menu</h3>
                  <div className="navir__dropdown">
                    <a href="#" className="navir__link">
                      <i className="bx bx-bell navir__icon" />
                      <span className="navir__name">Notifications</span>
                      <i className="bx bx-chevron-down navir__icon navir__dropdown-icon" />
                    </a>
                    <div className="navir__dropdown-collapse">
                      <div className="navir__dropdown-content">
                        <a href="#" className="navir__dropdown-item">Blocked</a>
                        <a href="#" className="navir__dropdown-item">Silenced</a>
                        <a href="#" className="navir__dropdown-item">Publish</a>
                        <a href="#" className="navir__dropdown-item">Program</a>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="navir__link">
                    <i className="bx bx-compass navir__icon" />
                    <span className="navir__name">Explore</span>
                  </a>
                  <a href="#" className="navir__link">
                    <i className="bx bx-bookmark navir__icon" />
                    <span className="navir__name">Saved</span>
                  </a>
                </div>
              </div>
            </div>
          
          </nav>
        </div>
      </div>}

   </>
  );
}
export default Navbar;
