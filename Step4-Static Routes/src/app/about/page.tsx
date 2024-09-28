import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-teal-400">
      <h1 className="text-4xl font-bold mb-6 text-white">📝About Us📝</h1>
      <p className="text-xl text-white mb-8">
        A static site is a website that is delivered to the user's browser exactly as stored, without any server-side processing.
      </p>
      <nav className="space-x-4">
        <Link href="/" className="text-white text-xl underline">🏠Home</Link>
        <Link href="/contact" className="text-white text-xl underline">📞Contact</Link>
      </nav>
    </div>
  );
};

export default AboutPage;
