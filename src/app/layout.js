import { Bebas_Neue, Lilita_One } from "next/font/google";
import "./globals.css";

const LilitaOne = Lilita_One({
  variable: "--font-lilita-one",
  subsets: ["latin"],
  weight: "400"
});

const bebsaNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400"
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${LilitaOne.variable} ${bebsaNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
