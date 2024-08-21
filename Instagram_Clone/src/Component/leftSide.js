import './leftSide.css';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import profileImg from '../assets/profile.jpg'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import instagramLogo from '../assets/instagramLogo.png';

const LeftSide = () => {
  return (
   <div className="leftSidePart">
    <div className="logoPart">
        <img className='logoImg'src={instagramLogo} alt='Instagram'/>
    </div>
    <div className="navLinkPart">
        <div className="navLink">
            <HomeIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
            <div className="navName">Home</div>  
        </div>
        <div className="navLink">
            <SearchIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
            <div className="navName">Search</div>  
        </div>
        <div className="navLink">
            <ExploreOutlinedIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
            <div className="navName">Explore</div>  
        </div>
        <div className="navLink">
            <OndemandVideoIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
            <div className="navName">Reels</div>  
        </div>
        <div className="navLink">
            <EmailOutlinedIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
            <div className="navName">Messages</div>  
        </div>
        <div className="navLink">
            <FavoriteBorderOutlinedIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
            <div className="navName">Notification</div>  
        </div>
        <div className="navLink">
            <AddBoxOutlinedIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
            <div className="navName">Create</div>  
        </div>
        <div className="navLink">
            <img className='profileImg'src={profileImg} alt='profile Image'/>
            <div className="navName">Profile</div>  
        </div>
        <div className="belowPart">

        <div className="navLink">
            <AlternateEmailRoundedIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
            <div className="navName">Threads</div>  
            </div>
            <div className="navLink">
            <MenuIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
            <div className="navName">More</div>  
       

        </div>
        </div>

    </div>
   </div>
    


  )
}

export default LeftSide

