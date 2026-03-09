import React from "react";

export const TeamHeader: React.FC = () => {
  return (
    <div className="mb-16 space-y-4">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-300 bg-white shadow-sm">
        <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
        <span className="text-sm font-semibold text-gray-700">
          Meet the Team
        </span>
      </div>
      <h2 className="text-5xl font-extrabold text-[#111827]">
        The People Behind TSD
      </h2>
      <p className="text-gray-500 text-lg max-w-2xl">
        A skilled team of developers and tech experts driving every project
        forward.
      </p>
    </div>
  );
};
