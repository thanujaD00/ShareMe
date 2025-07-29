const Navbar = () => (
  <nav className="flex justify-between items-center px-8 py-8 max-w-7xl mx-auto">
    <a href="/" className="text-3xl font-extrabold tracking-wide text-red-500 hover:text-red-400 transition-colors duration-300">LOGO</a>
    <ul className="flex gap-16 text-lg font-bold text-white">
      <li><a href="#product" className="hover:text-red-400 transition-colors duration-300 border-b-2 border-transparent hover:border-red-400">Product</a></li>
      <li><a href="/about" className="hover:text-red-400 transition-colors duration-300 border-b-2 border-transparent hover:border-red-400">About Us</a></li>
      <li><a href="#contact" className="hover:text-red-400 transition-colors duration-300 border-b-2 border-transparent hover:border-red-400">Contact Us</a></li>
    </ul>
  </nav>
);

export default Navbar; 