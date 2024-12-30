import React, { useState, useEffect } from "react";

function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <header
        className={`w-full z-50 transition-all duration-300  ${isScrolled ? "fixed backdrop-blur-md shadow-lg" : "bg-transparent"
          }`}
      >

        <div className="mx-auto px-4 flex items-center justify-center h-16">

          <nav className="space-x-6 mt-3">
            
            <a
              href="#about"
              className="text-white hover:text-gray-300 transition duration-300 text-lg"
            >
              Rólam
            </a>
            <a
              href="#skills"
              className="text-white hover:text-gray-300 transition duration-300 text-lg"
            >
              Képességeim
            </a>
            <a
              href="#projects"
              className="text-white hover:text-gray-300 transition duration-300 text-lg"
            >
              Projektek
            </a>
          </nav>
        </div>
      </header>
    </>






  )

}

export default Header;