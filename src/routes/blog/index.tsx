import { createFileRoute } from "@tanstack/react-router";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "#/lib/site";
import { BlogHeader } from "#/features/blog/ui/BlogHeader";
import { BlogCard } from "#/features/blog/ui/BlogCard";
import { blogService } from "#/features/blog/services/blogService";

const canonical = `${SITE_URL}/blog`;
const pageTitle = `Blog | ${SITE_TITLE}`;

export const Route = createFileRoute("/blog/")({
  head: () => ({
    links: [{ rel: "canonical", href: canonical }],
    meta: [
      { title: pageTitle },
      { name: "description", content: SITE_DESCRIPTION },
      { property: "og:image", content: `${SITE_URL}/images/lagoon-1.svg` },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const posts = blogService.getPosts();
  const firstRowPosts = posts.slice(0, 2);
  const secondRowPosts = posts.slice(2, 5);

  return (
    <main className="min-h-screen bg-white pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl pt-24">
        <BlogHeader
          badgeText="Insights"
          title="Our Blog"
          description="Thoughts, stories, and perspectives shaping the digital world."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {firstRowPosts.map((post) => (
            <BlogCard key={post.id} post={post} isLarge />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {secondRowPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-12 gap-2">
          <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 9L4.5 6L7.5 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="w-8 h-8 rounded text-white bg-[#E77C00] flex items-center justify-center font-medium shadow-sm">
            1
          </button>
          <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors">
            2
          </button>
          <span className="w-8 h-8 flex items-center justify-center text-gray-500">
            ...
          </span>
          <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors">
            9
          </button>
          <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors">
            10
          </button>
          <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 9L7.5 6L4.5 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
