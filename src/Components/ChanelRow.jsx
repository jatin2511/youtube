import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';

function ChanelRow({logo,name,subs,verified,description,noofvideos}) {
  return (
    <div className='w-full'> <div className='flex my-6 px-4 items-center w-full xl:pr-20'>
       <div className='h-full w-[270px] flex justify-center'>
        <img className='h-[136px] w-[136px] ' src={logo}/>
        </div> 
        <div className='pl-4'>
            <div>{name} {verified && <VerifiedIcon className='text-blue-700'/>}</div>
           <div>{subs} subscribers ・ {noofvideos} videos</div>  
           <div >{description}</div>
        </div>
        <div className='px-8'>
            <button className='bg-black text-white h-10 px-4 text-lg rounded-full font-medium hidden md:inline-block'>Subscribe</button>
        </div>
       
    </div>
    <hr className=' border-[1px]'/>
    </div>
   
  )
}

export default ChanelRow