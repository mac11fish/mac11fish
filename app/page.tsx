import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { PostList } from '@/components/post_list'


export default function Home() {

  return (
    <PostList />
  );
}
