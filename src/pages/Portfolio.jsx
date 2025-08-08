import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const Portfolio = () => {
  const [titleRef, titleInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [projectsRef, projectsInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [showNotification, setShowNotification] = useState(false);
  const [notificationPosition, setNotificationPosition] = useState({
    x: 0,
    y: 0,
  });
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Complete online store with cart, checkout, and admin dashboard",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
      link: "#",
    },
    {
      id: 2,
      title: "Task Manager Pro",
      description: "Productivity app with team collaboration features",
      tags: ["React", "Firebase", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
      link: "#",
    },
    {
      id: 3,
      title: "Weather Forecast",
      description: "Real-time weather data with interactive maps",
      tags: ["JavaScript", "API", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
      link: "#",
    },
    {
      id: 4,
      title: "Social Analytics",
      description: "Dashboard for tracking engagement metrics",
      tags: ["React", "D3.js", "Express"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
      link: "#",
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "Workout logging with progress analytics",
      tags: ["React Native", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
      link: "#",
    },
    {
      id: 6,
      title: "Recipe Generator",
      description: "AI-powered cooking recommendations",
      tags: ["Next.js", "OpenAI", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
      link: "#",
    },
  ];

  const handleProjectInteraction = (e, projectId, isHover = false) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setNotificationPosition({
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY - 150,
    });
    setActiveProject(projectId);
    setShowNotification(true);

    if (!isHover) {
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  return (
    <section className="relative overflow-hidden py-32" id="portfolio">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>

      {/* Animated Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10"
      ></motion.div>

      {/* Decorative elements */}
      <div className="absolute left-0 top-0 z-10 h-1 w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-20"></div>
      <div className="absolute -right-20 -top-20 z-0 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl"></div>
      <div className="absolute -left-20 bottom-0 z-0 h-64 w-64 rounded-full bg-yellow-400/5 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl font-bold text-white md:text-6xl">
            My <span className="text-yellow-400">Portfolio</span>
          </h1>
          <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-300"></div>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-400">
            Explore my featured projects and case studies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={projectsRef}
          initial={{ opacity: 0 }}
          animate={projectsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card h-[380px] w-full overflow-visible"
            >
              <div className="content transform-style-preserve-3d hover:rotate-y-180 h-full w-full transition-transform duration-300 ease-in-out">
                {/* Front of Card */}
                <div className="front backface-visibility-hidden rotate-y-180 absolute h-full w-full overflow-hidden rounded-xl bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img absolute h-full w-full object-cover object-center"
                  />
                  <div className="front-content absolute flex h-full w-full flex-col justify-between p-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={
                            projectsInView ? { opacity: 1, scale: 1 } : {}
                          }
                          transition={{
                            delay: 0.5 + index * 0.1 + tagIndex * 0.05,
                          }}
                          className="badge rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-yellow-400 backdrop-blur-sm"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    <div className="description">
                      <div className="title mb-2 flex items-center justify-between">
                        <h3 className="text-lg font-bold text-white">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-300">
                        {project.description}
                      </p>
                      <div className="card-footer mt-3 text-xs text-yellow-400/80">
                        Hover to view details
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="back backface-visibility-hidden absolute h-full w-full overflow-hidden rounded-xl bg-gray-900">
                  <div className="absolute flex h-full w-full items-center justify-center overflow-hidden">
                    <div className="animate-rotation-5000 absolute h-[160%] w-[160px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                  </div>
                  <div className="back-content absolute flex h-[99%] w-[99%] flex-col items-center justify-center gap-6 rounded-xl bg-gray-900 p-6 text-white">
                    <h3 className="text-xl font-bold text-yellow-400">
                      {project.title}
                    </h3>
                    <p className="text-center text-gray-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-gray-800 px-3 py-1 text-xs text-yellow-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.a
                      href="#"
                      onClick={(e) => handleProjectInteraction(e, project.id)}
                      onMouseEnter={(e) =>
                        handleProjectInteraction(e, project.id, true)
                      }
                      onMouseLeave={() => setShowNotification(false)}
                      className="mt-4 flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-2 font-medium text-black"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Floating circles */}
              <div className="absolute -z-10">
                <div className="circle animate-floating h-[90px] w-[90px] rounded-full bg-yellow-300 blur-[15px]"></div>
                <div
                  id="bottom"
                  className="circle animate-floating animation-delay-[-800ms] absolute left-[50px] top-0 h-[150px] w-[150px] rounded-full bg-yellow-400 blur-[15px]"
                ></div>
                <div
                  id="right"
                  className="circle animate-floating animation-delay-[-1800ms] absolute left-[160px] top-[-80px] h-[30px] w-[30px] rounded-full bg-red-500 blur-[15px]"
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 20px rgba(234, 179, 8, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 px-8 py-3 text-lg font-bold text-black shadow-lg transition-all"
          >
            View Complete Portfolio
          </motion.button>
        </motion.div>
      </div>

      {/* Notification Popup */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed z-50"
            style={{
              left: `${notificationPosition.x}px`,
              top: `${notificationPosition.y}px`,
              transform: "translateX(-50%)",
            }}
          >
            <div className="container flex h-[120px] w-[460px] items-center rounded-lg bg-white shadow-lg transition-all duration-300 hover:w-[220px] hover:scale-105">
              <div className="left-side flex h-[120px] w-[130px] flex-shrink-0 items-center justify-center overflow-hidden rounded-md bg-green-400 transition-all duration-300">
                <div className="card absolute z-10 flex h-[46px] w-[70px] flex-col items-center rounded-md bg-green-100 shadow-md">
                  <div className="buttons -ml-[30px] mt-[10px] h-[8px] w-[8px] rotate-90 rounded-full bg-green-700 shadow-[0_-10px_0_0_#26850e,0_10px_0_0_#56be3e]"></div>
                  <div className="card-line mt-[7px] h-[13px] w-[65px] rounded-sm bg-green-300"></div>
                </div>
                <div className="post absolute bottom-[10px] z-[11] h-[75px] w-[63px] overflow-hidden rounded-md bg-gray-200">
                  <div className="post-line absolute right-[8px] top-[8px] h-[9px] w-[47px] rounded-b-sm bg-gray-600 before:absolute before:top-[-8px] before:h-[9px] before:w-[47px] before:bg-gray-500"></div>
                  <div className="screen absolute right-[8px] top-[22px] h-[23px] w-[47px] rounded-sm bg-white"></div>
                  <div className="numbers absolute left-[25px] top-[52px] h-[12px] w-[12px] rotate-90 rounded-sm bg-gray-500 shadow-[0_-18px_0_0_#838183,0_18px_0_0_#838183]"></div>
                  <div className="numbers-line2 absolute left-[25px] top-[68px] h-[12px] w-[12px] rotate-90 rounded-sm bg-gray-400 shadow-[0_-18px_0_0_#aaa9ab,0_18px_0_0_#aaa9ab]"></div>
                </div>
                <span className="dollar absolute text-center text-lg font-medium text-green-700">
                  $
                </span>
              </div>
              <div className="right-side flex h-full w-[calc(100%-130px)] items-center justify-between overflow-hidden whitespace-nowrap transition-all duration-300 hover:bg-gray-100">
                <span className="new ml-5 font-sans text-xl font-medium">
                  {activeProject
                    ? `"${projects.find((p) => p.id === activeProject)?.title}" in progress`
                    : "Project in progress"}
                </span>
                <svg
                  className="arrow mr-5 h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 7L15 12L10 17"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-visibility-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .hover:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
        @keyframes rotation_481 {
          0% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }
        .animate-rotation-5000 {
          animation: rotation_481 5000ms infinite linear;
        }
        @keyframes floating {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-floating {
          animation: floating 2600ms infinite linear;
        }
        .animation-delay-[-800ms] {
          animation-delay: -800ms;
        }
        .animation-delay-[-1800ms] {
          animation-delay: -1800ms;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
