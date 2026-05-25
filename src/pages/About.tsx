function About() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">About CafeNity</h1>
        <p className="text-gray-600">
          We provide fast, reliable, and easy online services to help you
          complete your digital tasks without any hassle.
        </p>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-4">
            CafeNity is a digital service platform designed to make everyday
            online tasks simple and accessible. From form filling to ticket
            booking and various online processes, we help users complete their
            work quickly and correctly.
          </p>

          <p className="text-gray-600">
            Our goal is to provide a smooth and stress-free experience so that
            anyone can access essential services without confusion.
          </p>
        </div>

        {/* Right */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-600 mb-4">
            To simplify digital services and make them accessible to everyone,
            especially for users who find online processes difficult.
          </p>

          <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
          <p className="text-gray-600">
            To become a trusted platform where users can rely on for all types
            of online service needs.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Fast Service ⚡</h3>
            <p className="text-gray-600">
              Quick and efficient service delivery
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Trusted 💼</h3>
            <p className="text-gray-600">
              Reliable and secure process
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Easy Process 👍</h3>
            <p className="text-gray-600">
              Simple and user-friendly experience
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;