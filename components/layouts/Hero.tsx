import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="relative pt-36 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50" />

      {/* Decorative blobs */}
      <div className="absolute top-10 left-[-100px] w-[300px] h-[300px] bg-indigo-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-[-100px] w-[300px] h-[300px] bg-emerald-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Fast Delivery,
            <span className="bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">
              {" "}
              Anytime In Beanibazar
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-lg max-w-md">
           Get anything you need delivered right to your doorstep — fast, safe, and reliable. Serving Beanibazar with care, so you can save time and enjoy convenience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/8801706397147"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="px-6 bg-green-600">
                Order via WhatsApp
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <p className="text-2xl font-bold">400+</p>
              <p className="text-sm text-gray-500">Deliveries</p>
            </div>
            <div>
              <p className="text-2xl font-bold">60 min</p>
              <p className="text-sm text-gray-500">Avg Time</p>
            </div>
            <div>
              <p className="text-2xl font-bold">⭐ 4.8</p>
              <p className="text-sm text-gray-500">Rating</p>
            </div>
          </div>
        </div>

        {/* Right Image Card */}
        <div className="">
          <div className="relative md:h-[500px] h-[400px] w-full rounded-2xl  overflow-hidden ">
            <Image
              src="/logo.png"
              fill
              className="object-contain"
              alt="Delivery Service"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
