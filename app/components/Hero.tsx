export default function Hero() {
  return (
    <section className="relative bg-black text-white pt-38 pb-32">
      {/* Glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Tagline */}
        <span className="px-4 py-1 rounded-full text-sm text-blue-400 bg-blue-500/10 border border-blue-500/20">
          Premium Dark Mode SaaS
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          Build Your Future <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
            with Cutting-Edge Technology
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          A modern platform that connects businesses and users with a sleek, secure, 
          and fast experience — all in dark mode.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 rounded-xl bg-blue-500 text-black font-semibold shadow-lg shadow-blue-500/40 hover:bg-blue-400 transition">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
