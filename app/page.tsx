import React from "react";
import Image from "next/image";

function Home() {
  return (
    <div className="flex flex-col pb-4">
      {/* Background Image with Banner Text */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-between py-10 px-4">
          {/* Title at the Top */}
          <div className="md:pl-14 text-justify">
            <h1 className="text-4xl text-[#FFDE17] font-bold md:text-[100px] leading-none">
              Twende <br />
              <span className="text-white">Leisure Spot</span>
            </h1>
          </div>

          {/* Paragraph at the Bottom Right */}
          <div className="self-end md:pr-14">
            <p className="mt-4 text-[#FFDE17] text-sm md:text-2xl border border-[#FFDE17] px-4 py-2 rounded-3xl text-center">
              where great food <br /> and great drinks meet.
            </p>
          </div>
        </div>
      </div>

      {/* Banner Image Section */}
      <div className="relative h-80">
        <Image
          src={"/assets/2.jpg"} // Replace with your image path
          alt="Banner Image"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white"></div>
      </div>
    </div>
  );
}

export default Home;
