import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VerifiedIcon from '@mui/icons-material/Verified';

function VideoRow({thumbnail,title,views,timestamp,chanel ,chanellogo,verified,description}) {
  return (
    <div className='flex gap-6 mx-4 max-h-50 my-4 xl:mr-40 justify-start'>
        <div className=' flex items-center justify-center'>
            <img className='rounded-xl xl:h-[250px]' src={thumbnail}></img>
        </div>
        <div>
            <div className='flex justify-between'>
                <p className='text-xl font-medium '>{title}</p>
                <span><MoreVertIcon/></span>
            </div>
            <div className='text-sm'>{views} ・ {timestamp}</div>
          <div className='flex justify-start py-6 gap-2'>
            <img className='h-8' src={chanellogo}></img>
            <p>{chanel} {verified && <VerifiedIcon/>}</p>
          </div>
          <div className='text-sm'>{description}</div>
        </div>
    </div>
  )
}

export default VideoRow