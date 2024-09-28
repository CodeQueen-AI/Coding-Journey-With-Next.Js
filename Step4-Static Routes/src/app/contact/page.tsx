import Link from 'next/link';

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-400 to-red-400">
      <h1 className="text-4xl font-bold mb-6 text-white">📞Contact Us</h1>
      <p className="text-xl text-white mb-8">
        For inquiries, please email us at: contact@example.com
      </p>
      <nav className="space-x-4">
        <Link href="/" className="text-white text-xl underline">🏠Home</Link>
        <Link href="/about" className="text-white text-xl underline">💡About</Link>
      </nav>
    </div>
  );
};

export default ContactPage;
