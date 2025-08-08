import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="relative overflow-hidden py-24" id="contact">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-gray-900"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(234,179,8,0.1)_0deg,rgba(234,179,8,0)_360deg)]"
      ></motion.div>
      <div className="absolute left-0 top-0 z-10 h-1 w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-20"></div>
      <div className="absolute -right-20 -top-20 z-0 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl"></div>
      <div className="absolute -left-20 bottom-0 z-0 h-64 w-64 rounded-full bg-yellow-400/5 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Contact <span className="text-primary">Me</span>
          </h1>
          <div className="from-primary mx-auto mt-4 h-1 w-24 bg-gradient-to-r to-yellow-300"></div>
          <p className="mt-4 text-xl text-gray-400">
            Let&#39;s discuss your project or just say hello
          </p>
        </motion.div>

        <div ref={ref} className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h2 className="mb-6 text-3xl font-semibold text-white">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-400">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out - I&#39;m always open to new collaborations
              and conversations about web development.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="flex items-start"
              >
                <div className="text-primary mr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">Email</h3>
                  <p className="text-lg text-gray-400">
                    mikias.dereje.pro@gmail.com
                  </p>
                  <a
                    href="mailto:mikias.dereje.pro@gmail.com"
                    className="text-primary mt-1 inline-block text-sm transition-colors hover:text-yellow-300"
                  >
                    Send me a message
                  </a>
                </div>
              </motion.div>

              {/* GitHub */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="flex items-start"
              >
                <div className="text-primary mr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">GitHub</h3>
                  <p className="text-lg text-gray-400">github.com/miki-714</p>
                  <a
                    href="https://github.com/miki-714"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary mt-1 inline-block text-sm transition-colors hover:text-yellow-300"
                  >
                    View my projects
                  </a>
                </div>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="flex items-start"
              >
                <div className="text-primary mr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">LinkedIn</h3>
                  <p className="text-lg text-gray-400">Mikias Dereje</p>
                  <a
                    href="https://www.linkedin.com/in/mikias-dereje-576557374/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary mt-1 inline-block text-sm transition-colors hover:text-yellow-300"
                  >
                    Connect with me
                  </a>
                </div>
              </motion.div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="flex items-start"
              >
                <div className="text-primary mr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">
                    Availability
                  </h3>
                  <p className="text-lg text-gray-400">
                    Open to remote opportunities
                  </p>
                  <a
                    href="https://www.linkedin.com/in/mikias-dereje-576557374/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary mt-1 inline-block text-sm transition-colors hover:text-yellow-300"
                  >
                    Let&#39;s connect
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8"
          >
            <h2 className="mb-6 text-3xl font-semibold text-white">
              Send Me a <span className="text-primary">Message</span>
            </h2>
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                <label
                  htmlFor="name"
                  className="mb-2 block text-lg font-medium text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="focus:border-primary focus:ring-primary/30 w-full rounded-xl border-2 border-gray-800 bg-gray-900/50 px-5 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:outline-none focus:ring-2"
                  placeholder="Your Name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                <label
                  htmlFor="email"
                  className="mb-2 block text-lg font-medium text-white"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="focus:border-primary focus:ring-primary/30 w-full rounded-xl border-2 border-gray-800 bg-gray-900/50 px-5 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:outline-none focus:ring-2"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                <label
                  htmlFor="message"
                  className="mb-2 block text-lg font-medium text-white"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="focus:border-primary focus:ring-primary/30 w-full rounded-xl border-2 border-gray-800 bg-gray-900/50 px-5 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:outline-none focus:ring-2"
                  placeholder="Hello Mikiyas, I'd like to discuss a potential project..."
                ></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
              >
                <button
                  type="submit"
                  className="primary-button w-full rounded-xl px-6 py-4 text-lg font-bold transition-all"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
