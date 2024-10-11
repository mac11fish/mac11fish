import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'

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
        
    <article className="py-8 md:flex">
      <div className="w-full md:w-2/3">
        

    <div className="py-[900px] space-y-60 md:pr-12">
{imgList.map((i, idx) => (
        <img key={idx} src={i}/>
      ))}
</div>


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
