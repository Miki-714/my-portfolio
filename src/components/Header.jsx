import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../src/images/Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full border-b border-gray-800/50 bg-gray-900/80 shadow-lg backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
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

        {/* Desktop Navigation */}
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
                  `relative rounded-md px-3 py-2 text-lg font-medium ${
                    isActive
                      ? "bg-black text-yellow-400"
                      : "bg-black/80 text-gray-300 transition-colors hover:bg-black hover:text-yellow-400"
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

        {/* Mobile Menu Button - Three Yellow Dashes */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center justify-center gap-1.5 p-2 md:hidden"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          {[...Array(3)].map((_, i) => (
            <motion.span
              key={i}
              className="h-0.5 w-6 rounded-full bg-yellow-400"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            />
          ))}
        </motion.button>
      </div>

      {/* Mobile Menu Slider */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex"
          >
            {/* Overlay with solid black background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 bg-black"
              onClick={() => setMenuOpen(false)}
            />

            {/* Slider Panel - Solid Black Background */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="relative flex h-full w-80 flex-col bg-black p-6 shadow-2xl"
            >
              {/* Close Button (X icon) with Yellow Circle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-4 top-4 rounded-full bg-yellow-400 p-1.5 text-black shadow transition-all hover:shadow-md"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <svg
                  width="20"
                  height="20"
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

              {/* Navigation Links with Black Background */}
              <div className="flex flex-col gap-2 pt-12">
                {[
                  { path: "/", name: "Home" },
                  { path: "/about", name: "About" },
                  { path: "/portfolio", name: "Portfolio" },
                  { path: "/blog", name: "Blog" },
                  { path: "/contact", name: "Contact" },
                ].map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index + 0.2 }}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block rounded-md px-4 py-3 text-xl font-medium ${
                          isActive
                            ? "bg-black text-yellow-400"
                            : "bg-black text-gray-300 transition-colors hover:bg-gray-900 hover:text-yellow-400"
                        }`
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-6 right-6 h-20 w-20 rounded-full bg-yellow-400/10 blur-xl" />
              <div className="absolute left-6 top-1/3 h-12 w-12 rounded-full bg-yellow-400/5 blur-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
