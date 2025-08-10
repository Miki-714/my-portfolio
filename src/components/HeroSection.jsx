import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { motion, useInView } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import profileImage from "../images/cropped_circle_image.png";

// Using CDN as the most reliable solution
pdfjs.GlobalWorkerOptions.workerSrc = `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const roles = [
  "A FREELANCER",
  "A WEB DESIGNER",
  "A FULL-STACK DEVELOPER",
  "MIKIAS DEREJE",
];

const HeroSection = ({ menuOpen }) => {
  // Typing animation states
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [removing, setRemoving] = useState(false);

  // PDF viewer states
  const [numPages, setNumPages] = useState(null);
  const [isPDFOpen, setIsPDFOpen] = useState(false);
  const [pdfError, setPdfError] = useState(null);
  const [pdfWidth, setPdfWidth] = useState(800);

  // Refs
  const ref = useRef(null);
  const pdfWrapperRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Typing effect
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

  // Set PDF width based on container
  useEffect(() => {
    if (isPDFOpen && pdfWrapperRef.current) {
      const updateWidth = () => {
        const newWidth = Math.min(pdfWrapperRef.current.clientWidth - 40, 800);
        setPdfWidth(newWidth);
      };

      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }
  }, [isPDFOpen]);

  // PDF handling - points to public folder
  const pdfFile = "/Mikias_Dereje_CV.pdf";

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPdfError(null);
  };

  const onDocumentLoadError = (error) => {
    console.error("PDF load error:", error);
    setPdfError(
      error.message.includes("MissingPDF")
        ? "PDF file not found. Please ensure 'Mikias_Dereje_CV.pdf' exists in the public folder."
        : "Failed to load PDF. Please try again later.",
    );
  };

  const handleViewCV = () => {
    setIsPDFOpen(!isPDFOpen);
    setPdfError(null);
  };

  const handleClosePDF = (e) => {
    e.stopPropagation();
    setIsPDFOpen(false);
  };

  return (
    <section
      className={`relative mt-16 flex min-h-[80vh] items-center justify-center bg-black md:mt-24 ${
        menuOpen ? "backdrop-blur-sm" : ""
      }`}
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
      ref={ref}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-yellow-400/10 blur-xl md:h-64 md:w-64 md:blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-yellow-400/5 blur-xl md:h-64 md:w-64 md:blur-3xl"></div>
      </div>

      <div className="container mx-auto flex flex-col items-center px-4 md:flex-row md:items-center md:justify-center md:gap-52 md:px-6">
        {/* Content Container */}
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

                <div className="flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={handleViewCV}
                      className="w-full min-w-[200px] rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-300 px-6 py-3 text-sm font-semibold text-black shadow-lg transition-all hover:from-yellow-300 hover:to-yellow-400 hover:shadow-xl sm:text-base"
                    >
                      {isPDFOpen ? "CLOSE CV" : "VIEW MY CV"}
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Hexagon Frame */}
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
            <div className="hex-border-layer hex-layer-1"></div>
            <div className="hex-border-layer hex-layer-2"></div>
            <div className="hex-border-layer hex-layer-3"></div>

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

      {/* PDF Viewer Modal */}
      {isPDFOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={handleClosePDF}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-4"
            ref={pdfWrapperRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClosePDF}
              className="absolute right-4 top-4 z-10 rounded-full bg-red-500 p-2 text-white transition-colors hover:bg-red-600"
              aria-label="Close CV"
            >
              ✕
            </button>

            {pdfError ? (
              <div className="flex h-64 flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <p className="mt-2 font-medium">{pdfError}</p>
                </div>
                <div className="flex gap-3">
                  <Button
                    onClick={handleViewCV}
                    className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                  >
                    ↻ Retry
                  </Button>
                  <Button
                    onClick={handleClosePDF}
                    className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
                  >
                    ✕ Close
                  </Button>
                </div>
              </div>
            ) : (
              <Document
                file={pdfFile}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={
                  <div className="flex h-64 flex-col items-center justify-center">
                    <div className="mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-yellow-500"></div>
                    <p>Loading your CV...</p>
                  </div>
                }
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={pdfWidth}
                    className="mb-4 border shadow-sm"
                    loading={
                      <div className="flex h-64 items-center justify-center">
                        <p>Loading page {index + 1}...</p>
                      </div>
                    }
                  />
                ))}
              </Document>
            )}
          </div>
        </div>
      )}

      <style>{`
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

        .blink-cursor {
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          from,
          to {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

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
      `}</style>
    </section>
  );
};

HeroSection.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
};

export default HeroSection;
