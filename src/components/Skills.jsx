import React, { useEffect, useState, useRef} from 'react';
import '../App.css';
import { skillData } from './SkillData';  // Az importot javítottam
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const skillRef = useRef(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === skillData.length - 2 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? skillData.length - 2 : prevIndex - 1
    );
  };


  useEffect(() => {

    gsap.fromTo(
      skillRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: skillRef.current,
          start: "top 80%",
          end: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );

    ScrollTrigger.refresh();

  },[]);


  return (
    <div
    className="max-w-6xl mx-auto px-4 py-12 m-16"
    id="skills"
    ref={skillRef}
  >
    <h2 className="text-3xl font-bold text-center mb-8 text-white">Technológiák</h2>

    <div className="relative">
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/50 p-2 rounded-full transition-all bg-white"
      >
        <ChevronLeft size={24} />
      </button>

      <div className="overflow-hidden mx-12">
        <div
          className="flex transition-transform duration-300 ease-in-out gap-8"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {skillData.map((skill, index) => {
            return (
              <div
                key={index}
                className="flex-none w-1/3 flex flex-col items-center p-6 rounded-lg transition-all bg-black"
                id="cardContainer"
              >
                <div className="text-6xl mb-4">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-16 h-16 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/50 p-2 rounded-full transition-all bg-white"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  </div>
  );
};

export default Skills;


