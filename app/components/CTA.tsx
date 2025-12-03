export default function CTA() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to get started?
        </h2>
        <p className="text-gray-400 mb-10">
          Join thousands of businesses already enjoying our platform. Fast, secure, and beautifully designed.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 rounded-xl bg-blue-500 text-black font-semibold shadow-lg shadow-blue-500/40 hover:bg-blue-400 transition">
            Get Started
          </button>
          <button className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
