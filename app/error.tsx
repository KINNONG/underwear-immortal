'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="p-6 mx-auto max-w-md text-center">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">
          哎呀，出现了问题！
        </h1>
        <p className="mb-6 text-gray-600">
          小六壬算法遇到了一些困难，请稍后再试。
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700"
        >
          重新开始
        </button>
      </div>
    </div>
  );
}