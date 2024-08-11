import React, { useRef, useState } from 'react'
import { highlightFirstVideo } from '../utils'

const Banner = () => {

const videoRef = useRef();


  return (
    <div className='flex m-auto justify-center items-center w-[70vw] h-[40vh] rounded-full'>
        <video playsInline muted ref={videoRef} autoPlay>
        <source src={highlightFirstVideo} preload type='video/mp4'  />
        </video>
    </div>
  )
}

export default Banner
