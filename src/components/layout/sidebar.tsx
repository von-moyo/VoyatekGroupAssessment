import React, { useRef, useState } from "react";
import { navLinks } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { SelectIcon } from "../../assets/icons";


interface SideBarProps {
  className?: string;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
}

export const SideBar: React.FC<SideBarProps> = ({
  className = "",
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) => {
  const userNavLinks = navLinks;
  const menuOpenRef = useRef(null);
  const [isAccountExpanded, setIsAccountExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState("/activities");

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    if (window.innerWidth < 1024) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {(isMobileMenuOpen || window.innerWidth >= 1024) && (
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            ref={menuOpenRef}
            className={`${isMobileMenuOpen ? 'flex' : 'hidden'
              } z-50 w-[285px] h-fit flex-col bg-gray-50 transition-all duration-100 rounded-[4px] lg:flex ${className}`}
          >
            <div className="flex h-full flex-col justify-between overflow-y-auto px-4.5 py-6">
              <div className="flex-1 space-y-4 overflow-y-auto">
                {userNavLinks.map((n) => (
                  <button
                    key={n.name}
                    onClick={() => handleLinkClick(n.href)}
                    className={`w-full flex cursor-pointer items-center gap-3 px-3 py-2 rounded-sm transition-all duration-200 ${activeLink === n.href
                        ? "font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                      }`}
                  >
                    <n.icon className="h-5 w-5" />
                    <span className={`text-left text-xs hover:font-semibold text-[#647995] ${activeLink === n.href
                        && "text-gray-700"}`}>{n.name}</span>
                  </button>
                ))}
              </div>

              {/* Bottom Section with Go Button and Personal Account */}
              <div className="mt-12.5 space-y-3">
                <div className="flex gap-2 items-center bg-[#F0F2F5] px-2 py-3 rounded-[4px]">
                  <button className="h-fit bg-[#0D6EFD] text-white px-3 py-3 rounded-[4px] text-xs hover:bg-blue-700 transition-colors">
                    Go
                  </button>

                  <button
                    onClick={() => setIsAccountExpanded(!isAccountExpanded)}
                    className="w-full flex items-center cursor-pointer justify-between h-fit text-gray-600 pr-3"
                  >
                    <span className="text-[10px]">Personal Account</span>
                    <SelectIcon className="h-4 w-4"/>
                  </button>
                </div>


                <AnimatePresence>
                  {isAccountExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-lg shadow-sm p-2 space-y-1 overflow-hidden"
                    >
                      <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                        Profile Settings
                      </button>
                      <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                        Account Details
                      </button>
                      <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBar;