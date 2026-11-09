import { useEffect, useState} from "react";

const Scroll = () => {
    const [scroll,setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const totalHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrollPosition = window.scrollY;

        const progress = (scrollPosition / totalHeight) * 100;
        setScroll(progress);
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
  <div className="fixed top-0 left-0 w-full z-50">
    {/* Progress Bar */}
    <div className="relative w-full h-4 overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 bg-amber-500 transition-all duration-100"
        style={{ width: `${scroll}%` }}
      />
      <div className="absolute inset-0 flex justify-between items-end px-1">
        {[...Array(81)].map((_, i) => (
          <div
            key={i}
            className={`w-1 bg-amber-500 ${i % 10 === 0 ? "h-4" : i % 5 === 0 ? "h-2" : "h-2"}`}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-500" />
    </div>

    {/* Navbar */}
    <div className="w-full bg-white/80 backdrop-blur-sm">
      <div className='flex flex-row justify-evenly p-2 m-0'>
          <div className='navhead'>
              <div className="nav">Devank</div>
          </div>
          <div className='navhead'>
              <div className='nav'>About</div>
              <div className='nav'>Skills</div>
              <div className='nav'>Experience</div>
              <div className='nav'>Project</div>
              <div className='nav'>Achievements</div>
          </div>
          <div className='navhead'>
              <div className='nav'>Contact</div>
              <div className='nav'>Resume</div>
          </div>
          <div className='navhead'>
              <div className='nav'><a href="mailto:devankkansal15@gmail.com">✉ devankkansal15@gmail.com</a></div>
          </div>
      </div>
    </div>
  </div>
);
};

export default Scroll;