import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SidebarRow from './SidebarRow'

function SideBar() {
  return (
    <div className='basis-1/5 ' >
        <SidebarRow selected title='Home' Icon={HomeIcon}/>
        <SidebarRow title='Trending' Icon={WhatshotIcon}/>
        <SidebarRow title='Subscription' Icon={SubscriptionsIcon}/>
        <hr className='h-[2px] bg-[#D3D3D3] my-5 '/>
        <SidebarRow title='Library' Icon={VideoLibraryIcon}/>
        <SidebarRow title='History' Icon={HistoryIcon}/>
        <SidebarRow title='Your videos' Icon={OndemandVideoIcon}/>
        <SidebarRow title='Watch Later' Icon={WatchLaterIcon}/>
        <SidebarRow title='Liked videos' Icon={ThumbUpOffAltIcon}/>
        <SidebarRow title='Show more' Icon={ExpandMoreIcon}/>
    </div>
  )
}

export default SideBar