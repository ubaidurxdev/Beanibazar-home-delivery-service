import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="relative w-full h-[330px] md:h-[530px] rounded-3xl overflow-hidden">
          <Image
            src="/banner.png"
            fill
            alt="Beanibazar Delivery Service"
            className="object-contain"
          />
        </div>
        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Us
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-green-600">
              Beanibazar Home Delivery Service
            </span>{" "}
            — your trusted local delivery partner. We started with a simple
            goal: to make everyday life easier for people in Beanibazar by
            delivering anything they need, quickly and reliably.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Whether it's groceries, medicine, food, or urgent items, we handle
            every order with care and responsibility. Our service is built on
            trust, honesty, and a deep understanding of the local community.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            We are proud to serve our neighbors and ensure that every delivery
            reaches safely and on time. Your convenience is our priority.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-xl text-center shadow-sm">
              <h3 className="text-xl font-bold text-green-600">Fast</h3>
              <p className="text-sm text-gray-600">Quick delivery service</p>
            </div>

            <div className="bg-green-50 p-4 rounded-xl text-center shadow-sm">
              <h3 className="text-xl font-bold text-green-600">Trusted</h3>
              <p className="text-sm text-gray-600">Reliable & safe</p>
            </div>

            <div className="bg-green-50 p-4 rounded-xl text-center shadow-sm">
              <h3 className="text-xl font-bold text-green-600">Affordable</h3>
              <p className="text-sm text-gray-600">Low delivery cost</p>
            </div>

            <div className="bg-green-50 p-4 rounded-xl text-center shadow-sm">
              <h3 className="text-xl font-bold text-green-600">Local</h3>
              <p className="text-sm text-gray-600">Serving Beanibazar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
