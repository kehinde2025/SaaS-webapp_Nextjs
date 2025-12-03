export default function ProductCards() {
  const products = [
    {
      title: "Starter Plan",
      price: "$19/mo",
      description: "Ideal for individuals or small teams starting out.",
      cta: "Get Started",
    },
    {
      title: "Pro Plan",
      price: "$49/mo",
      description: "Perfect for growing businesses with advanced needs.",
      cta: "Get Started",
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large companies with complex needs.",
      cta: "Contact Sales",
    },
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-[#111111] p-8 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <span className="text-3xl font-bold">{product.price}</span>
              </div>
              <button className="mt-6 px-6 py-3 rounded-xl bg-blue-500 text-black font-semibold hover:bg-blue-400 transition">
                {product.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
