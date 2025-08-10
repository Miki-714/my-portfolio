import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profileImage from "../../src/images/background.jpg";

const About = () => {
  const [titleRef, titleInView] = useInView({
    threshold: 0.3, // Lower threshold for mobile
    triggerOnce: true,
  });
  const [imageRef, imageInView] = useInView({
    threshold: 0.2, // Lower threshold for mobile
    triggerOnce: true,
  });
  const [contentRef, contentInView] = useInView({
    threshold: 0.1, // Lower threshold for mobile
    triggerOnce: true,
  });

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Django",
    "Python",
    "Django REST",
    "PostgreSQL",
    "MySQL",
    "Tailwind CSS",
    "HTML5/CSS3",
    "Redux",
    "Docker",
    "AWS",
    "CI/CD",
    "JWT/OAuth",
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Freelance • 2024 - Present",
      bullets: [
        "Developed full-stack web applications with React frontends and Django REST API backends",
        "Implemented secure authentication systems using JWT and OAuth",
        "Optimized application performance through frontend rendering improvements and database query optimization",
      ],
    },
    {
      title: "Web Solutions Architect",
      company: "Various Clients • 2023 - Present",
      bullets: [
        "Architected scalable web solutions with clean, maintainable code",
        "Integrated Django backends with modern React frontends",
        "Implemented CI/CD pipelines for automated testing and deployment",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-32" id="about">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>

      {/* Animated Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10"
      ></motion.div>

      {/* Simplified decorative elements for mobile */}
      <div className="absolute left-0 top-0 z-10 h-1 w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-20"></div>
      <div className="absolute -right-10 -top-10 z-0 h-32 w-32 rounded-full bg-yellow-400/10 blur-xl md:-right-20 md:-top-20 md:h-64 md:w-64 md:blur-3xl"></div>
      <div className="absolute -left-10 bottom-0 z-0 h-32 w-32 rounded-full bg-yellow-400/5 blur-xl md:-left-20 md:h-64 md:w-64 md:blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-20"
        >
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            About <span className="text-yellow-400">Me</span>
          </h1>
          <div className="mx-auto mt-3 h-1 w-16 bg-gradient-to-r from-yellow-400 to-yellow-300 sm:w-24"></div>
        </motion.div>

        <div className="grid gap-10 md:gap-16 lg:grid-cols-2">
          {/* Profile Image - Responsive Card */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -30 }}
            animate={imageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            {/* Blurred background container */}
            <div className="absolute -inset-2 z-0 overflow-hidden rounded-2xl md:-inset-4 md:rounded-3xl">
              <motion.img
                src={profileImage}
                alt="Blurred background"
                className="h-full w-full scale-110 object-cover blur-lg brightness-75 md:blur-xl"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Main card container */}
            <div className="relative z-10 h-[350px] w-[250px] overflow-hidden rounded-xl border-2 border-yellow-400/30 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] sm:h-[400px] sm:w-[300px] md:h-[500px] md:w-[350px] md:rounded-2xl">
              {/* Main profile image */}
              <motion.img
                initial={{ scale: 1.1 }}
                animate={imageInView ? { scale: 1 } : {}}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
                src={profileImage}
                alt="Profile"
                className="h-full w-full object-cover"
                whileHover={{ rotate: 5, scale: 1.05 }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Card overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white sm:p-6">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={imageInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 }}
                  className="text-xl font-bold sm:text-2xl"
                >
                  Mikiyas Dereje
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={imageInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  className="text-sm text-yellow-400 sm:text-base"
                >
                  Full Stack Developer (React + Django)
                </motion.p>
              </div>
            </div>

            {/* Smaller decorative elements for mobile */}
            <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-yellow-400/20 blur-lg md:-left-6 md:-top-6 md:h-24 md:w-24 md:blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-yellow-400/10 blur-lg md:-bottom-6 md:-right-6 md:h-24 md:w-24 md:blur-xl"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: 30 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            {/* Introduction */}
            <div className="mb-8 md:mb-12">
              <motion.h2
                whileHover={{ x: 3 }}
                className="mb-4 text-2xl font-semibold text-white sm:text-3xl md:text-4xl"
              >
                Who <span className="text-yellow-400">I Am</span>
              </motion.h2>
              <motion.p
                whileHover={{ x: 3 }}
                className="text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl"
              >
                I&#39;m Mikiyas Dereje, a Full Stack Developer specializing in
                building modern web applications using React for dynamic
                frontends and Django for powerful backends. I enjoy crafting
                seamless user experiences backed by scalable, secure, and
                efficient server-side architecture.
              </motion.p>
            </div>

            {/* Skills */}
            <div className="mb-10 md:mb-14">
              <motion.h2
                whileHover={{ x: 3 }}
                className="mb-4 text-2xl font-semibold text-white sm:text-3xl md:text-4xl"
              >
                My <span className="text-yellow-400">Expertise</span>
              </motion.h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 15 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.05 + index * 0.03 }}
                    whileHover={{
                      y: -2,
                      backgroundColor: "rgba(234, 179, 8, 0.15)",
                      boxShadow: "0 3px 10px rgba(234, 179, 8, 0.2)",
                    }}
                    className="rounded-full bg-gray-900/70 px-3 py-1 text-xs font-medium text-yellow-400 shadow-md backdrop-blur-sm transition-all sm:px-4 sm:py-2 sm:text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <motion.h2
                whileHover={{ x: 3 }}
                className="mb-4 text-2xl font-semibold text-white sm:text-3xl md:text-4xl"
              >
                Professional <span className="text-yellow-400">Journey</span>
              </motion.h2>
              <div className="space-y-4 sm:space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{
                      y: -3,
                      boxShadow: "0 5px 15px rgba(234, 179, 8, 0.1)",
                    }}
                    className="group relative rounded-lg border-l-4 border-yellow-400 bg-gradient-to-r from-gray-900/50 to-gray-900/20 p-4 backdrop-blur-sm transition-all before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-r before:from-yellow-400/10 before:to-transparent before:opacity-0 before:transition-all before:duration-300 before:content-[''] hover:before:opacity-100 sm:rounded-xl sm:p-6"
                  >
                    <h3 className="text-lg font-bold text-yellow-400 transition-colors group-hover:text-yellow-300 sm:text-xl">
                      {exp.title}
                    </h3>
                    <p className="mb-2 text-sm text-gray-400 transition-colors group-hover:text-gray-300 sm:mb-3 sm:text-base">
                      {exp.company}
                    </p>
                    <ul className="list-disc space-y-1 pl-4 text-sm text-gray-300 sm:space-y-2 sm:pl-5 sm:text-base">
                      {exp.bullets.map((bullet, i) => (
                        <motion.li
                          key={i}
                          whileHover={{ x: 3 }}
                          transition={{ type: "spring" }}
                          className="transition-colors group-hover:text-white"
                        >
                          {bullet}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
