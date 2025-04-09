"use client";

import { useEffect, useState } from "react";
import AnimatedTitle from "../Components/AnimatedTitle";
import Footer from "../Components/Footer";

export default function Gallery() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const CornerBorderWrapper = ({ children }) => (
    <div className="relative">
      <div className="relative p-1 rounded-lg overflow-hidden border border-white">
        {children}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500 z-20" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-500 z-20" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-500 z-20" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500 z-20" />

        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white z-10" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white z-10" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white z-10" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white z-10" />
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-black text-white p-4 overflow-hidden">
      <div className="text-center mb-8 mt-4">
        <AnimatedTitle
          title="<b>Highlights</b>"
          containerClass="mt-8 !text-black text-center reveal-element"
        />
      </div>

      <div className="relative w-full mx-auto md:pl-24 px-2">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:grid-rows-5 md:gap-4">
          {/* Card 1 */}
          <div className="md:col-span-5">
            <CornerBorderWrapper>
              <div className="bg-white text-black font-bold text-xl flex justify-center items-center h-60">
                <img
                  src="/img/img1.jpg"
                  alt="description"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </CornerBorderWrapper>
          </div>

          {/* Card 2 */}
          <div className="md:col-span-5 md:col-start-4 md:row-start-2">
            <CornerBorderWrapper>
              <div className="bg-white text-black font-bold text-xl flex justify-center items-center h-60">
                <img
                  src="/img/img2.jpg"
                  alt="description"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </CornerBorderWrapper>
          </div>

          {/* Card 3 */}
          <div className="md:col-span-5 md:col-start-7 md:row-start-3">
            <CornerBorderWrapper>
              <div className="bg-white text-black font-bold text-xl flex justify-center items-center h-60">
                <img
                  src="/img/img3.jpg"
                  alt="description"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </CornerBorderWrapper>
          </div>

          {/* Card 4 */}
          <div className="md:col-span-3 md:row-span-3 md:col-start-9 md:row-start-1 h-full">
            <CornerBorderWrapper>
              <div className="h-full w-full">
                <img
                  src="/img/img4.jpg"
                  alt="description"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </CornerBorderWrapper>
          </div>

          {/* Card 5 */}
          <div className="md:col-span-5 md:row-span-2 md:col-start-4 md:row-start-4">
            <CornerBorderWrapper>
              <div className="bg-white text-black font-bold text-xl flex justify-center items-center h-60">
                <img
                  src="/img/img5.jpg"
                  alt="description"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </CornerBorderWrapper>
          </div>

          {/* Card 6 */}
          <div className="md:col-span-3 md:row-span-3 md:col-start-1 md:row-start-3">
            <CornerBorderWrapper>
              <div className="bg-white text-black font-bold text-xl flex justify-center items-center h-full">
                <img
                  src="/img/img6.jpg"
                  alt="description"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </CornerBorderWrapper>
          </div>

          {/* Card 7 */}
          <div className="md:col-span-4 md:row-span-4 md:col-start-1 md:row-start-5">
            <CornerBorderWrapper>
              <div className="bg-white text-black font-bold text-xl flex justify-center items-center h-60">
                <img
                  src="/img/game1.jpg"
                  alt="description"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </CornerBorderWrapper>
          </div>

          {/* Card 8 */}
          <div className="md:col-span-5 md:row-span-2 md:col-start-7 md:row-start-5">
            <CornerBorderWrapper>
              <div className="bg-white text-black font-bold text-xl flex justify-center items-center h-60">
                <img
                  src="/img/workshop1.jpg"
                  alt="description"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </CornerBorderWrapper>
          </div>

          {/* Card 9 */}
          <div className="md:col-span-3 md:col-start-6 md:row-start-1">
            <div className="bg-transperent text-green-500 font-bold flex flex-col justify-center items-center h-full py-8 md:py-0">
              <span className="text-5xl md:text-7xl font-extrabold">500+</span>
              <span className="text-xl font-semibold mt-1">Hackers</span>
            </div>
          </div>

          {/* Card 10 */}
          <div className="md:col-span-3 md:col-start-1 md:row-start-2">
            <div className="bg-transperent text-black font-bold text-xl flex justify-center items-center h-full">
              <div className="bg-transperent text-green-500 font-bold flex flex-col justify-center items-center h-full py-8 md:py-0">
                <span className="text-5xl md:text-7xl font-extrabold">24+</span>
                <span className="text-xl font-semibold mt-1">Hack Hours</span>
              </div>
            </div>
          </div>

          {/* Card 11 */}
          <div className="md:col-span-3 md:col-start-4 md:row-start-3">
            <div className="bg-transperent text-black font-bold text-xl flex justify-center items-center h-full">
              <div className="bg-transperent text-green-500 font-bold flex flex-col justify-center items-center h-full py-8 md:py-0">
                <span className="text-5xl md:text-7xl font-extrabold">24+</span>
                <span className="text-xl font-semibold mt-1">Hack Hours</span>
              </div>
            </div>
          </div>

          {/* Card 12 */}
          <div className="md:col-span-2 md:row-span-3 md:col-start-9 md:row-start-3">
            <div className="bg-transperent text-green-600 font-bold text-xl flex justify-center items-center h-full py-8 md:py-0">
              <div className="flex flex-col justify-center items-center">
                <span className="text-5xl md:text-7xl font-extrabold">50+</span>
                <span className="text-xl font-semibold mt-1">Partners</span>
              </div>
            </div>
          </div>

          {/* Card 13 */}
          <div className="md:col-span-2 md:row-span-5 md:col-start-5 md:row-start-5">
            <div className="bg-transperent text-green-600 font-bold text-xl flex justify-center items-center h-full py-8 md:py-0">
              <div className="flex flex-col justify-center items-center">
                <span className="text-5xl md:text-7xl font-extrabold">10+</span>
                <span className="text-xl font-semibold mt-1">
                  Successful Events
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}