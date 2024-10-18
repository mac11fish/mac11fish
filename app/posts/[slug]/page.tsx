import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

import { ScrollDown } from "@/components/ScrollDown";
import MuxPlayer from "@mux/mux-player-react";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  const Content = getMDXComponent(post.body.code);

  const vidList = post?.videos || [""];
  const imgList = post?.images || [""];

  return (
    <>
      {
        /* check to see if videoGif is present */
        post?.videos ? (
          vidList.map((i, idx) => (
            <div className="w-full pt-[600px]" key={idx}>
              <MuxPlayer
                nohotkeys
                autoPlay="muted"
                streamType="on-demand"
                playbackId={i}
                metadataVideoTitle="Placeholder (optional)"
                metadataViewerUserId="Placeholder (optional)"
                accentColor="#000000"
                primaryColor="#ff00ff"
                secondaryColor="#00000000"
              />
            </div>
          ))
        ) : (
          <p></p>
        )
      }

      <article className="md:flex">
        <div className="w-full md:w-3/4">
          <ul className="space-y-[420px] md:pr-12 text-xs">
            <li className="content-start">
              <ScrollDown />
            </li>

            {imgList.map((i, idx) => (
              <li key={idx}>
                <img src={i} />
              </li>
            ))}

            <li className="h-screen"></li>
          </ul>
        </div>

        <div className="p-6 w-full top-12 fixed md:top-6 text-xs z-[1000]">
          <h1 className="pb-8 uppercase">{post.title}</h1>
          <div className="md:w-2/3 ">
            <time dateTime={post.date} className="mb-1">
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>

            <p className="description">{post.description}</p>
            <Content className="full-content" />
          </div>
        </div>
      </article>
    </>
  );
};

export default PostLayout;
