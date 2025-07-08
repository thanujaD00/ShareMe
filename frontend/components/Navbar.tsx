const Navbar = () => (
  <nav className="flex justify-between items-center px-8 py-8 max-w-7xl mx-auto">
    <div className="text-3xl font-extrabold tracking-wide text-white">LOGO</div>
    <ul className="flex gap-16 text-lg font-bold text-white">
      <li><a href="#product" className="hover:text-red-500 transition">Product</a></li>
      <li><a href="#about" className="hover:text-red-500 transition">About Us</a></li>
      <li><a href="#contact" className="hover:text-red-500 transition">Contact Us</a></li>
    </ul>
  </nav>
);

export default Navbar; 