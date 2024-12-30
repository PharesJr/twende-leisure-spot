import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <div className="flex flex-col bg-[#1E1F20] pb-4">
      {/* Background Image with Banner Text */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-between py-10 px-4">
          {/* Title at the Top */}
          <div className="md:pl-14 text-justify">
            <h1 className="text-4xl text-[#FFDE17] font-medium font-serif md:text-[100px] leading-none">
              Twende <br />
              <span className="text-white md:text-[80px]">Leisure Spot</span>
            </h1>
          </div>

          {/* Paragraph at the Bottom Right */}
          <div className="self-end md:pr-14">
            <p className="mt-4 text-[#FFDE17] font-serif font-medium text-lg md:text-2xl border border-[#FFDE17] px-6 py-4 rounded-[60px] text-center  bg-white bg-opacity-10 backdrop-blur-md">
              where great food and <br />
              great drinks meet.
            </p>
          </div>
        </div>
      </div>

      {/* Banner Image Section */}
      <div className="relative h-[500px]">
        <Image
          src={"/assets/5.jpg"} // Replace with your image path
          alt="Banner Image"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white"></div>
      </div>

      <div className="md:grid grid-cols-2 gap-4 h-fit py-10 md:py-6 w-full">
        {/* Left */}
        <div className="md:pl-14 md:pt-10 text-justify">
          <h1 className="text-4xl text-[#FFDE17] font-serif font-semibold md:text-[64px] leading-none pl-4">
            Kick off
            <br />
            your exciting
            <br />
            quest
          </h1>
        </div>
        {/* Right */}
        <div className="flex flex-1 items-start justify-center pt-10 px-6">
          <span className="text-left text-white md:text-[24px] text-lg font-serif font-normal">
            At Twende Leisure Spot we pride ourselves on offering more than just
            a place to relax. Discover a seamless blend of comfort and luxury
            with our exceptional amenities.
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center w-full">
        <Separator className="my-4 w-[95%] items-center justify-center" />
      </div>

      {/* Grid 1 */}
      <div className="md:grid grid-cols-2 md:gap-4 pt-10">
        {/* Left */}
        <div className="flex items-center justify-center w-full h-[350px]">
          <div className="relative w-[85%] h-full">
            <Image
              src="/assets/7.jpg" // Replace with your image path
              alt="Spa Image"
              fill
              style={{ objectFit: "cover", borderRadius: 10 }}
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col items-start justify-center gap-4 py-10 px-4">
          <h1 className="md:text-[50px] text-[#FFDE17] text-4xl font-bold font-serif">
            Rejuvenate At Our Spa
          </h1>
          <span className="md:text-[24px] text-lg text-white text-left  font-serif">
            Indulge in a variety of treatments designed to relax your body and
            mind.
          </span>
        </div>
      </div>

      {/* Grid 2 */}
      <div className="md:grid grid-cols-2 gap-4">
        {/* Left */}
        <div className="flex flex-col items-start justify-center py-4 px-4 gap-4">
          <h1 className="md:text-[50px] text-4xl text-[#FFDE17] font-bold leading-none font-serif">
            Style At Our In-House Barbershop
          </h1>
          <span className="md:text-[24px] text-lg text-white text-left font-serif ">
            Enjoy a proffessional grooming experience within the hotel.
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center justify-center w-full h-[350px]">
          <div className="relative w-[85%] h-full">
            <Image
              src="/assets/8.jpg" // Replace with your image path
              alt="Spa Image"
              fill
              style={{ objectFit: "cover", borderRadius: 10 }}
            />
          </div>
        </div>
      </div>

      {/* Grid 3 */}
      <div className="md:grid grid-cols-2 py-10 gap-4">
        {/* Left */}
        <div className="flex items-center justify-center w-full h-[350px]">
          <div className="relative w-[85%] h-full">
            <Image
              src="/assets/9.jpg" // Replace with your image path
              alt="Spa Image"
              fill
              style={{ objectFit: "cover", borderRadius: 10 }}
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col items-start justify-center px-4 py-10">
          <h1 className="md:text-[50px] text-4xl text-[#FFDE17] font-bold font-serif">
            Hassle-Free Parking
          </h1>
          <span className="md:text-[24px] text-lg text-white text-left font-serif ">
            With ample parking space available, your convinience is alway our
            priority.
          </span>
        </div>
      </div>

      {/* Grid 4 */}
      <div className="md:grid grid-cols-2 gap-4">
        {/* Left */}
        <div className="flex flex-col items-start justify-center px-4 py-4 gap-4">
          <h1 className="md:text-[50px] text-4xl text-[#FFDE17] font-bold leading-none font-serif">
            Full-Service Car Wash
          </h1>
          <span className="md:text-[24px] text-lg text-white text-left font-serif ">
            From exterior washing to interior detailing, we handle every detail
            so you don’t have to.
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center justify-center w-full h-[350px]">
          <div className="relative w-[85%] h-full">
            <Image
              src="/assets/10.jpg" // Replace with your image path
              alt="Spa Image"
              fill
              style={{ objectFit: "cover", borderRadius: 10 }}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-10">
        <span className="md:text-[64px] text-4xl text-[#FFDE17] font-bold font-serif">
          On the Menu
        </span>
      </div>

      {/* On the Menu Grid */}

      <div className="flex flex-col gap-6 md:grid grid-cols-3 md:gap-4 h-[1400px] md:h-[450px] px-6">
        {/* Image 1 */}
        <div className="relative flex items-center justify-center w-full h-full">
          <div
            className="w-[100%] h-[100%] bg-cover bg-center rounded-md opacity-70"
            style={{ backgroundImage: "url('/assets/12.jpg')" }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-md"></div>
          <div className="absolute bottom-4 left-2 right-2 border border-[#FFDE17] rounded-2xl p-2 text-center bg-white bg-opacity-10 backdrop-blur-md">
            <span className="text-[#FFDE17] text-md font-serif font-semibold">
              gourmet plates
            </span>
          </div>
        </div>
        {/* Image 2 */}
        <div className="relative flex items-center justify-center w-full h-full">
          <div
            className="w-[100%] h-[100%] bg-cover bg-center rounded-md opacity-70"
            style={{ backgroundImage: "url('/assets/13.jpg')" }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-md"></div>
          <div className="absolute bottom-4 left-2 right-2 border border-[#FFDE17] rounded-2xl p-2 text-center bg-white bg-opacity-10 backdrop-blur-md">
            <span className="text-[#FFDE17] text-md font-serif font-semibold">
              craft brews
            </span>
          </div>
        </div>
        {/* Image 3 */}
        <div className="relative flex items-center justify-center w-full h-full">
          <div
            className="w-[100%] h-[100%] bg-cover bg-center rounded-md opacity-70"
            style={{ backgroundImage: "url('/assets/14.jpg')" }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-md"></div>
          <div className="absolute bottom-4 left-2 right-2 border border-[#FFDE17] rounded-2xl p-2 text-center bg-white bg-opacity-10 backdrop-blur-md">
            <span className="text-[#FFDE17] text-md font-serif font-semibold">
              wine & dish pairings
            </span>
          </div>
        </div>
      </div>

      {/* View Menu Button */}

      <div className="flex items-center justify-center py-6">
        <Button className="w-[300px] h-14 text-black font-serif font-bold text-xl bg-[#FFDE17] rounded-2xl">
          View our Menu
        </Button>
      </div>

      {/* In the News Section */}
      <div
        className="relative min-h-screen bg-cover bg-center py-6"
        style={{ backgroundImage: "url('/assets/1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-65 text-white flex flex-col justify-between py-4 px-4">
          <div className="md:grid grid-cols-2 gap-4 flex-1 items-center justify-center">
            {/* Left Section */}
            <div className="flex items-center justify-center">
              <span className="text-[#FFDE17] md:text-[64px] text-4xl py-2 font-serif font-bold opacity-80">
                IN THE NEWS
              </span>
            </div>

            {/* Right Section */}
            <div className="flex flex-col gap-4 items-start justify-center bg-[#1E1F20] md:w-[98%] w-[99%] md:h-fit p-6 rounded-xl">
              <span className="text-left text-lg md:text-xl font-serif">
                News write-ups offer a great way to let clients know about new
                products and services, events, awards, and more.
              </span>
              <span className="text-center text-[28px] md:text-3xl font-bold text-[#FFDE17] font-serif md:py-2">
                – The Food Hub
              </span>
              <span className="text-left text-lg md:text-xl font-serif">
                News write-ups offer a great way to let clients know about new
                products and services, events, awards, and more.
              </span>
              <span className="text-center text-[28px] md:text-3xl font-bold text-[#FFDE17] font-serif md:py-2">
                – Online Cupboard
              </span>
              <span className="text-left text-lg md:text-xl font-serif">
                News write-ups offer a great way to let clients know about new
                products and services, events, awards, and more.
              </span>
              <span className="text-left text-[28px] md:text-3xl font-bold text-[#FFDE17] font-serif md:py-2">
                – Eat the World
              </span>
              <span className="text-left text-lg md:text-xl font-serif">
                News write-ups offer a great way to let clients know about new
                products and services, events, awards, and more.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid 2 */}
      <div className="md:grid grid-cols-2 gap-4 py-6">
        {/* Left */}
        <div className="flex flex-col items-center justify-start px-10 gap-4">
          <h1 className="md:text-[50px] text-4xl text-[#FFDE17] font-bold leading-none text-center font-serif pt-4">
            EXPERIENCE EXCELLENT DINING AT TWENDE LEISURE SPOT
          </h1>
          <span className="md:text-[26px] text-lg text-white text-center font-serif leading-normal  ">
            123 Anywhere St., Any City, ST 12345 <br />{" "}
            hello@reallygreatsite.com <br /> (123) 456-7890
          </span>

          <div className="flex items-center justify-center py-4 font-serif">
            <Button className="w-[300px] text-black font-semibold h-12 text-xl bg-[#FFDE17] rounded-lg">
              Make a Reservation Today
            </Button>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-center w-full h-[450px]">
          <div className="relative w-[85%] h-full">
            <Image
              src="/assets/3.jpg" // Replace with your image path
              alt="Spa Image"
              fill
              style={{ objectFit: "cover", borderRadius: 10 }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-14 py-8 bg-[#555657]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[32px] text-[#FFDE17] font-semibold font-serif ">
            Location
          </h1>
          <span className="text-center text-white font-serif">
            123 Anywhere St., Any City, <br /> ST 12345 | 1234.567.89122342
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[32px] text-[#FFDE17] font-semibold font-serif ">
            Open Kitchen
          </h1>
          <span className="text-center text-white font-serif">
            Monday – Thursday : <span className="font-bold">11am -9pm</span>{" "}
            <br /> Friday – Sunday :{" "}
            <span className="font-bold">11am -9pm</span>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[32px] text-[#FFDE17] font-semibold font-serif">
            Open Bar
          </h1>
          <span className="text-center text-white font-serif">
            Monday – Thursday : <span className="font-bold">11am -9pm</span>{" "}
            <br /> Friday – Sunday :{" "}
            <span className="font-bold">11am -9pm</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center py-6 md:gap-10 gap-8">
        <div className="flex flex-row items-center justify-center md:gap-10 gap-10 px-8">
          <div className="flex flex-row items-center justify-center gap-2">
            <Image
              src="/assets/home-yellow.png" // Replace with your image path
              alt="Home Icon"
              width={28} // Specifying width
              height={28} // Specifying height
              // className="filter brightness-0 invert" // Makes the image white
              style={{ objectFit: "contain" }}
            />
            <span className="text-md text-white text-center font-semibold font-serif">
              Home
            </span>
          </div>

          <div className="flex flex-row items-center justify-center gap-2">
            <Image
              src="/assets/menu.png" // Replace with your image path
              alt="Menu Icon"
              width={28} // Specifying width
              height={28} // Specifying height
              // className="filter brightness-0 invert" // Makes the image white
              style={{ objectFit: "contain" }}
            />
            <span className="text-md text-white text-center font-semibold font-serif">
              Menu
            </span>
          </div>

          <div className="flex flex-row items-center justify-center gap-2">
            <Image
              src="/assets/delivery.png" // Replace with your image path
              alt="Delivery Icon"
              width={28} // Specifying width
              height={28} // Specifying height
              // className="filter brightness-0 invert" // Makes the image white
              style={{ objectFit: "contain" }}
            />
            <span className="text-md text-white text-center font-semibold font-serif">
              Delivery
            </span>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <Image
              src="/assets/about.png" // Replace with your image path
              alt="About Icon"
              width={28} // Specifying width
              height={28} // Specifying height
              // className="filter brightness-0 invert" // Makes the image white
              style={{ objectFit: "contain" }}
            />
            <span className="text-md text-white text-center font-semibold font-serif">
              About
            </span>
          </div>
        </div>

        <div className="md:hidden flex items-center justify-center">
          <span className="text-2xl font-semibold">
            <span className="text-[#FFDE17] font-serif">Twende </span>
            <span className="text-white font-serif">Leisure Spot</span>
          </span>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <span className="text-2xl font-semibold">
            <span className="text-[#FFDE17] font-serif">Twende </span>
            <span className="text-white font-serif">Leisure Spot</span>
          </span>
        </div>

        <div className="flex flex-row items-center justify-center gap-6 px-6">
          <div className="bg-[#FFDE17] rounded-full p-2 h-10 w-10 flex items-center justify-center">
            <Image
              src="/assets/facebook.png" // Replace with your image path
              alt="Facebook Icon"
              width={35} // Specifying width
              height={35} // Specifying height
              // className="filter brightness-0 invert" // Makes the image white
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="bg-[#FFDE17] rounded-full p-2 h-10 w-10 flex items-center justify-center">
            <Image
              src="/assets/twitter.png" // Replace with your image path
              alt="Twitter Icon"
              width={35} // Specifying width
              height={35} // Specifying height
              // className="filter brightness-0 invert" // Makes the image white
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="bg-[#FFDE17] rounded-full p-2 h-10 w-10 flex items-center justify-center">
            <Image
              src="/assets/youtube.png" // Replace with your image path
              alt="Youtube Icon"
              width={35} // Specifying width
              height={35} // Specifying height
              // className="filter brightness-0 invert" // Makes the image white
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full">
        <Separator className="my-4 w-[95%] items-center justify-center bg-[#FFDE17]" />
      </div>
    </div>
  );
}

export default Home;
