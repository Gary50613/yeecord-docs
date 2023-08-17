import { BlogItem } from "@components/blog/BlogItem";
import { LinkButton } from "@components/LinkButton";
import { getTags } from "@utils/tags";
import { allBlogs } from "contentlayer/generated";

export default function TagPage({ params }: { params: { tag: string } }) {
  const pages = allBlogs.filter(
    (blog) =>
      blog.tags != null &&
      blog.tags.some((tag) => tag.toLowerCase() === params.tag.toLowerCase()),
  );

  return (
    <div className="mx-auto my-16 flex w-full max-w-[1300px] flex-col gap-5">
      <div className="mb-5 flex flex-col gap-5">
        <h1 className="mb-4 text-center text-3xl font-bold">{`帶有「${params.tag}」標籤的文章`}</h1>

        <LinkButton href="/blog/tags" className="mx-auto">
          所有標籤
        </LinkButton>
      </div>
      <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3">
        {pages.map((page) => (
          <BlogItem key={page._id} page={page} />
        ))}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  const tags = [...getTags().entries()];

  return tags.map(([key]) => ({ params: { tag: key.toLowerCase() } }));
}

export function generateMetadata({ params }: { params: { tag: string } }) {
  return {
    title: `帶有「${params.tag}」標籤的文章`,
    openGraph: {
      images: "/opengraph-image.png",
      title: `帶有「${params.tag}」標籤的文章`,
    },
  };
}