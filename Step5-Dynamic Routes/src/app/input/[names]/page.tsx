"use client";

import { useSearchParams } from 'next/navigation';
const NamePage = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h1 className="text-4xl font-bold mb-4">
        👋 Hello, {name ? name : 'Dear'}! 🎉
      </h1>
      <p className="text-lg mt-4">
        Welcome to Next.Js App 🌟
      </p>
    </div>
  );
};

export default NamePage;
