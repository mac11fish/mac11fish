import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { PostList } from '@/components/post_list'

import MuxPlayer from "@mux/mux-player-react"; 


export default function Home() {

  return (
<>

<MuxPlayer
  nohotkeys
  autoPlay="muted"
  streamType="on-demand"
  playbackId="POObWzaOWfMFIHuGSUNyz01EO3RG75SjJtHj34xSfpR8"
  metadataVideoTitle="Placeholder (optional)"
  metadataViewerUserId="Placeholder (optional)"
  accentColor="#000000"
  primaryColor="#ff00ff"
  secondaryColor="#00000000"
/>

    <PostList />
</>
  );
}

