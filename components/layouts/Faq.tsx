"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I place an order?",
    answer:
      "You can place an order by calling us directly or messaging us on WhatsApp. Just tell us what you need, and we will handle the rest.",
  },
  {
    question: "What areas do you serve?",
    answer: "We currently serve all areas in Beanibazar and nearby locations.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Most deliveries are completed within 60–90 minutes depending on distance and availability.",
  },
  {
    question: "What items can I order?",
    answer:
      "You can order groceries, medicine, food, parcels, documents, or any daily essentials.",
  },
  {
    question: "How much does delivery cost?",
    answer:
      "Our delivery charges are affordable and depend on distance and item type. Contact us for exact pricing.",
  },
  {
    question: "Is your service available every day?",
    answer:
      "Yes, we are available every day to serve you with fast and reliable delivery.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 scroll-mt-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Everything you need to know about our delivery service
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-gray-50 hover:bg-gray-100 transition"
                >
                  <span className="text-gray-800 font-medium">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-5 text-gray-600 text-sm leading-relaxed bg-white">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
