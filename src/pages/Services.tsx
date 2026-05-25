function Services() {
  const services = [
    {
      title: "Form Services",
      desc: "Online exam forms, admission forms, scholarship forms and other application form filling support.",
      icon: "📝",
    },

    {
      title: "Government Schemes",
      desc: "Help and guidance for various government schemes and online applications.",
      icon: "🏛️",
    },

    {
      title: "Document Services",
      desc: "Online application support for Niwas, Income, Caste Certificate and other government documents.",
      icon: "📄",
    },

    {
      title: "Ticket Booking",
      desc: "Train, bus and other ticket booking services with quick support.",
      icon: "🎫",
    },

    {
      title: "Bill Payments",
      desc: "Electricity bill, mobile recharge and other online payment services.",
      icon: "💡",
    },

    {
      title: "Online Assistance",
      desc: "Printing, scanning, photocopy and help with all types of online processes.",
      icon: "🌐",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">
        Our Services
      </h1>

      <p className="text-center text-gray-600 mb-10">
        We provide reliable and fast online services for your daily needs
      </p>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center"
          >
            {/* Icon */}
            <div className="text-4xl mb-4">{service.icon}</div>

            {/* Title */}
            <h2 className="text-xl font-semibold mb-2">
              {service.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-2">
          Need any service?
        </h2>
        <p className="text-gray-600">
          Go to Contact page and reach us easily
        </p>
      </div>

    </div>
  );
}

export default Services;