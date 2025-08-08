import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Button from "../components/Button";
import { useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationPosition, setNotificationPosition] = useState({
    x: 0,
    y: 0,
  });
  const [activeProject, setActiveProject] = useState(null);

  const featuredProjects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Modern online store with payment processing and admin dashboard",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity application with team collaboration features",
      tags: ["React", "Firebase", "Tailwind"],
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
    <div className="bg-black">
      <HeroSection />

      {/* Featured Projects Section */}
      <section className="relative overflow-hidden px-6 py-24">
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-yellow-400/5 blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Featured <span className="text-yellow-400">Projects</span>
            </h2>
            <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-300"></div>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-400">
              A selection of my recent work and case studies
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Animated Card Background */}
                <div className="card relative h-full w-full rounded-2xl p-[2px]">
                  <div className="card-info flex flex-col bg-gray-900 p-6">
                    <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mb-6 text-gray-400">{project.description}</p>

                    {/* Tags */}
                    <div className="mb-8 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.05 }}
                          className="rounded-full bg-gray-800/80 px-3 py-1 text-xs font-medium text-yellow-400 backdrop-blur-sm"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <motion.div
                      className="mt-auto"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button
                        variant="outline"
                        className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                        onClick={(e) => handleProjectInteraction(e, project.id)}
                        onMouseEnter={(e) =>
                          handleProjectInteraction(e, project.id, true)
                        }
                        onMouseLeave={() => setShowNotification(false)}
                      >
                        View Case Study
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 px-8 py-4 text-lg font-bold text-black shadow-lg hover:shadow-yellow-400/30"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setNotificationPosition({
                    x: rect.left + window.scrollX,
                    y: rect.top + window.scrollY - 150,
                  });
                  setActiveProject(null);
                  setShowNotification(true);
                  setTimeout(() => setShowNotification(false), 3000);
                }}
              >
                View Full Portfolio
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900/70 via-black to-gray-900/70 px-6 py-32">
        {/* Decorative elements */}
        <div className="absolute left-0 top-0 h-full w-full bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute -top-20 left-1/2 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-7xl text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Ready to <span className="text-yellow-400">Collaborate</span>?
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-300"></div>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-400">
            Whether you have a project in mind or just want to connect, I&#39;d
            love to hear from you.
          </p>
          <h3 className="mb-6">Contact Me +251968187979 </h3>
          <div className="flex justify-center">
            {/* Added this wrapper div */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card />
            </motion.div>
          </div>
        </motion.div>
      </section>

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
              <div className="left-side flex h-[120px] w-[130px] flex-shrink-0 items-center justify-center overflow-hidden rounded-md bg-yellow-400 transition-all duration-300">
                <div className="card absolute z-10 flex h-[46px] w-[70px] flex-col items-center rounded-md bg-yellow-100 shadow-md">
                  <div className="buttons -ml-[30px] mt-[10px] h-[8px] w-[8px] rotate-90 rounded-full bg-yellow-700 shadow-[0_-10px_0_0_#b7790e,0_10px_0_0_#e3b63e]"></div>
                  <div className="card-line mt-[7px] h-[13px] w-[65px] rounded-sm bg-yellow-300"></div>
                </div>
                <div className="post absolute bottom-[10px] z-[11] h-[75px] w-[63px] overflow-hidden rounded-md bg-gray-200">
                  <div className="post-line absolute right-[8px] top-[8px] h-[9px] w-[47px] rounded-b-sm bg-gray-600 before:absolute before:top-[-8px] before:h-[9px] before:w-[47px] before:bg-gray-500"></div>
                  <div className="screen absolute right-[8px] top-[22px] h-[23px] w-[47px] rounded-sm bg-white"></div>
                  <div className="numbers absolute left-[25px] top-[52px] h-[12px] w-[12px] rotate-90 rounded-sm bg-gray-500 shadow-[0_-18px_0_0_#838183,0_18px_0_0_#838183]"></div>
                  <div className="numbers-line2 absolute left-[25px] top-[68px] h-[12px] w-[12px] rotate-90 rounded-sm bg-gray-400 shadow-[0_-18px_0_0_#aaa9ab,0_18px_0_0_#aaa9ab]"></div>
                </div>
                <span className="dollar absolute text-center text-lg font-medium text-yellow-700">
                  !
                </span>
              </div>
              <div className="right-side flex h-full w-[calc(100%-130px)] items-center justify-between overflow-hidden whitespace-nowrap transition-all duration-300 hover:bg-gray-100">
                <span className="new ml-5 font-sans text-xl font-medium">
                  {activeProject
                    ? `"${featuredProjects.find((p) => p.id === activeProject)?.title}" in progress - not completed`
                    : "Portfolio in progress - not completed"}
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
      `}</style>
    </div>
  );
};

export default Home;
