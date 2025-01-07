const Footer = () => {
    return (
      <footer className="bg-gray-100 border-t mt-10">
        <div className="container mx-auto px-4 py-4 text-center">
          <p className="text-gray-700">
            &copy; {new Date().getFullYear()} Crypto World. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with ❤️.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  