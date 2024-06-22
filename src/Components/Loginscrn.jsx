import React, { useEffect } from 'react'

function Loginscrn({setheadervisibility}) {
   useEffect(()=>{
    setheadervisibility(false)
    return ()=>{
        setheadervisibility(true)
    }
   },[])
  return (
    <div>login screen</div>
  )
}

export default Loginscrn