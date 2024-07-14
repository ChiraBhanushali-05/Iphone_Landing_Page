import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../Utils"
import ViedoCarousel from "./ViedoCarousel"


const Highlights = () => {
  useGSAP(()=>{
    gsap.to("#title",{opacity:1,y:0})
    gsap.to(".link",{opacity:1,y:0,duration:1,stagger:0.25})
  },[]
  )
  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
    <div className="screen-max-width">
      <div className="mb-12 w-full md:flex items-end justify-between ">
      <h1 id="title" className="section-heading">Get the highlights.</h1>
      <div  className="flex flex-wrap items-end gap-5">
      <p className="link">Watch the film
      <img
      alt="watch"
      className="ml-2" 
      src={watchImg}></img>
      </p>
      <p className="link">Watch the event
      <img
      alt="right"
      className="ml-2" 
      src={rightImg}></img>
      </p>

      </div>
      </div>

      <ViedoCarousel/>
    </div>

    </section>
  )
}

export default Highlights