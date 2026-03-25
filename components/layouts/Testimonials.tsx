"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ubaidur Rahman",
    review: "Afnar service onek bala lagse, khub taratari delivery faisi.",
    rating: 5,
  },
  {
    name: "Fatema Begum",
    review: "Raite o medicine diya gese, khub upokar hoise amar.",
    rating: 5,
  },
  {
    name: "Karim Uddin",
    review: "Dam kom, service o bhalo. Bhorosha kora jay.",
    rating: 4,
  },
  {
    name: "Nusrat Jahan",
    review: "Bebohar onek bala lagse, delivery o fast asil.",
    rating: 5,
  },
  {
    name: "Sabbir Hossain",
    review: "Onek shubidha hoise, barite boshei shob paisi.",
    rating: 5,
  },
  {
    name: "Jannat Ara",
    review: "Beanibazar er moddhe best delivery service eta. Very trusted.",
    rating: 5,
  },
  {
    name: "Imran Khan",
    review: "Khub reliable, jeta saisi shobta faisi.",
    rating: 5,
  },
  {
    name: "Rafiq Uddin",
    review: "Taratari delivery, kono jhamela nai.",
    rating: 4,
  },
  {
    name: "Mim Akter",
    review: "Order korar por khub fast response paisi, satisfied.",
    rating: 5,
  },
  {
    name: "Tania Sultana",
    review: "Friendly behavior, ar service o khub bhalo.",
    rating: 5,
  },
  {
    name: "Arif Hossain",
    review: "Emergency teo help paisi, really appreciated.",
    rating: 5,
  },
  {
    name: "Lamia Islam",
    review: "Parcel safely deliver hoise, kono issue faisi na.",
    rating: 5,
  },
  {
    name: "Farhana Rahman",
    review: "On-time delivery paisi, overall experience bhalo.",
    rating: 5,
  },
];
const Testimonials = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: "-50%",
      transition: {
        duration: 5,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <section id="reviews" className="py-20 scroll-mt-16 bg-gray-50">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-500">Real feedback from our happy customers</p>
      </div>

      {/* Slider */}
      <div className="relative max-w-7xl mx-auto px-6 overflow-hidden">
        {/* Fades */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10" />

        {/* Hover wrapper */}
        <div
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() =>
            controls.start({
              x: "-50%",
              transition: {
                duration: 5,
                ease: "linear",
                repeat: Infinity,
              },
            })
          }
        >
          <motion.div className="flex gap-6" animate={controls}>
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
                      className="w-4 h-4 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-600 text-lg mb-5 leading-relaxed">
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
      </div>
    </section>
  );
};

export default Testimonials;
