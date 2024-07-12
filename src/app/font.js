import { Montserrat, Poppins, } from "next/font/google";

export const font = Montserrat({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

export const fontTitle = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: ["--font-bebas"],
});
