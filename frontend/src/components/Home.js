import React from 'react'
import {  useNavigate } from 'react-router-dom'
import "./assets/home.css"
import { useDispatch, useSelector } from 'react-redux'
import { getusers } from '../JS/actions/userActions'

const Home = ({hovered}) => {
    const users=useSelector(state=>state.userReducer.users)
  

    console.log(users)
    const dispatch = useDispatch();
 const navigate=useNavigate()
    React.useEffect(() => {
      dispatch(getusers());
    }, []);
   
  console.log(hovered)
  return (
    <div className='ion' style={{marginLeft: hovered && "135px" , marginRight: !hovered&& "-200px"  }}   >
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
        <div className="conta">
          <div className="bara">
            <div className="nav">
              <div className="logoo">
                <img src="https://res.cloudinary.com/startup-grind/image/upload/fl_sanitize/v1/gcs/platform-data-twitch/contentbuilder/logo-final_DkOO8q1.svg" alt="..." />
              </div>
              <div className="item" id="selected">Discover</div>
           
            </div>
          </div>
          <div className="main">
            <div className="streamer-bara">
              <div className="streamer-bara-title">
                <p className="desktop-title">Top Sellers</p>
                <p className="mobile-title">❤</p>
              </div>
          {users.map(user=>
              <div onClick={()=>navigate(`/profileseller/${user._id}`)} className="followed-channels">
              <div className="followed-channel">
                <div className="profile-image">
                  <img src={`/uploads/${user.imageUrl}`} alt="A_Seagull" />
                </div>
                <div className="profile-info">
                  <p className="profile-username">{user.firstName}</p>
                  <p className="profile-game-title">Overwatch</p>
                </div>
                <div className="profile-viewers">
                  <div className="live-icon" />
                  <div className="viewer-count">4.1K</div>
                </div>
           
                <div className="profile-viewers">
                  {/* <div class="viewer-count">Online</div> */}
                </div>
              </div>
            </div>
          )}    <br />
              <small>Show More</small>
              <br />
           
            
            </div>
            <div className="stream-content">
              {/* <div class="home-header">
            <h1 class="home-title">Home</h1>
          </div> */}
              <div className="games">
                <h3>Popular <span className="title-highlight">Products</span></h3>
                <div className="games-carousel">
                  <div className="game">
                    <div onClick={()=>navigate('/seller/products/624e0a60fb9a8309698c051e')} className="game-cover">
                      <img src="/uploads/imageUrl-1649281632623.webp" alt="Animal Crossing" />
                    </div>
                    <div className="game-info">
                      <p className="game-title">OPPO A55</p>
                      <p className="game-viewership">61.1K Views</p>
                    </div>
                    <div className="game-categories">
                      <span>Simulation</span>
                    </div>
                  </div>
                  <div className="game">
                    <div onClick={()=>navigate('/seller/products/624df103fb9a8309698c04ae')} className="game-cover">
                      <img className='imp' src="/uploads/imageUrl-1649254475880.webp" alt="League of Legends" />
                    </div>
                    <div className="game-info">
                      <p className="game-title">Iphone 12 Pro Max</p>
                      <p className="game-viewership">186K Views</p>
                    </div>
                    <div className="game-categories">
                      <span>MOBA</span>
                    </div>
                  </div>
                  <div className="game">
                    <div onClick={()=>navigate('/seller/products/624e085cfb9a8309698c0507')} className="game-cover">
                      <img src="/uploads/imageUrl-1649281116350.jpg" alt="World of Warcraft" />
                    </div>
                    <div className="game-info">
                      <p className="game-title">Samsung Galaxy S21 </p>
                      <p className="game-viewership">5.4K Views</p>
                    </div>
                    <div className="game-categories">
                      <span>MMORPG</span>
                      <span>RPG</span>
                    </div>
                  </div>
                  <div className="game">
                    <div onClick={()=>navigate('/seller/products/624e0987fb9a8309698c0515')} className="game-cover">
                      <img src="/uploads/imageUrl-1649281415520.jpg" alt="Valorant" />
                    </div>
                    <div className="game-info">
                      <p className="game-title">OPPO A31</p>
                      <p className="game-viewership">6.1K Views</p>
                    </div>
                    <div className="game-categories">
                      <span>FPS</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider">
                <div className="bara" />
                <div className="show-more">
                  Show more <i className="fa fa-chevron-down" />
                </div>
                <div className="bara" />
              </div>
              <div className="streams">
                <h3>
                  <span className="title-highlight">Live Streams</span> We Think You'll
                  Like
                </h3>
                <div className="stream-carousel">
                  <div className="stream">
                    <div className="stream-thumbnail">
                      <span className="live">LIVE</span>
                      <img src="https://raw.githubusercontent.com/acupoftee/100-Projects-for-100-Days/master/day3_stream_site/assets/eeveea.jpg" alt="Overwatch" />
                      <span className="viewers">230 viewers</span>
                    </div>
                    <div className="stream-info">
                      <div className="stream-profile-avatar">
                        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/f8964551-4fe4-4db9-adaf-5735ed378521-profile_image-50x50.png" alt="eeveea_" />
                      </div>
                      <div className="stream-text">
                        <p className="stream-title">
                          When comp gives you no mercy ....
                        </p>
                        <p className="stream-host">EeveeA_</p>
                        <p className="stream-game">Overwatch</p>
                        <div className="game-categories">
                          <span>LGBTQIA+</span>
                          <span>English</span>
                          <span>AMA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="stream">
                    <div className="stream-thumbnail">
                      <span className="live">LIVE</span>
                      <img src="https://raw.githubusercontent.com/acupoftee/100-Projects-for-100-Days/master/day3_stream_site/assets/emongg.jpg" alt="Overwatch" />
                      <span className="viewers">9.2K viewers</span>
                    </div>
                    <div className="stream-info">
                      <div className="stream-profile-avatar">
                        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/10c36ad0a4756df8-profile_image-50x50.png" alt="Emongg" />
                      </div>
                      <div className="stream-text">
                        <p className="stream-title">
                          OW then Valorant Beta !Drops at 1 PM EST :) - Every day in
                          April is what I said :)
                        </p>
                        <p className="stream-host">Emongg</p>
                        <p className="stream-game">VALORANT</p>
                        <div className="game-categories">
                          <span>English</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="stream">
                    <div className="stream-thumbnail">
                      <span className="live">LIVE</span>
                      <img src="https://raw.githubusercontent.com/acupoftee/100-Projects-for-100-Days/master/day3_stream_site/assets/fareeha.jpg" alt="Animal Crossing" />
                      <span className="viewers">1K viewers</span>
                    </div>
                    <div className="stream-info">
                      <div className="stream-profile-avatar">
                        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/525d89ba-6310-4eeb-a522-a34ba67e0c36-profile_image-50x50.png" alt="fareeha" />
                      </div>
                      <div className="stream-text">
                        <p className="stream-title">
                          gone mad with power
                        </p>
                        <p className="stream-host">Fareeha</p>
                        <p className="stream-game">Animal Crossing: New Horizons</p>
                        <div className="game-categories">
                          <span>English</span>
                          <span>LGBTQIA+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider">
                <div className="bara" />
                <div className="show-more">
                  Show more <i className="fa fa-chevron-down" />
                </div>
                <div className="bara" />
              </div>
                
             
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home