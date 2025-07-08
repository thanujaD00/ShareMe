const products = [
  {
    title: "Basic White Card",
    subtitle: "Smart Business Card",
    price: "LKR 3850",
    image: (
      <div className="w-40 h-24 bg-white rounded-lg shadow flex items-center justify-center mb-6">
        <span className="text-gray-700 font-bold">[Card Image]</span>
      </div>
    ),
  },
  {
    title: "Basic Black Card",
    subtitle: "Smart Business Card",
    price: "LKR 4250",
    image: (
      <div className="w-40 h-24 bg-gray-900 rounded-lg shadow flex items-center justify-center mb-6">
        <span className="text-white font-bold">[Card Image]</span>
      </div>
    ),
  },
  {
    title: "Customize Card",
    subtitle: "Smart Business Card",
    price: "LKR 5900",
    image: (
      <div className="w-40 h-24 bg-white rounded-lg shadow flex items-center justify-center mb-6">
        <span className="text-gray-700 font-bold">[Card Image]</span>
      </div>
    ),
  },
];

const PopularProductsSection = () => (
  <section className="w-full bg-[#181f33] py-16 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-white">Most Our Popular Products</h2>
      <p className="text-gray-300 text-lg mb-10">A Variety Of Smart Solutions, Designed Just For You.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <div key={p.title} className="bg-[#232b3e] rounded-2xl p-8 flex flex-col items-center shadow-md min-h-[500px]">
            <h3 className="text-xl font-bold text-white mb-1">{p.title}</h3>
            <div className="text-gray-300 text-sm mb-4">{p.subtitle}</div>
            {p.image}
            <div className="text-white text-2xl font-bold mb-2">{p.price}</div>
            <a href="#" className="text-red-400 text-sm mb-4 flex items-center gap-1 hover:underline">Learn More <span className="text-lg">&#8595;</span></a>
            <button className="mt-auto px-8 py-3 bg-red-600 hover:bg-red-700 rounded-md text-lg font-bold text-white shadow transition">Get A Quote</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PopularProductsSection; 