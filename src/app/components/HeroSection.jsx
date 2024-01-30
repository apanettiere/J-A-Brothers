"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="bg-hero-background bg-cover  bg-scroll md:bg-fixed bg-top bg-no-repeat text-white">
      <section className="lg:py-16 container mt-24 mx-auto px-12 py-4">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                J & A Brothers{" "}
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Driveway",
                  1000,
                  "Sidewalk",
                  1000,
                  "Roof and Gutter",
                  1000,
                  "Deck and Patio",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              <br></br>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-indigo-700">
                Pressure Cleaning
              </span>
            </h1>

            <p className="text-white text-base sm:text-lg mb-6 lg:text-xl bg-black bg-opacity-40 rounded-md p-1">
              Welcome to J & A Brothers Pressure Washing, your go-to experts for
              top-notch pressure cleaning services in Naples, Florida. As
              dedicated professional, we are committed to delivering exceptional
              service and outstanding results, ensuring that each project
              reflects the highest standards of quality and care. Trust J & A
              Brothers Pressure Washing for all your pressure cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
              <div className="font-bold mb-4 sm:mb-0 sm:mr-4">
                <a
                  href="tel:2393001782"
                  className="text-sm inline-flex items-center rounded-full px-6 py-3 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                >
                  <BsFillTelephoneFill className="mr-2" />
                  (239)-300-1782
                </a>
              </div>
              <div className="font-bold mb-4 sm:mb-0 sm:mr-4">
                <a
                  href="tel:2393001782"
                  className="text-sm inline-flex items-center rounded-full px-6 py-3 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                >
                  <BsFillTelephoneFill className="mr-2" />
                  (239)-276-4104
                </a>
              </div>
              <div className="font-bold">
                <Link
                  href="/#contact"
                  className="px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
