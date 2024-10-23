import Link from 'next/link';

const blogpost = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">📚 Welcome to My Blog</h1>
        <ul className="space-y-4">
          <li>
            <Link href="/blog/first" className="text-xl text-blue-600 hover:underline">👉 First Post</Link>
          </li>
          <li>
            <Link href="/blog/second" className="text-xl text-blue-600 hover:underline">👉 Second Post</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default blogpost;