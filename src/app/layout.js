//font
import { Poppins } from "next/font/google";
const poppins = Poppins({
  variable: "--font-Poppins",
  subsets: ["latin"],
  weight:["400",'500',"600",'700']
});
import { Michroma } from "next/font/google";
const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight:["400"]
});
//css
import "./globals.css";
//components
import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata = {
  title: "RiskMitigateAI",
  description: "Enhancing Safety and Efficiency in Solana Lending",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${michroma.variable} antialiased max-w-[1440px] overflow-x-hidden bg-[#030208] text-sm sm:text-base mx-auto text-white `}
      > 
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
