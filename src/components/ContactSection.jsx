export default function ContactSection() {
    return (
        <section className="bg-[#F48034] py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <h2 className="text-white text-xl font-semibold">
                    Get in Touch with Us
                </h2>
                <button
                    className="border border-white text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-black"
                >
                    CONTACT US
                </button>
            </div>
        </section>
    );
}
