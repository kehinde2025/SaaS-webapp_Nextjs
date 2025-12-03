export default function Testimonials() {
  const testimonials = [
    {
      name: "Alice Johnson",
      role: "CEO, TechCorp",
      quote:
        "This platform completely transformed our workflow. It's fast, intuitive, and beautifully designed.",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Mark Spencer",
      role: "Product Manager, InnovateX",
      quote:
        "A game-changer for our team. The dark mode UI is stunning, and the experience is seamless.",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "Sophia Lee",
      role: "CTO, NextGen Solutions",
      quote:
        "We couldn’t ask for a better platform. Performance, design, and support are top-notch.",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#111111] p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition flex flex-col items-center"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 border-2 border-blue-500"
              />
              <p className="text-gray-300 mb-4 text-center">"{t.quote}"</p>
              <h3 className="font-semibold">{t.name}</h3>
              <span className="text-gray-400 text-sm">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
