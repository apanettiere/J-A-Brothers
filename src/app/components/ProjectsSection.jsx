"use client";
import React, { useState } from "react";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";
import Services from "./Services";

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const services = [
    {
      id: 1,
      image: "/images/services/service1.svg",
      title: "Gutter Cleaning & Brightening",
      content: [
        "Pricing: Standard Home: $120-$180, Large Home: $180-$250",
        "Debris Removal from Gutters",
        "Gutter Scrubbing to Remove Stains",
        "Downspout Flushing",
        "Gutter Inspection and Minor Repair",
      ],
      tag: ["All", "Exterior Cleaning"],
    },
    {
      id: 2,
      image: "/images/services/service2.svg",
      title: "Soft Wash House Washing",
      content: [
        "Pricing: Starting at $200",
        "Gentle yet Effective Cleaning Method",
        "Removal of Dirt, Grime, and Mildew",
        "Safe for All Exterior Surfaces",
        "Long-Lasting Home Protection",
      ],
      tag: ["All", "Exterior Cleaning"],
    },
    {
      id: 3,
      image: "/images/services/service3.svg",
      title: "Paver Cleaning & Sealing",
      content: [
        "Pricing: Starting at $1.50 per sq. ft.",
        "High-Pressure Washing",
        "Weed and Debris Removal",
        "Sand Replacement and Sealing",
        "Enhanced Color and Protection",
      ],
      tag: ["All", "Exterior Cleaning", "Specialized Treatments"],
    },
    {
      id: 4,
      image: "/images/services/service4.svg",
      title: "Driveway & Concrete Cleaning",
      content: [
        "Pricing: Starting at $0.20 per sq. ft.",
        "Stain and Debris Removal",
        "Restoration of Concrete Surfaces",
        "Preventive Treatment for Longevity",
        "Slip Hazard Reduction",
      ],
      tag: ["All", "Exterior Cleaning"],
    },
    {
      id: 5,
      image: "/images/services/service5.svg",
      title: "Window Cleaning",
      content: [
        "Pricing: Starting at $10 per window",
        "Interior and Exterior Cleaning",
        "Streak-Free Glass Treatment",
        "Frame and Sill Cleaning",
        "Eco-Friendly Cleaning Solutions",
      ],
      tag: ["All", "Maintenance Services"],
    },
    {
      id: 6,
      image: "/images/services/service6.svg",
      title: "Algae Shield",
      content: [
        "Pricing: Starting at $250",
        "Preventive Algae and Mold Treatment",
        "Long-Term Surface Protection",
        "Safe for Various Exterior Surfaces",
        "Reduces Frequent Cleaning Needs",
      ],
      tag: ["All", "Specialized Treatments"],
    },
  ];

  const filteredServices = services.filter((service) =>
    service.tag.includes(selectedCategory)
  );

  return (
    <div className="section" id="services">
      <h2 className="text-center text-4xl font-bold text-primary-500 mt-4 mb-8">
        Our Services
      </h2>
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Category tags */}
        <ProjectTag
          onClick={() => setSelectedCategory("Exterior Cleaning")}
          name="Exterior Cleaning"
          isSelected={selectedCategory === "Exterior Cleaning"}
        />

        <ProjectTag
          onClick={() => setSelectedCategory("Maintenance Services")}
          name="Maintenance Services"
          isSelected={selectedCategory === "Maintenance Services"}
        />
        <ProjectTag
          onClick={() => setSelectedCategory("Specialized Treatments")}
          name="Specialized Treatments"
          isSelected={selectedCategory === "Specialized Treatments"}
        />
        <ProjectTag
          onClick={() => setSelectedCategory("All")}
          name="All"
          isSelected={selectedCategory === "All"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <motion.div key={service.id} initial="hidden" animate="visible">
            <Services
              image={service.image}
              title={service.title}
              content={service.content}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
