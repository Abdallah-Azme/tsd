import { createFileRoute, notFound } from "@tanstack/react-router";
import { MDXContent } from "@content-collections/mdx/react";
import { allBlogs } from "content-collections";
import { SITE_URL } from "#/lib/site";
import { MdxCallout } from "#/components/MdxCallout";
import { MdxMetrics } from "#/components/MdxMetrics";
import { Calendar } from "lucide-react";
import { BlogCard } from "@/features/blog/ui/BlogCard";
import { blogService } from "@/features/blog/services/blogService";
import { CTASection } from "@/features/layout/ui/CTASection";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = Array.from(
      new Map(
        [...allBlogs]
          .sort(
            (a, b) =>
              new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf(),
          )
          .map((entry) => [entry.slug, entry]),
      ).values(),
    ).find((entry) => entry.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData, params }) => {
    const title = loaderData?.title ?? "Post";
    const description = loaderData?.description ?? "";
    const image = loaderData?.heroImage ?? "/images/lagoon-1.svg";
    return {
      links: [{ rel: "canonical", href: `${SITE_URL}/blog/${params.slug}` }],
      meta: [
        { title },
        { name: "description", content: description },
        {
          property: "og:image",
          content: image.startsWith("http") ? image : `${SITE_URL}${image}`,
        },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const post = Route.useLoaderData();
  const otherBlogs = blogService.getPosts().slice(0, 3);

  return (
    <main className="w-full flex-1">
      <article className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Cover Image */}
        {post.heroImage ? (
          <img
            src={post.heroImage}
            alt=""
            className="w-full h-[350px] md:h-[500px] rounded-3xl object-cover mb-8 md:mb-12"
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"
            alt="Blog Image"
            className="w-full h-[350px] md:h-[500px] rounded-3xl object-cover mb-8 md:mb-12"
          />
        )}

        {/* Title & Date Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b pb-6 border-transparent">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight max-w-4xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-500 font-medium whitespace-nowrap md:mt-0">
            <Calendar className="w-5 h-5 text-gray-400" />
            <span>2/24/2025</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg !max-w-none prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6 prose-headings:text-[#111827] prose-a:text-[#f18c22]">
          {post.mdx ? (
            <MDXContent
              code={post.mdx}
              components={{ MdxCallout, MdxMetrics }}
            />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: post.html ?? "" }} />
          )}
        </div>
      </article>

      {/* Other Blogs Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <h2 className="text-3xl font-bold text-[#111827] mb-8">Other Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherBlogs.map((blog) => (
            <BlogCard key={blog.id} post={blog} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
