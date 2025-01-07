import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
}

export default async function Blog() {
  const data: Blog[] = await client.fetch(`*[_type == "blog"]{
    title,
    description,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }`);

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((blog) => (
        <div
          key={blog.slug}
          className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
        >
          <div>
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
            <p className="text-gray-600 line-clamp-2">{blog.description}</p>
            <Link href={`/blogs/${blog.slug}`} className="mt-4 inline-block text-blue-500 hover:text-blue-700 font-medium">Read More</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
