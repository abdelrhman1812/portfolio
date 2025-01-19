"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState } from "react";
import { FaPalette } from "react-icons/fa";

const colors = [
  { name: "indigo", light: "99 102 241", dark: "129 140 248" },
  { name: "blue", light: "59 130 246", dark: "96 165 250" },
  { name: "green", light: "34 197 94", dark: "74 222 128" },
  { name: "purple", light: "147 51 234", dark: "168 85 247" },
  { name: "pink", light: "236 72 153", dark: "244 114 182" },
];

export default function ColorChanger() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const [activeColor, setActiveColor] = useState("indigo");

  const handleColorChange = (
    colorName: string,
    lightValue: string,
    darkValue: string
  ) => {
    setActiveColor(colorName);
    document.documentElement.style.setProperty(
      "--color-primary",
      theme === "dark" ? darkValue : lightValue
    );
    document.documentElement.style.setProperty(
      "--color-primary-light",
      darkValue
    );
    document.documentElement.style.setProperty(
      "--color-primary-dark",
      lightValue
    );
  };

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary text-white p-3 rounded-full shadow-lg"
        >
          <FaPalette size={24} />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute right-12 top-0 bg-card p-3 rounded-lg shadow-xl"
            >
              <div className="flex flex-col gap-3">
                {colors.map((color) => (
                  <motion.button
                    key={color.name}
                    onClick={() =>
                      handleColorChange(color.name, color.light, color.dark)
                    }
                    className="w-6 h-6 rounded-full relative"
                    style={{
                      backgroundColor: `rgb(${
                        theme === "dark" ? color.dark : color.light
                      })`,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {activeColor === color.name && (
                      <motion.div
                        layoutId="activeColor"
                        className="absolute inset-0 rounded-full border-2 border-white"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
