import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [titleRef, titleInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [imageRef, imageInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [contentRef, contentInView] = useInView({
    threshold: 0.2,
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
    <section className="relative overflow-hidden py-32" id="about">
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
            About <span className="text-yellow-400">Me</span>
          </h1>
          <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-300"></div>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Profile Image - Enhanced Card with Blur Effect */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }}
            animate={imageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            {/* Blurred background container */}
            <div className="absolute -inset-4 z-0 overflow-hidden rounded-3xl">
              <motion.img
                src="/src/images/background.jpg"
                alt="Blurred background"
                className="h-full w-full scale-110 object-cover blur-xl brightness-75"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Main card container */}
            <div className="relative z-10 h-[500px] w-[350px] overflow-hidden rounded-2xl border-2 border-yellow-400/30 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]">
              {/* Main profile image */}
              <motion.img
                initial={{ scale: 1.1 }}
                animate={imageInView ? { scale: 1 } : {}}
                transition={{ duration: 1.2 }}
                src="/src/images/background.jpg"
                alt="Profile"
                className="h-full w-full object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Card overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={imageInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  className="text-2xl font-bold"
                >
                  Mikiyas Dereje
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={imageInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                  className="text-yellow-400"
                >
                  Full Stack Developer (React + Django)
                </motion.p>
              </div>
            </div>

            {/* Decorative glow elements */}
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-yellow-400/20 blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-yellow-400/10 blur-xl"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: 50 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            {/* Introduction */}
            <div className="mb-12">
              <motion.h2
                whileHover={{ x: 5 }}
                className="mb-6 text-3xl font-semibold text-white md:text-4xl"
              >
                Who <span className="text-yellow-400">I Am</span>
              </motion.h2>
              <motion.p
                whileHover={{ x: 5 }}
                className="text-xl leading-relaxed text-gray-300"
              >
                I&#39;m Mikiyas Dereje, a Full Stack Developer specializing in
                building modern web applications using React for dynamic
                frontends and Django for powerful backends. I enjoy crafting
                seamless user experiences backed by scalable, secure, and
                efficient server-side architecture.
              </motion.p>
            </div>

            {/* Skills */}
            <div className="mb-14">
              <motion.h2
                whileHover={{ x: 5 }}
                className="mb-6 text-3xl font-semibold text-white md:text-4xl"
              >
                My <span className="text-yellow-400">Expertise</span>
              </motion.h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    whileHover={{
                      y: -3,
                      backgroundColor: "rgba(234, 179, 8, 0.15)",
                      boxShadow: "0 5px 15px rgba(234, 179, 8, 0.2)",
                    }}
                    className="rounded-full bg-gray-900/70 px-5 py-2 text-sm font-medium text-yellow-400 shadow-lg backdrop-blur-sm transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <motion.h2
                whileHover={{ x: 5 }}
                className="mb-6 text-3xl font-semibold text-white md:text-4xl"
              >
                Professional <span className="text-yellow-400">Journey</span>
              </motion.h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px rgba(234, 179, 8, 0.1)",
                    }}
                    className="group relative rounded-xl border-l-4 border-yellow-400 bg-gradient-to-r from-gray-900/50 to-gray-900/20 p-6 backdrop-blur-sm transition-all before:absolute before:inset-0 before:-z-10 before:rounded-xl before:bg-gradient-to-r before:from-yellow-400/10 before:to-transparent before:opacity-0 before:transition-all before:duration-500 before:content-[''] hover:before:opacity-100"
                  >
                    <h3 className="text-xl font-bold text-yellow-400 transition-colors group-hover:text-yellow-300">
                      {exp.title}
                    </h3>
                    <p className="mb-3 text-gray-400 transition-colors group-hover:text-gray-300">
                      {exp.company}
                    </p>
                    <ul className="list-disc space-y-2 pl-5 text-gray-300">
                      {exp.bullets.map((bullet, i) => (
                        <motion.li
                          key={i}
                          whileHover={{ x: 5 }}
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
