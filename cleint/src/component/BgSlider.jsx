import React, { useState } from 'react'
import { assets } from '../assets/assets'

function BgSlider() {
    const  [sliderPositon,setSliderPosition]=useState(50)
    const handelSliderPositon=(e)=>{
        setSliderPosition(e.target.value)
    }
  return (
    <div className=' pb-10 md:py-20 mx-2'>
      <h1 className=' mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Remove Background With High <br /> Quality and Accuracy</h1>
      <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl'>
        <img src={assets.image_w_bg } style={{clipPath:`inset(0 ${100.2-sliderPositon}% 0 0)`}} alt="" />
        {/* foreground bg */}
        <img className=' absolute top-0 left-0 w-full h-full' src={assets.image_wo_bg} style={ {clipPath:`inset(0  0 0 ${sliderPositon}%)`}} alt="" />
        <input className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider' type="range" min={0} max={100} value={sliderPositon} onChange={handelSliderPositon}/>
      </div>
    </div>
  )
}

export default BgSlider
