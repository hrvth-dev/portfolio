import React, {useEffect, useRef} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css"

const Projects = () => {

  const projectRef = useRef(null)



  useEffect(() => {

    gsap.fromTo(
      projectRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 80%",
          end: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );

    ScrollTrigger.refresh();

  },[]);








  return (
    <div ref={projectRef}>

<h2 className="text-3xl font-bold text-center  text-white py-6" id='projects'>Projektek</h2>

<div className='flex flex-col md:flex-row md:justify-center md:items-center'>

<div class="max-w-sm rounded-lg py-6 bg-grey border-2 border-solid overflow-hidden shadow-lg mx-auto m-6 ">
  <div class="px-6 py-4 ">
    <div class="font-bold text-xl mb-2 text-white text-center">Fejlesztés alatt.</div>
    <hr />
    <p class="text-gray-700 text-white py-6 text-center">
    404
    </p>
    <hr />
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#undefined</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#undefined</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#undefined</span>
  </div>
</div>




<div class="max-w-sm rounded-lg py-6 bg-grey  border-2 border-solid overflow-hidden shadow-lg mx-auto m-6">
  <div class="px-6 py-4 ">
    <div class="font-bold text-xl mb-2 text-white text-center">Fejlesztés alatt.</div>
    <hr />
    <p class="text-gray-700 text-white py-6 text-center">
    404
    </p>
    <hr />
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#undefined</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#undefined</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#undefined</span>
  </div>
</div>





<div class="max-w-sm rounded-lg py-6 bg-grey  border-2 border-solid overflow-hidden shadow-lg mx-auto m-6">
  <div class="px-6 py-4 ">
    <div class="font-bold text-xl mb-2 text-white text-center">Fejlesztés alatt.</div>
    <hr />
    <p class="text-gray-700 text-white py-6 text-center">
    404
    </p>
    <hr />
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#undefined</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#undefined</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#undefined</span>
  </div>
</div>



</div>





    </div>
  )
}

export default Projects