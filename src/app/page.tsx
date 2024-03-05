// components/ResponsiveComponent.js
"use client";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Header from "@/components/about/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import CardContainer from "@/components/Main/CardContainer";
import CarasoulContainer from "@/components/Main/CarasoulContainer";
import Media from "react-media";
import ClampedSidebar from "@/components/Sidebar/ClampedSidebar";

export default function Home() {
  const sampleData = [1, 2, 3];
const isMobile = useMediaQuery({ maxWidth: 600 });


const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

useEffect(() => {
  const handleResize = () => {
    
    setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
  };


  if (typeof window !== 'undefined') {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }
}, []); 
  return (
    <div className="bg-white">
      {/* <Header></Header> */}
      <div className="bg-header-image bg-no-repeat bg-cover w-full bg-orange-300 border-red-500 h-16 md:h-52"></div>

      <div className={`flex ${isMobile ? "flex-wrap flex-col" : ""}`}>
        <div className="">
          <Media query={{ minWidth: "600px" }}>
            {(matches) => {
              return !matches ? <ClampedSidebar /> : <Sidebar />;
            }}
          </Media>
        </div>

        <div className="flex flex-col bg-white border shadow-orange-300 shadow-[5px_7px_20px_1px_rgba(0,0,0,0.3)] rounded-xl w-full relative sm:w-[70%] mb-8 ">
          <div className="h-65 w-[80%] rounded-[12px]  border-2 border-[#C4B493] p-4 mx-auto flex flex-wrap justify-between mt-8"></div>

          <div className="mt-4">
            {sampleData.map((ele) => {
              return <CardContainer key={ele} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
