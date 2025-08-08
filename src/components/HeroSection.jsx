import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { motion, useInView } from "framer-motion";

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
  const isInView = useInView(ref, { once: true, amount: 0.5 });

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
      className={`relative mt-16 flex min-h-[73vh] items-center justify-center bg-black md:mt-24 ${
        menuOpen ? "backdrop-blur-sm" : ""
      }`}
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
      ref={ref}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-yellow-400/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto flex flex-col items-center px-4 md:flex-row md:items-center md:justify-center md:gap-52 md:px-6">
        {/* Card-Style Content Container */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="group order-2 w-full md:order-1 md:w-[600px]"
        >
          <div className="card h-full w-full">
            <div className="card-info">
              <motion.div
                initial={{ y: 20 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="relative z-10 h-full p-6 md:p-8"
              >
                {/* Decorative elements inside card */}
                <div className="absolute inset-0 rounded-xl bg-[url('/public/images/dot-pattern.svg')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-yellow-400/5 blur-3xl"></div>

                <motion.h2
                  whileHover={{ x: 5 }}
                  className="mb-3 text-lg font-medium tracking-widest text-gray-200 md:text-xl"
                >
                  HI, I&#39;M MIKIAS!
                </motion.h2>

                <motion.h1
                  whileHover={{ x: 5 }}
                  className="mb-5 text-3xl font-bold text-white md:mb-7 md:text-4xl"
                >
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                    {displayed}
                  </span>
                  <span className="blink-cursor text-yellow-400">|</span>
                </motion.h1>

                <motion.p
                  whileHover={{ x: 5 }}
                  className="mb-7 text-base leading-relaxed text-gray-300 md:mb-9 md:text-lg"
                >
                  I&#39;m a passionate full-stack developer with a mission to
                  create robust and scalable web applications. With expertise in
                  both frontend and backend technologies, I specialize in
                  building complete digital solutions that deliver exceptional
                  user experiences.
                </motion.p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="w-full rounded-[12px] bg-gradient-to-r from-yellow-400 to-yellow-300 px-6 py-3 font-semibold text-black shadow-lg transition-all hover:shadow-xl sm:w-auto sm:px-8">
                      DOWNLOAD CV
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full rounded-[12px] border-yellow-400 px-6 py-3 font-semibold text-yellow-400 transition-all hover:bg-yellow-400 hover:text-black hover:shadow-xl sm:w-auto sm:px-8"
                    >
                      WATCH THE VIDEO
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Hexagon Frame with Animated Border */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
          className="order-1 w-full md:order-2 md:w-auto"
        >
          <div
            className="hex-frame"
            style={{ width: "350px", height: "400px" }}
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
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, type: "spring" }}
                src="/src/images/cropped_circle_image.png"
                alt="Mikias Profile"
                className="hex-image"
              />
              <div className="hex-overlay"></div>

              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="hex-particle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView
                      ? {
                          opacity: [0, 0.6, 0],
                          y: [-10, Math.random() * 40 - 20],
                          x: Math.random() * 40 - 20,
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
        /* Hexagon Frame Styles */
        .hex-frame {
          position: relative;
          width: 100%;
          height: 100%;
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
          transition: all 0.5s ease;
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
          top: 3px;
          left: 3px;
          right: 3px;
          bottom: 3px;
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
          transition: all 0.5s ease;
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
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(234, 179, 8, 0.7);
        }

        /* Hover Effects */
        .hex-frame:hover .hex-layer-1,
        .hex-frame:hover .hex-layer-2 {
          opacity: 0;
        }

        .hex-frame:hover {
          transform: translateY(-5px);
          filter: drop-shadow(0 10px 20px rgba(246, 211, 101, 0.3));
        }

        /* Content Card Styles */
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
          transition: all 0.5s ease;
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
          padding: 1.5rem;
          transition: all 0.3s ease;
        }
        .card:hover::before,
        .card:hover::after {
          opacity: 0;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(246, 211, 101, 0.2);
        }

        /* Hexagon Card Styles */
        .hex-card-container {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 8px;
        }

        .hex-card {
          --background: linear-gradient(to right, #f6d365 0%, #fda085 100%);
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
        }

        .hex-card::before,
        .hex-card::after {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          z-index: -1;
          transition: all 0.5s ease;
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
        }

        .hex-card::before {
          background: linear-gradient(
            to bottom right,
            #f6d365 0%,
            #fda085 100%
          );
          transform: rotate(2deg);
        }

        .hex-card::after {
          background: linear-gradient(to top right, #84fab0 0%, #8fd3f4 100%);
          transform: rotate(-2deg);
        }

        .hex-card-info {
          background: #111827;
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
          overflow: hidden;
        }

        .hex-card:hover::before,
        .hex-card:hover::after {
          opacity: 0;
        }

        .hex-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(246, 211, 101, 0.2);
        }
      `}</style>
    </section>
  );
};

HeroSection.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
};

export default HeroSection;
