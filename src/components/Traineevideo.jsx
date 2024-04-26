import React from 'react'
import Navbar from './Navbar'

const Traineevideo = () => {
  return (
    <div>
      <Navbar/>
      <div className="div py-5">
        <h1 className='text-3xl font-voyage text-center'>Video Related </h1>
        <div className="div flex gap-10 px-10 py-10 ">
          <div className="div">

          <iframe 
       width="460" 
       height="280" 
        src="https://www.youtube.com/embed/1ztIKVJq544" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>
          </div>
          <div className="div">

      <iframe 
      width="460" 
      height="280" 
        src="https://www.youtube.com/embed/b-bt6wzKU0I" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>
          </div>
          <div className="div">
          <iframe 
         width="460" 
         height="280" 
        src="https://www.youtube.com/embed/BAbTw_FaIS8" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Traineevideo