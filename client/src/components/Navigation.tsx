import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X, Download } from "lucide-react";
import { personalInfo } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, setLocation] = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToPage = (path: string) => {
    setLocation(path);
    setIsOpen(false);
  };

  const handleResumeDownload = () => {
    const resumeUrl = "/Muhammad_Sufiyan.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Muhammad_Sufiyan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md border-b shadow-lg transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900/20 border-gray-800/30"
          : "bg-white/20 border-gray-200/30"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="relative w-12 h-12 rounded-full overflow-hidden"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F927889b468f04c9192f0e10274abd178%2F5fe6dcf1ea4d4698aee78fb92d3b463c?format=webp&width=800"
                alt="Muhammad Sufiyan Logo"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.path}
                onClick={() => navigateToPage(item.path)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 relative ${
                  theme === "dark"
                    ? `text-gray-300 hover:text-white hover:bg-gray-800 ${
                        location === item.path ? "text-white bg-gray-800" : ""
                      }`
                    : `text-gray-700 hover:text-gray-900 hover:bg-gray-100 ${
                        location === item.path
                          ? "text-gray-900 bg-gray-100"
                          : ""
                      }`
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                {item.name}
                {location === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-current rounded-full"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}

            <ThemeToggle />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                onClick={handleResumeDownload}
                className={`ml-4 px-6 py-2 rounded-xl font-semibold transition-all duration-300 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:border-white/50 hover:scale-105`}
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`rounded-xl transition-all duration-300 ${
                    theme === "dark"
                      ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-6 w-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-6 w-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className={`w-80 backdrop-blur-xl border-l transition-colors duration-300 ${
                  theme === "dark"
                    ? "bg-gray-900/95 border-gray-800"
                    : "bg-white/95 border-gray-200"
                }`}
              >
                <motion.div
                  className="flex flex-col h-full"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Mobile header */}
                  <div
                    className={`flex items-center justify-between pb-6 border-b ${
                      theme === "dark" ? "border-gray-800" : "border-gray-200"
                    }`}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-full overflow-hidden"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        scale: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F927889b468f04c9192f0e10274abd178%2F5fe6dcf1ea4d4698aee78fb92d3b463c?format=webp&width=800"
                        alt="Muhammad Sufiyan Logo"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Mobile navigation items */}
                  <div className="flex flex-col space-y-2 py-6 flex-1">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.path}
                        onClick={() => navigateToPage(item.path)}
                        className={`text-left py-3 px-4 rounded-xl transition-all duration-300 font-medium ${
                          location === item.path
                            ? theme === "dark"
                              ? "text-blue-400 bg-blue-600/20 border-l-4 border-blue-400"
                              : "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                            : theme === "dark"
                              ? "text-gray-300 hover:text-white hover:bg-gray-800"
                              : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        }`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        {item.name}
                      </motion.button>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <motion.div
                    className={`pt-6 border-t ${
                      theme === "dark" ? "border-gray-800" : "border-gray-200"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      onClick={handleResumeDownload}
                      className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:border-white/50 ${
                        theme === "dark" ? "" : ""
                      }`}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>
                  </motion.div>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
