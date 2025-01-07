import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface BlogDetails {
  title: string;
  description: string;
  content: string;
  imageUrl: string;
}

interface BlogProps {
  params: {
    slug: string;
  };
}

export default async function BlogDetailsPage({ params }: BlogProps) {
  const { slug } = params;
  const data: BlogDetails = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      title,
      description,
      content,
      "imageUrl": image.asset->url
    }`,
    { slug }
  );

  if (!data) {
    return <div className="text-center text-red-500">Blog not found!</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 ">
      <div className="bg-white overflow-hidden border border-gray-200">
        <Image
          src={data.imageUrl}
          alt={data.title}
          width={500}
          height={80}
          className="w-full h-auto"
        />
        <div className="p-6">
          <h1 className="text-3xl underline font-bold text-center text-gray-800 mb-4">{data.title}</h1>
          <p className="text-gray-600 font-serif leading-7 text-lg mb-6">{data.description}</p>
          <div className="prose prose-lg text-gray-700">
            {data.content}
            

          </div>
        </div>
      </div>
    </div>
  );
}
