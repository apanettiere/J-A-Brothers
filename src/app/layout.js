import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "J & A Brothers",
  description:
    "Discover J & A Brothers Pressure Washing, Naples, Florida's premier pressure cleaning service. Dedicated to excellence, we offer professional, high-quality pressure washing solutions for your home or business. Experience unparalleled service and superior results with our expert team, committed to meeting your cleaning needs with the utmost care and precision. Choose J & A Brothers for reliable and efficient pressure cleaning services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
