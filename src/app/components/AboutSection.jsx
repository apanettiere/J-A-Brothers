"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <p>
        J & A Brothers is self-efficient with our own water making it easy to go
        to any location. All is needed is a common electrical outlet within 200
        feet.
      </p>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <p>
        We service 30+ miles away from Naples, which includes Naples, Bonita,
        Marco Island, Estero, Ave Maria, and Fort Myers.
      </p>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <p>
        For your confidence and your protection, J & A Brothers is fully
        licensed and insured!
      </p>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="iframe-container">
          <iframe
            className="w-full h-auto border-0"
            title="Google Maps Location for Drew's Mobile Detailing"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14321.693686419407!2d-81.7309293!3d26.182901!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db1d489cce8c47%3A0x418715c4818b3381!2sDrew's%20Mobile%20Detailing!5e0!3m2!1sen!2sus!4v1702156432398!5m2!1sen!2sus"
            style={{ border: 0, aspectRatio: "1 / 1" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-primary-500 mb-4">
            About J & A Brothers
          </h2>
          <p className="text-base lg:text-lg">
            Welcome to J & A Brothers Pressure Washing, your go-to expert for
            professional and thorough pressure washing services. Fully insured
            and dedicated to quality, we specialize in cleaning and revitalizing
            various exterior surfaces, including driveways, sidewalks, roofs,
            and patios. Our commitment to excellence ensures your property not
            only looks its best but also receives the utmost care. Contact us at
            (239)-300-1782 or (239)-276-4104 to schedule your appointment today.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              We Come To You{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Areas we service{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Licensed & Insured{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
