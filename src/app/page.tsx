'use client'
import Hero from "@/components/Hero";
import Blog from "./Blog/page";
import Comments from "@/components/Comments";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Blog/>
      <Comments/>
      
    </div>
  );
}
