import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/EYE.png" alt="Optipredict" />
            </div>
            <div className="text-content">
              <h2>
               Optipredict: An Innovative EYE health Monitoring System
              </h2>
              <p className="text-white-50 md:text-xl">
              <a href="https://github.com/palash27114/Optipredict.git">Link</a><br />
                Patented | sponsored by erfinden
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/Ayur.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Heart Disease Diagnosis and Diet Recommendation System Using Ayurvedic Dosha Analysis </h2>
              <p className="text-white-50 md:text-xl">
              <a href="https://publications.eai.eu/index.php/IoT/article/view/6016">Link</a><br />
                Patented | Sponsored By VitPune
              </p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="./images/Bus.jpg" alt="Bus" />
              </div>
              <h2>Bus Passenger Counting and Monitoring System</h2>
              <p className="text-white-50 md:text-xl">
              <a href="https://github.com/palash27114/ISA-Ingenious-Hackathon.git">Link</a><br />
                Role:Team Lead | Sponsored By DSSWORLD
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;