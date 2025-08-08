import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Blog = () => {
  const [titleRef, titleInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [postsRef, postsInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const posts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt:
        "Master the fundamentals of React Hooks to simplify your functional components and manage state effectively",
      date: "May 15, 2023",
      category: "React",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Tailwind CSS vs Traditional CSS",
      excerpt:
        "Detailed comparison between utility-first CSS frameworks and traditional CSS methodologies with performance benchmarks",
      date: "April 2, 2023",
      category: "CSS",
      readTime: "12 min read",
    },
    {
      id: 3,
      title: "Building REST APIs with Node.js",
      excerpt:
        "Complete guide to creating scalable and secure RESTful APIs using Express and modern JavaScript practices",
      date: "March 10, 2023",
      category: "Node.js",
      readTime: "15 min read",
    },
    {
      id: 4,
      title: "State Management in 2023",
      excerpt:
        "Exploring modern state management solutions beyond Redux including Zustand, Jotai and React Query",
      date: "February 28, 2023",
      category: "React",
      readTime: "10 min read",
    },
  ];

  return (
    <section className="relative overflow-hidden py-32" id="blog">
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

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl font-bold text-white md:text-6xl">
            My <span className="text-yellow-400">Blog</span>
          </h1>
          <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-300"></div>
          <p className="mt-4 text-xl text-gray-400">
            Thoughts, tutorials and insights about modern web development
          </p>
        </motion.div>

        {/* Posts Container */}
        <motion.div
          ref={postsRef}
          initial={{ opacity: 0 }}
          animate={postsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mt-20 min-h-[400px]"
        >
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={postsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`absolute h-[150px] w-full rounded-xl border border-gray-700 bg-gray-900 p-6 text-white shadow-lg shadow-black/20 ${index === 0 ? "card1 z-[4] -mt-5 ml-5 h-[140px] w-[calc(100%-40px)]" : ""} ${index === 1 ? "card2 z-[3] -mt-3 ml-3 h-[145px] w-[calc(100%-20px)]" : ""} ${index === 2 ? "z-[2]" : ""} ${index === 3 ? "z-[1]" : ""} `}
              style={{
                backgroundImage:
                  "radial-gradient(circle 160px at 50% 120%, #353535, #1f1f1f)",
                top: `${index * 20}px`,
                transform: `translateY(${index * -10}px)`,
              }}
              whileHover={{
                zIndex: 5,
                transform: `translateY(${index === 0 ? -5 : index === 1 ? -8 : -10}px)`,
                boxShadow: "0px 8px 30px -10px rgba(234, 179, 8, 0.3)",
                borderColor: "rgba(234, 179, 8, 0.3)",
              }}
            >
              <div className="flex h-full flex-col justify-between">
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-gray-800/80 px-3 py-1 text-xs font-medium text-yellow-400 backdrop-blur-sm">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="line-clamp-1 text-xl font-bold text-white">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="line-clamp-2 text-sm leading-relaxed text-gray-400">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <motion.button
                    className="flex items-center text-xs text-yellow-400 transition-colors hover:text-yellow-300"
                    whileHover={{ x: 5 }}
                  >
                    Read Article
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 h-3 w-3"
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
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA with proper margin-top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={postsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-[220px] text-center md:mt-[240px]"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 20px rgba(234, 179, 8, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 px-8 py-3 text-lg font-bold text-black shadow-lg transition-all"
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
