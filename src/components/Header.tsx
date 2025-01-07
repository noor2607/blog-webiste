import Link from "next/link";

const Header  = () => {
  return (
    <header className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/">
        <div className="flex items-center space-x-1">
          <span className="text-black font-bold text-2xl">Crypto</span>
          <span className="text-yellow-600 font-bold text-2xl">World</span>
         
          
        </div>
        </a>

        {/* Navigation Links */}
        <nav className="space-x-6">
        <Link href="/About" className="text-gray-700 hover:text-gray-900 font-medium">About
        </Link>
          <Link href="/Blog" className="text-gray-700 hover:text-gray-900 font-medium">Blog
          </Link>
          <Link href="/Contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
