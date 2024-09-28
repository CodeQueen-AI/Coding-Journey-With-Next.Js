import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-400">
      <h1 className="text-5xl font-bold mb-6 text-white"> 🏠Welcome to Static Site 🏠</h1>
      <p className="text-2xl text-white mb-8">This is a simple static site created with Next.js and Tailwind CSS.</p>
      <nav className="space-x-4">
        <Link href="/about"className="text-white text-xl underline">📝About</Link>
        <Link href="/contact" className="text-white text-xl underline">📞Contact</Link>
      </nav>
    </div>
  );
};

export default HomePage;
