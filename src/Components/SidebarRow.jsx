import React from 'react'
import './Sidebarrow.css'

function SidebarRow({selected,title,Icon}) {
  return (

    <div className={`sidebar_row px-4 py-2 cursor-pointer flex gap-3 md:text-xl hover:bg-[#D3D3D3] ${selected && 'bg-[#D3D3D3]'} `}>
        <Icon className={`sidebar_icon ${selected && 'text-[#FF4500]'}`}/>
        <div className={`flex-1 font-normal sidebar_title ${selected && 'font-semibold'}`}>{title}</div>
    </div>
  )
}

export default SidebarRow