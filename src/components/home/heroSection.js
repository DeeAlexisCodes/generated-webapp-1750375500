import React, { useRef, useEffect } from 'react';

const Herosection = () => {
  const visualContainerRef = useRef(null);

  useEffect(() => {
    const visualContainer = visualContainerRef.current;

    // Check for prefers-reduced-motion to conditionally apply parallax effect
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (visualContainer && !prefersReducedMotion) {
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const heroRect = visualContainer.getBoundingClientRect();
        const x = (clientX - heroRect.left - heroRect.width / 2) / (heroRect.width / 2);
        const y = (clientY - heroRect.top - heroRect.height / 2) / (heroRect.height / 2);

        const elements = visualContainer.querySelectorAll('.visual-element');
        elements.forEach(el => {
          const depth = parseFloat(el.getAttribute('data-depth'));
          const moveX = -x * (depth * 25);
          const moveY = -y * (depth * 25);

          // The image-bubble has an initial translate(-50%, -50%) for centering.
          // The parallax movement is added on top of that.
          if (el.classList.contains('image-bubble')) {
            el.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;
          } else {
            el.style.transform = `translate(${moveX}px, ${moveY}px)`;
          }
        });
      };

      visualContainer.addEventListener('mousemove', handleMouseMove);

      return () => {
        visualContainer.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="bg-[#F8F9FA] text-[#121212] font-sans leading-relaxed antialiased overflow-x-hidden">
      <header className="py-4 animate-fade-in">
        <div className="w-full max-w-[1200px] mx-auto px-8 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold no-underline text-[#121212] flex items-center gap-2">
            <span className="text-[#FF6B00]">+</span>
            <span>FrontrowMD</span>
          </a>
        </div>
      </header>

      <main className="py-12">
        <div className="w-full max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 gap-16 items-center md:grid-cols-2 md:text-left">
            <div
              className="text-center animate-fade-in"
              style={{ animationDelay: '0.2s' }} // Inline style for animation delay, assumes 'animate-fade-in' is configured in Tailwind
            >
              <h1 className="text-[clamp(2.5rem,6vw,4.2rem)] font-bold leading-tight mb-4 tracking-[-0.03em]">
                AI-Powered <span className="font-normal text-[#555]">Doctor-Vetted</span> Review Generation
              </h1>
              <p className="text-[clamp(1.1rem,2vw,1.25rem)] max-w-xl mx-auto mb-8 text-[#555] md:mx-0">
                Transform product pages into authentic, clinically-informed reviews that build trust and drive conversions.
              </p>
              <a
                href="product_input.html"
                className="inline-block bg-[#FF6B00] text-white px-8 py-4 rounded-xl no-underline text-lg font-bold transition-all duration-300 shadow-xl hover:bg-[#E66000] hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Get Started
              </a>
            </div>
            <div
              ref={visualContainerRef}
              className="relative hidden md:block min-h-[450px] [perspective:1000px] animate-fade-in"
              style={{ animationDelay: '0.4s' }} // Inline style for animation delay
            >
              <div
                className="visual-element w-[320px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-xl overflow-hidden [will-change:transform] transition-transform duration-200 ease-out"
                data-depth="0.1"
              >
                <img src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="A friendly, professional doctor in a modern setting" className="w-full h-full object-cover" />
              </div>
              <div
                className="visual-element w-20 h-20 bg-white rounded-3xl shadow flex items-center justify-center animate-float [will-change:transform] transition-transform duration-200 ease-out"
                data-depth="0.3"
                style={{ top: '20%', left: '10%', animationDelay: '1s', animationDuration: '5s', animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite' }} // Inline styles for animation properties, assumes 'animate-float' is configured
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-[#FF6B00]">
                  <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>
              <div
                className="visual-element bg-[#EBF5FF] text-[#005A9C] px-4 py-2 rounded-full font-medium shadow [will-change:transform] transition-transform duration-200 ease-out animate-float"
                data-depth="0.4"
                style={{ top: '15%', left: '70%', animationDelay: '0.5s', animationDuration: '4s', animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite' }}
              >
                Evidence-Based
              </div>
              <div
                className="visual-element w-20 h-20 bg-white rounded-3xl shadow flex items-center justify-center animate-float [will-change:transform] transition-transform duration-200 ease-out"
                data-depth="0.2"
                style={{ top: '65%', left: '80%', animationDuration: '5s', animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-[#FF6B00]">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-[#aaa]">
        <div className="w-full max-w-[1200px] mx-auto px-8">
          <p>&copy; 2024 FrontrowMD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Herosection;