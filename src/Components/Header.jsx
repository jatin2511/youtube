import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';

function Header() {
    const [InputSearch,setInputSearch]=useState('');
    return (
        <div className='header flex justify-between items-center p-[10px] sticky top-0 bg-white'>
            <div className='flex'>
                <MenuIcon/>
                <Link to='/'> 
                <img className='header__logo h-[25px] px-5' src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg' alt='youtube logo'></img>
                </Link>
            </div>
            <div className='border-2 rounded-full flex w-2/5'>
                <input value={InputSearch} onChange={(e)=>{setInputSearch(e.target.value)}} className='rounded-l-full p-2 border-r-2 text-l px-4 w-full focus:border-blue-700' type='text' placeholder='Search' />
                 <Link to={`/search/${InputSearch}`}>
                    <span className='bg-[#aaa] rounded-r-full w-16 h-full items-center flex justify-center'><SearchIcon/></span>
                    </Link>  
            </div>
            <div className='flex  gap-4'>
                <VideoCallIcon />
                <AppsIcon />
                <NotificationsIcon />
            </div>
        </div>

    )
}

export default Header