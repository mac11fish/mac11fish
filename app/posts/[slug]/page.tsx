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
      <div className="w-full md:w-2/3">
        

    <ul className="space-y-[600px] md:pr-12 text-xs">
<li  className="h-screen content-center">

        <ScrollDown />

        </li>
{imgList.map((i, idx) => (
        <li key={idx}>
            <img src={i}/>
        </li>
      ))}

        <li  className="pb-24 p-6">
        <Content className=""/>
<label className="swap">
  <input type="checkbox" className="t" value="lightx" />
  <div className="swap-on text-right"><img src={imgList[3]}/></div>
  <div className="swap-off text-right"><img src={imgList[2]}/></div>
</label>
        </li>
</ul>


      </div>
      <div className="w-full p-6 top-12 md:w-1/3 fixed md:top-6 text-xs md:right-6">
<h1 className="pb-12 ">{post.title}</h1>
<time dateTime={post.date} className="mb-1">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      <Content className="sticky"/>
</div>
    </article>
</>
  )
}

export default PostLayout
