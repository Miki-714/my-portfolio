import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../src/images/Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full border-b border-gray-800/50 bg-gray-900/80 shadow-lg backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          {/* Logo image */}
          <Link to="/" className="flex items-center gap-3">
            <motion.img
              src={logo}
              alt="MIKIAS Logo"
              className="h-8 w-8 rounded-full object-cover"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-2xl font-bold text-transparent transition-all hover:scale-105">
              MIKIAS
            </span>
          </Link>
        </motion.div>

        {/* Rest of your existing code remains the same */}
        <nav className="hidden items-center space-x-8 md:flex">
          {[
            { path: "/", name: "Home" },
            { path: "/about", name: "About" },
            { path: "/portfolio", name: "Portfolio" },
            { path: "/blog", name: "Blog" },
            { path: "/contact", name: "Contact" },
          ].map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative px-2 py-1 text-lg font-medium ${
                    isActive
                      ? "text-yellow-400"
                      : "text-gray-300 transition-colors hover:text-yellow-400"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="navActive"
                        className="absolute bottom-0 left-0 h-0.5 w-full bg-yellow-400"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Mobile nav button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-300 p-2 text-black shadow-lg transition-all hover:shadow-xl md:hidden"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4 6h12M4 10h12M4 14h12"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      </div>

      {/* Mobile slider menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex"
          >
            {/* Blurred overlay to close menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 bg-black/70 backdrop-blur-sm transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            ></motion.div>

            {/* Slider on the right side with solid gradient background */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="flex h-full w-4/5 max-w-md flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-8 shadow-2xl"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mb-12 self-end rounded-full bg-gradient-to-br from-yellow-400 to-yellow-300 p-2 text-black shadow transition-all hover:shadow-md"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6l8 8M6 14L14 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>

              <div className="flex flex-col gap-8">
                {[
                  { path: "/", name: "Home" },
                  { path: "/about", name: "About" },
                  { path: "/portfolio", name: "Portfolio" },
                  { path: "/blog", name: "Blog" },
                  { path: "/contact", name: "Contact" },
                ].map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block text-2xl font-medium ${
                          isActive
                            ? "text-yellow-400"
                            : "text-gray-300 transition-colors hover:text-yellow-400"
                        }`
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-8 right-8 h-32 w-32 rounded-full bg-yellow-400/10 blur-3xl"></div>
              <div className="absolute left-8 top-1/4 h-16 w-16 rounded-full bg-yellow-400/5 blur-2xl"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
