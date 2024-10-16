"use client"
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { motion, useScroll, useSpring } from "framer-motion";




function PostCard(post: Post) {
  const Content = getMDXComponent(post.body.code);

  const imgList = post?.images || ['']
  const vidList = post?.videos || ['']

  const animatedGif = `https://image.mux.com/${vidList[0]}/animated.gif?height=640&fps=24&start=200`

  return (
<>


<div  className="w-full md:w-2/3 space-y-6">

<Link className="bg-base-content" href={post.url}>
{post?.images ? <img src={post.images[0]} /> : <>{post.title}</> }
</Link>
{post?.videos ? <Link className="bg-base-content pt-6" href={post.url}><img className="object-cover w-full" src={animatedGif} /></Link> : <></> }

        
    </div>

<div className="sticky bottom-0 w-full p-6 md:w-1/3 md:left-2/3 text-xs " >
              
        
          <h2 className="text-sm uppercase post-title">{post.title}      </h2>



<div className="post-content pt-4">
        <Content />
      </div>

                </div>


</>

  );
}

export function PostList() {

  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

const imageSection = {
  hidden: { opacity: 0.2 },
  visible: {
    opacity: 1,

    transition: {
duration: 0.2,
delay: .2,
      delayChildren: 0,
      staggerChildren: 0
    }
  }
};
  return (
    <ul>

<li className="h-screen">

</li>

      {posts.map((post, idx) => (
<motion.li

    key={idx}
    className="mb-60 md:flex "
    variants={imageSection}
    initial="hidden"
    whileInView="visible"

  >
        <PostCard key={idx} {...post} />
</motion.li>
      ))}
<li className="h-screen"></li>
    </ul>
  );
}
