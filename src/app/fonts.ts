// app/fonts.ts
import { Merriweather, Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

const merriweather = Merriweather({
  weight: "400", // Example weight, adjust as needed
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const fonts = {
  rubik,
  merriweather, // Assuming you want to export both fonts
};
