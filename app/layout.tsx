import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HoverCat from "@/components/cat";
import React from "react";



const inter = Inter({
  variable: "--font-inter-sans",
  weight: "variable",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adam's Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${inter.variable} antialiased`}>
        <div className="bg-[#faf7f7] flex flex-col justify-center min-h-screen items-center gap-[24px] w-[100%] p-[20px] md:p-[40px] ">
          
            <div className="
                 border-[10px] border-white rounded-[40px] 
                 flex justify-center items-center gap-[24px] 
                 bg-gradient-to-br from-[hsla(32,100%,65%,0.2)] to-[hsla(221,87%,85%,0.8)]  
                 w-[100%] max-w-[100%] sm:max-w-[65%]   min-h-[80vh]">
              {children}
            </div>

            <HoverCat />
        </div>
      </body>
    </html>
  );
}
