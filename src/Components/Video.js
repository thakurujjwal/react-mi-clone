import React from 'react'
import VideoCard from './VideoCard.js'
import '../Style/Video.css'


const Video = ({videos}) => {
    return (
        <div className='video'>
            {
                videos.map((item,index)=>(
                <VideoCard key={item.image} name={item.name} image={item.image} index={index}/>
         ))   }
            
        </div>
    )
}

export default Video
