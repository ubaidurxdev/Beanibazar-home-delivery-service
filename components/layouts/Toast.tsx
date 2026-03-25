"use client";

import { useRouter } from "next/navigation";

const DeveloperBadge = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("https://ubaidur-rahman.vercel.app")}
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
    >
      <div className="bg-white border border-gray-200 shadow-lg rounded-full px-4 py-2 text-sm text-gray-700 hover:shadow-xl hover:scale-105 transition">
        Built with ❤️ by <span className="font-semibold text-green-600">Ubaid</span>
      </div>
    </div>
  );
};

export default DeveloperBadge;