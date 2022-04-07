import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Forbidden from './Forbidden'
import './assets/admin.scss'
import { getusers , deleteUser } from '../JS/actions/userActions'
import { useState } from 'react'
const AdminDashboard = ({hovered}) => {

    const user=useSelector(state=>state.authReducer.user)
    const users=useSelector(state=>state.userReducer.users)
    console.log(users)
    const dispatch = useDispatch();
  
    React.useEffect(() => {
      dispatch(getusers());
    }, []);
    const [displayed, setdisplayed] = useState(false)
    const [userId,setUserId]=useState('')
   console.log(userId)
  return (
      <>
    {
        user&&user.role===2 ?
        <div className='allbro' style={{marginLeft: hovered && "135px" , marginRight: !hovered&& "50px"  }}  >
        <div className="layout">
       
        <section className="sidebar">
          <div className="brand">
            <i className="icon fa fa-building"> </i>
            <h2> Admin </h2>
          </div>
          <nav className="main-nav">
            {/* Mainmenu */}
            <ul className="main-menu menu">
              <li className="menu-item selected selected">
                <a href="#"> Users </a>
              </li>
            </ul>
            {/* Submenu */}
           
          </nav>
          {/* Creators */}
          <div className="creators">
            <div className="owner">
              <img src="https://source.unsplash.com/40x40/?face" alt="Image 001" className="owner-img" />
              <div className="desc">
                <h3> Mark Barker </h3>
                <h6> Office Manager </h6>
              </div>
              <i className="icon fa fa-sort"> </i>
            </div>
            <div className="copyright">
              <h3> © Hayenne 2022 </h3>
              <p className="copy-text"> Created with love for the environment. By designers and developers who love to work together in offices!</p>
            </div>
          </div>
        </section>
        {/* Content Section */}
        <section className="content">
          {/* Topbar Section */}
          <div className="topbar">
            <h2 className="title"> Users </h2>
            <div className="user-options">
          
              <div className="country-selector">
                <i className="fa"> 🇺🇸 </i>
                <span className="text"> USA </span>
                <i className="fa fa-sort"> </i>
              </div>
            </div>
          </div>
          {/* Main content Section */}
          <div className="container"   > 
            <section className="user-list"  >
              {/* Search Users */}
              <div className="search-bar">
                <input type="text" name="searchtext" placeholder="Search Users" /> 
                <i className="fa fa-search"> </i>
              </div>
              {users.map(user=> 
              <div className="list-wrapper"   >
                <div onClick={()=>{ setUserId(user._id); setdisplayed(true)}} className="list-section"  >
                  <ul className="list">
                    <li> <img className='pdpp' src={`uploads/${user.imageUrl}`} alt="Image 001" />
                      <div className="text"  >
                        <h3  >{user.firstName} {user.lastName}</h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>)}
            </section>
            {/* User Detail section */}
            {users.filter(user=>user._id==userId).map(user=>        <section className="user-detail" style={{display:  displayed ? "block" : "none"}}>
              {/* Profile Info */}
              <div className="profile-info"   >
                <img className='pdp' src={`uploads/${user.imageUrl}`} alt="Image 001" />
                <div className="desc"  >
                  <h1  className="name"  >{user.firstName} {user.lastName} </h1>
                  
                  <div className="reviews">
                    <span className="count"> 9 </span>
                    <span> Reviews </span>
                  </div>
                </div>
              </div>
              {/* Basic Details */}
              <div className="basic-details profile-item">
                <h4> Basic Details </h4>
                <ul className="info">
                  <li> <i className="fa fa-comment-o"> </i> <span>{user.email}</span> </li>
                  <li> <i className="fa fa-mobile"> </i> <span>{user.phone}</span> </li>
                  <li> <i className="fa fa-map-marker"> </i> <span>{user.country}</span> </li>
                </ul>
              </div>
              {/* Bio */}
              <div className="bio-details profile-item">
                <h4> Bio </h4>
                <p className="desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </div>
              {/* Tag details */}
              <div className="tags-details profile-item">
               
                <ul className="info">
                
<button                   onClick={() => dispatch(deleteUser(userId))}
 id='deleting' class="noselect"><span class="text">Delete User</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                </ul>
              </div>
              <div className="divider profile-item">
              </div>
              
            </section> )}
      
          </div>
        </section>
      </div> </div> : <Forbidden/> }</>
  )
}

export default AdminDashboard