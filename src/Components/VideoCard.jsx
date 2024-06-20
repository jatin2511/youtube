import React from 'react'

function VideoCard({ thumbnail, title, chanel, chanellogo, views, timestamp }) {
  return (
    <div className='sm:w-[60vw] md:w-[33vw] lg:w-[24vw]  xl:w-[20vw] xs:w-[50vw]   m-2 mb-10'>
      <img className='xl:h-2/3 h-3/5 w-full rounded-xl' src={thumbnail}></img>
      <div className='flex pt-3 gap-3'>
        <img className='h-10 md:h-8' src={chanellogo}></img>
        <div className='flex flex-col'> 
          <p className='text-base font-semibold'>{title}</p>
          <p>{chanel}</p>
          <p>{views} views · {timestamp}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard