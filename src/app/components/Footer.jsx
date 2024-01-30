import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-b-transparent border-r-transparent text-white">
      <div className="container flex items-center justify-between p-12">
        <Link href="/">
          <Image
            src="/images/DPW-Footer.svg"
            alt="DPW Logo"
            className="rounded-lg p-2"
            width={100} // Replace with your desired width
            height={100} // Replace with your desired height
          />
        </Link>
        <div className="text-sm text-center flex-grow p-2 hidden md:block">
          <p>
            Offering pressure washing services in Naples, Florida. We provide
            top-quality and professional mobile detailing for your convenience.
          </p>
        </div>
        <div className="text-sm text-right p-2">
          <p>
            &copy; {new Date().getFullYear()} J & A Brothers. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
