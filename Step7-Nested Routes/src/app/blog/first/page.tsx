import Link from 'next/link';

const FirstPost = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">📄 First Blog</h1>
        <p className="mb-4">HI! Welcome To First Blog 🎉</p>
        <Link href="/" className="text-blue-600 hover:underline">⬅️ Back to Home</Link>
      </div>
    </div>
  );
};

export default FirstPost;
