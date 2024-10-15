import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'

import { ScrollDown } from '@/components/ScrollDown'


export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  const Content = getMDXComponent(post.body.code)

  const vidList = post?.videos || ['']
  const imgList = post?.images || ['']

  return (
<>
            
    <article className="md:flex">
      <div className="w-full md:w-3/4">
        

    <ul className="space-y-[600px] md:pr-12 text-xs">
<li  className="h-screen content-start">

        <ScrollDown />

        </li>
{imgList.map((i, idx) => (
        <li key={idx}>
            <img src={i}/>
        </li>
      ))}

<li  className="h-screen">


        </li>
</ul>


      </div>
      <div className="w-full p-6 top-12 fixed md:top-6 text-xs">
<h1 className="pb-8 ">{post.title}</h1>
<time dateTime={post.date} className="mb-1">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>

<p className="pb-6 ">{post.credits}</p>
<Content className=""/>
</div>
    </article>
</>
  )
}

export default PostLayout
