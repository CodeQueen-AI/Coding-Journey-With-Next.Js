import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">🔍 Nested Routes</h1>
        <p className="mb-4">
        Nested routes are routes inside other routes, creating a parent-child structure in web navigation. They help organize and connect related pages in a website, making it easier to manage
        </p>
        <h2 className="text-2xl font-bold mt-4">Example</h2>
        <p className="mb-4">
          Blog Blog
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <code>/blog</code> -Blog home page
          </li>
          <li>
            <code>/blog/first</code> -First blog post
          </li>
          <li>
            <code>/blog/second</code> -Second blog post
          </li>
        </ul>
        <Link href="/blog" className="text-blue-600 hover:underline">⬅️ Back to Blog Home</Link>
      </div>
    </div>
  );
};

export default Home;
