import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center mb-6">About Crypto World</h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        Dive into the future of finance and technology with Crypto World.
      </p>

      {/* Crypto World Image */}
      <div className="mb-8">
        <Image
          src="/crypto.webp"
          alt="Crypto World"
          width={1200}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        <p className="text-lg text-gray-700 leading-7">
          Welcome to Crypto World! We are your gateway to understanding, investing, and thriving in
          the ever-evolving world of cryptocurrency. Our mission is to provide accurate information,
          trusted resources, and expert guidance to navigate the complexities of digital currencies.
        </p>
        <p className="text-lg text-gray-700 leading-7">
          From Bitcoin and Ethereum to emerging altcoins, Crypto World ensures that you stay
          updated on market trends, technology breakthroughs, and investment opportunities.
        </p>
      </div>

      {/* Blockchain Image */}
      <div className="my-10">
        <Image
          src="/blockchain.jpg"
          alt="Blockchain Technology"
          width={1200}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Closing Section */}
      <p className="text-lg text-gray-700 leading-7">
        Our platform is built for everyone, from beginners looking to explore the basics of
        blockchain to seasoned investors seeking advanced insights. At Crypto World, we believe in
        empowering individuals to make informed decisions and embrace the decentralized future.
      </p>
      <p className="text-lg text-gray-700 leading-7 mt-4">
        Thank you for joining Crypto World. Together, let's shape the future of digital finance!
      </p>
    </div>
  );
};

export default About;
