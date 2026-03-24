"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Ubaidur Rahman", review: "Very fast and reliable service!", rating: 5 },
  {
    name: "Fatema Begum",
    review: "Delivered medicine at night. Amazing!",
    rating: 5,
  },
  { name: "Karim Uddin", review: "Affordable and trustworthy.", rating: 4 },
  { name: "Nusrat Jahan", review: "Excellent and polite service.", rating: 5 },
  { name: "Sabbir Hossain", review: "Very convenient!", rating: 4 },
  { name: "Jannat Ara", review: "Best in Beanibazar!", rating: 5 },
  { name: "Imran Khan", review: "Reliable service.", rating: 5 },
  { name: "Rafiq Uddin", review: "Fast delivery!", rating: 4 },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-500">Real feedback from our happy customers</p>
      </div>

      {/* Slider + Fade Container */}
      <div className="relative max-w-7xl mx-auto px-6 overflow-hidden">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10" />

        {/* Slider */}
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...reviews, ...reviews].map((item, index) => (
            <div
              key={index}
              className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px] bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-green-500 fill-green-500"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                “{item.review}”
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-semibold text-green-600">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <p className="text-gray-800 text-sm font-medium">
                    {item.name}
                  </p>
                  <p className="text-gray-400 text-xs">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
