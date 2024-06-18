import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
    return (
        <div className='header flex justify-between items-center p-[10px]'>
            <div className='flex'>
                <MenuIcon/>
                <img className='header__logo h-[25px] px-5' src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg' alt='youtube logo'></img>
            </div>
            <div className='border-2 rounded-full flex w-2/5'>
                <input className='rounded-l-full p-2 border-r-2 text-l px-4 w-full focus:border-blue-700' type='text' placeholder='Search' />
                 <span className='bg-[#aaa] rounded-r-full w-16 items-center flex justify-center'><SearchIcon/></span>
                



            </div>
            <div>
                <VideoCallIcon />
                <AppsIcon />
                <NotificationsIcon />
            </div>
        </div>

    )
}

export default Header