import {
  Bike,
  Pill,
  ShoppingCart,
  Package,
  Clock,
  FileText,
} from "lucide-react";

const services = [
  {
    title: "Grocery Delivery",
    description: "Fresh groceries delivered from local shops to your home.",
    icon: ShoppingCart,
  },
  {
    title: "Medicine Delivery",
    description: "Get your medicines quickly and safely when you need them.",
    icon: Pill,
  },
  {
    title: "Food Delivery",
    description: "Order from your favorite restaurants without hassle.",
    icon: Bike,
  },
  {
    title: "Parcel Delivery",
    description: "Send and receive parcels anywhere in Beanibazar.",
    icon: Package,
  },
  {
    title: "Urgent Delivery",
    description: "Fastest delivery service for emergency needs.",
    icon: Clock,
  },
  {
    title: "Document Delivery",
    description: "Safe and fast delivery of important papers and documents.",
    icon: FileText,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20  scroll-mt-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We provide a wide range of delivery services to make your life
            easier and more convenient.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition duration-300 group"
              >
                {/* Icon */}
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-green-100">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
