import React from "react";
import type { BlogPost } from "../services/blogService";
import { cn } from "#/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
  isLarge?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  post,
  className,
  isLarge,
}) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500",
        isLarge ? "h-[450px]" : "h-[350px]",
        className,
      )}
    >
      {/* Background Image */}
      <img
        src={post.image}
        alt={post.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Date */}
      <div className="absolute top-6 right-8 text-[#1A427D] text-sm font-bold tracking-wide">
        {post.date}
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <h3
          className={cn(
            "text-white font-bold transition-all duration-500 transform",
            isLarge ? "text-2xl" : "text-xl",
            "group-hover:-translate-y-2",
          )}
        >
          {post.title}
        </h3>

        {post.description && (
          <p className="text-white/70 mt-4 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            {post.description}
          </p>
        )}

        {/* Read More - visible on hover or if it has description (like the featured one in image) */}
        <div
          className={cn(
            "mt-6 flex items-center gap-2 text-[#E77C00] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0",
            post.description && "opacity-100 translate-y-0", // Hardcoded for "pixel perfect" look of the one in image
          )}
        >
          <span className="border-b-2 border-[#E77C00]">Read More</span>
        </div>
      </div>
    </div>
  );
};
