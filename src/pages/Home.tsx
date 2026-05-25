function Home() {
    return (
        <div>

            {/* HERO */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Welcome to CafeNity 🚀
                </h1>
                <p className="text-lg mb-6">
                    All Online Services at One Place
                </p>
                <p className="opacity-80">
                    Form Filling • Tickets • Yojna • Bill Payment
                </p>
            </section>

            {/* ABOUT PREVIEW */}
            <section className="py-16 px-6 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">About CafeNity</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    CafeNity provides fast and reliable online services like exam form filling,
                    railway ticket booking, government schemes, and more. We make digital
                    services simple and accessible for everyone.
                </p>
            </section>

            {/* SERVICES */}
            {/* SERVICES */}
            <section className="bg-gray-100 py-16 px-6">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Our Services
                </h2>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Form Services",
                            desc: "Online exam forms, admission forms, scholarship forms and other application forms filling support.",
                        },
                        {
                            title: "Government Schemes",
                            desc: "Help and guidance for applying to government schemes and welfare programs.",
                        },
                        {
                            title: "Document Services",
                            desc: "Niwas, Income, Caste Certificate and other online document application support.",
                        },
                        {
                            title: "Bill Payments",
                            desc: "Electricity bill, mobile recharge, DTH recharge and other online payment services.",
                        },
                        {
                            title: "Ticket Booking",
                            desc: "Train, bus and flight ticket booking with quick and reliable support.",
                        },
                        {
                            title: "Online Assistance",
                            desc: "General online help including printing, scanning, photocopy and internet services.",
                        },
                    ].map((service, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center"
                        >
                            <h3 className="text-xl font-semibold mb-3">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-6">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-16 px-6 text-center max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Fast Service ⚡</h3>
                        <p className="text-gray-600">Quick and efficient processing</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Trusted 💼</h3>
                        <p className="text-gray-600">Reliable and secure services</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Easy Process 👍</h3>
                        <p className="text-gray-600">Simple and user-friendly</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-blue-600 text-white py-12 text-center">
                <h2 className="text-2xl font-bold mb-4">
                    Need Any Service?
                </h2>
                <p className="mb-4">Go to Contact page and reach us easily</p>
            </section>

        </div>
    );
}

export default Home;