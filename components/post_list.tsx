"use client"
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image"

function PostCard(post: Post) {
  const Content = getMDXComponent(post.body.code);

  const imgList = post?.images || ['']

  return (
<>
<div  className="w-full md:w-2/3 md:pr-12 md:pr-4 space-y-48">
        <Link
          href={post.url}
          className=""
          legacyBehavior>



                <Image
                className="object-cover w-full"
                aria-hidden
                src={imgList[0] as string}
                alt={post.title}
                width={900}
                height={900}
              />

        </Link>
    </div>

<div className=" w-full p-6 md:w-1/3 md:left-2/3  text-xs " >
              
        
          <h2 className="text-xs">{post.title}      </h2>



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

<li className="h-screen"></li>

      {posts.map((post, idx) => (
<motion.li

    key={idx}
    className="mb-48 md:flex "
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
