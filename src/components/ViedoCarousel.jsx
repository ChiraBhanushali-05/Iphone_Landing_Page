
import { useEffect, useRef, useState } from 'react'
import {hightlightsSlides} from '../constants'
import gsap from 'gsap'
const VideoCarousel = () => {
    const viedoRef=useRef([])
    const viedoSpanRef=useRef([])
    const viedoDivRef=useRef([])
    const [viedo,setVideo]=useState({
        isEnd:false,
        startPlay:false,
        videoId:0,
        isLastVideo:false,
        isPlaying:false,



    })
    const{isEnd,isLastVideo,startPlay,videoId,isPlaying}=viedo
    useEffect(()=>{
            const currentProgress=0;
            let span=viedoSpanRef.current;
            if(span[videoId]){
                // animate the progres of video
                let anim=gsap.to(span[videoId],{onUpdate:()=>{

                },
                onComplete:()=>{
                    
                }
            })

            }

    },[videoId,startPlay])
  return (
    <>
    <div className='flex items-center'>
        {hightlightsSlides.map((list) => (
            <div key={list.id} id="slider" className='sm:pr-20 pr-10'>
                <div className="video-carousel_container">
                    <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black '>
                        <video id='VIDEO'
                        playsInline={true}
                        preload='auto'
                        muted 
                        >
                            <source src={list.video} type='video/mp4' />
                        </video>
                        </div>
                        <div className='absolute top-12 left-[5%] z-10'>
                        {list.textLists.map((text)=>(
                            <p key={text} className='md:text-xl font-medium'>{text}</p>


                        ))}

                </div>
            </div>
            </div>
            
        ))}

    
    </div>
    </>
  )
}

export default VideoCarousel