"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Services = ({ image, title, content }) => {
  // Initialize isLargeScreen without relying on the window object
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Update the isLargeScreen state based on the current window width
    setIsLargeScreen(window.innerWidth > 1060);

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1060);
    };

    // Set up the resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const item = {
    hidden: { y: 0, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={item}
      whileHover={isLargeScreen ? { scale: 1.1 } : {}}
      className="flex items-center flex-col gap-4 bg-[#18191E] p-8 rounded-md"
    >
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <div className="font-bold text-lg mb-2">{title}</div>
        <div className="text-sm leading-7">
          {content.map((line, index) => (
            <p key={index}>{index === 0 ? line : `- ${line}`}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
