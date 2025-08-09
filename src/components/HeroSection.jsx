import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { motion, useInView } from "framer-motion";
import profileImage from "../../src/images/cropped_circle_image.png";

const roles = [
  "A FREELANCER",
  "A WEB DESIGNER",
  "A FULL-STACK DEVELOPER",
  "MIKIAS DEREJE",
];

const HeroSection = ({ menuOpen }) => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [removing, setRemoving] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Reduced threshold for mobile

  useEffect(() => {
    let timeout;
    const currentRole = roles[index];

    if (!removing && displayed.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length + 1));
      }, 100);
    } else if (!removing && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setRemoving(true), 1200);
    } else if (removing && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length - 1));
      }, 50);
    } else if (removing && displayed.length === 0) {
      timeout = setTimeout(() => {
        setRemoving(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }, 300);
    }
    return () => clearTimeout(timeout);
  }, [displayed, removing, index]);

  return (
    <section
      className={`relative mt-16 flex min-h-[80vh] items-center justify-center bg-black md:mt-24 ${
        menuOpen ? "backdrop-blur-sm" : ""
      }`}
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
      ref={ref}
    >
      {/* Background decorative elements - Simplified for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-yellow-400/10 blur-xl md:h-64 md:w-64 md:blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-yellow-400/5 blur-xl md:h-64 md:w-64 md:blur-3xl"></div>
      </div>

      <div className="container mx-auto flex flex-col items-center px-4 md:flex-row md:items-center md:justify-center md:gap-52 md:px-6">
        {/* Content Container - Mobile first approach */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, type: "spring" }}
          className="order-2 w-full md:order-1 md:w-[600px]"
        >
          <div className="card h-full w-full">
            <div className="card-info">
              <motion.div
                initial={{ y: 20 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="relative z-10 h-full p-4 sm:p-6 md:p-8"
              >
                {/* Simplified decorative elements for mobile */}
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-yellow-400/10 blur-xl md:h-40 md:w-40 md:blur-3xl"></div>
                <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-yellow-400/5 blur-xl md:h-40 md:w-40 md:blur-3xl"></div>

                <motion.h2
                  whileHover={{ x: 5 }}
                  className="mb-2 text-sm font-medium tracking-widest text-gray-200 sm:text-base md:mb-3 md:text-xl"
                >
                  HI, I&#39;M MIKIAS!
                </motion.h2>

                <motion.h1
                  whileHover={{ x: 5 }}
                  className="mb-3 text-2xl font-bold text-white sm:text-3xl md:mb-5 md:text-4xl"
                >
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                    {displayed}
                  </span>
                  <span className="blink-cursor text-yellow-400">|</span>
                </motion.h1>

                <motion.p
                  whileHover={{ x: 5 }}
                  className="mb-4 text-sm leading-relaxed text-gray-300 sm:text-base md:mb-7 md:text-lg"
                >
                  I&#39;m a passionate full-stack developer with a mission to
                  create robust and scalable web applications.
                </motion.p>

                {/* Stack buttons vertically on mobile */}
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="w-full rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-300 px-4 py-2 text-sm font-semibold text-black shadow-lg transition-all hover:shadow-xl sm:px-6 sm:py-3 sm:text-base">
                      DOWNLOAD CV
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full rounded-lg border-yellow-400 px-4 py-2 text-sm font-semibold text-yellow-400 transition-all hover:bg-yellow-400 hover:text-black hover:shadow-xl sm:px-6 sm:py-3 sm:text-base"
                    >
                      WATCH VIDEO
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Hexagon Frame - Responsive sizing */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
          className="order-1 mb-8 w-full max-w-[280px] md:order-2 md:mb-0 md:max-w-[350px]"
        >
          <div
            className="hex-frame mx-auto"
            style={{ width: "100%", height: "320px" }}
          >
            {/* Border Layers */}
            <div className="hex-border-layer hex-layer-1"></div>
            <div className="hex-border-layer hex-layer-2"></div>
            <div className="hex-border-layer hex-layer-3"></div>

            {/* Content Area */}
            <div className="hex-content">
              <motion.img
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : {}}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                src={profileImage}
                alt="Mikias Profile"
                className="hex-image"
              />
              <div className="hex-overlay"></div>

              {/* Reduced particles on mobile */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="hex-particle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView
                      ? {
                          opacity: [0, 0.6, 0],
                          y: [-10, Math.random() * 30 - 15],
                          x: Math.random() * 30 - 15,
                          transition: {
                            duration: 4 + Math.random() * 4,
                            delay: 0.5 + i * 0.2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          },
                        }
                      : {}
                  }
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        /* Responsive Hexagon Frame Styles */
        .hex-frame {
          position: relative;
          width: 100%;
          height: 100%;
          max-width: 300px;
          margin: 0 auto;
        }

        .hex-border-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
          transition: all 0.3s ease;
        }

        .hex-layer-1 {
          background: linear-gradient(45deg, #f6d365 0%, #fda085 100%);
          transform: rotate(2deg);
          z-index: 1;
        }

        .hex-layer-2 {
          background: linear-gradient(-45deg, #84fab0 0%, #8fd3f4 100%);
          transform: rotate(-2deg);
          z-index: 2;
        }

        .hex-layer-3 {
          background: linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%);
          z-index: 3;
        }

        .hex-content {
          position: absolute;
          top: 2px;
          left: 2px;
          right: 2px;
          bottom: 2px;
          background: #111827;
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
          z-index: 4;
          overflow: hidden;
        }

        .hex-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: all 0.3s ease;
        }

        .hex-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.3) 50%,
            transparent 100%
          );
        }

        .hex-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(234, 179, 8, 0.7);
        }

        /* Simplified hover effects for mobile */
        @media (hover: hover) {
          .hex-frame:hover .hex-layer-1,
          .hex-frame:hover .hex-layer-2 {
            opacity: 0;
          }

          .hex-frame:hover {
            transform: translateY(-5px);
            filter: drop-shadow(0 10px 20px rgba(246, 211, 101, 0.3));
          }
        }

        /* Responsive Card Styles */
        .card {
          --background: linear-gradient(to right, #f6d365 0%, #fda085 100%);
          width: 100%;
          height: 100%;
          padding: 2px;
          border-radius: 1rem;
          overflow: visible;
          background: var(--background);
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .card::before,
        .card::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          z-index: -1;
          transition: all 0.3s ease;
        }

        .card::before {
          background: linear-gradient(
            to bottom right,
            #f6d365 0%,
            #fda085 100%
          );
          transform: rotate(2deg);
        }

        .card::after {
          background: linear-gradient(to top right, #84fab0 0%, #8fd3f4 100%);
          transform: rotate(-2deg);
        }

        .card-info {
          background: #111827;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          width: 100%;
          height: 100%;
          overflow: visible;
          border-radius: 0.7rem;
          position: relative;
          z-index: 2;
          padding: 1rem;
          transition: all 0.3s ease;
        }

        @media (hover: hover) {
          .card:hover::before,
          .card:hover::after {
            opacity: 0;
          }

          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(246, 211, 101, 0.2);
          }
        }
      `}</style>
    </section>
  );
};

HeroSection.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
};

export default HeroSection;
