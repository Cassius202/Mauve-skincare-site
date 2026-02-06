import { useEffect, useState } from "react";
import { navLinks } from "../../assets/assets";
import { useTranslation } from "react-i18next";
import { cn } from "../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import useProps from "../../hooks/useProps";

const SideBar = () => {
  const { isOpen, setIsOpen } = useProps();

  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");

  // Track active section based on scroll position
  useEffect(() => {
    const handleSectionScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleSectionScroll);
    return () => window.removeEventListener("scroll", handleSectionScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
      setIsOpen(false); // Close sidebar after clicking
    }
  };

  // Close sidebar when clicking outside
  const handleBackdropClick = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: "0" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-72 sm:w-80 bg-linear-to-b from-blue-900 via-blue-900/95 to-blue-950 backdrop-blur-lg flex flex-col z-50 shadow-2xl border-l border-blue-500/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-blue-500/20">
              <h2 className="text-xl font-bold text-white">Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-blue-500/20 text-gray-300 hover:text-white transition-colors"
                aria-label="Close sidebar"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-6 px-4">
              <menu className="flex flex-col gap-2">
                {navLinks.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;

                  return (
                    // ... inside your navLinks.map
                    <li key={index} className="block w-full">
                      {" "}
                      {/* Added block w-full here */}
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                          "flex items-center gap-4 w-full py-5 px-6 rounded-xl transition-all duration-300 relative group text-left", // Increased padding to py-5 and px-6
                          isActive
                            ? "bg-blue-500/20 text-blue-400"
                            : "text-gray-100 hover:bg-blue-500/10 hover:text-blue-300",
                        )}
                      >
                        {/* Active indicator - Moved slightly left to not overlap text */}
                        {isActive && (
                          <motion.div
                            layoutId="activeSidebarTab"
                            className="absolute left-0 top-2 bottom-2 w-1 bg-blue-400 rounded-r-full" // Added top-2 bottom-2 so it doesn't touch the edges
                            transition={{ type: "spring", duration: 0.5 }}
                          />
                        )}

                        {/* Icon */}
                        <div
                          className={cn(
                            "relative z-10 transition-transform duration-300 shrink-0", // Added shrink-0 to prevent icon squishing
                            isActive ? "scale-110" : "group-hover:scale-105",
                          )}
                        >
                          <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                        </div>

                        {/* Label */}
                        <span
                          className={cn(
                            "text-lg font-medium relative z-10 transition-all duration-300", // Bumped to text-lg for readability
                            isActive ? "font-semibold" : "font-normal",
                          )}
                        >
                          {t(`nav.${item.path}`)}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </menu>
            </nav>

            {/* Footer - Optional branding */}
            <div className="p-6 border-t border-blue-500/20">
              <p className="cursor-pointer text-center text-sm text-gray-400">
                © 2024{" "}
                <span
                  onClick={() => {
                    window.open(
                      "https://cassius-samuel-dev.vercel.app",
                      "_blank",
                    );
                  }}
                  className="text-blue-400 font-semibold"
                >
                  cassius.dev
                </span>
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
