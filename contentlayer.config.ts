
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    images: {
      type: 'list',
      description: 'Array list of images',
      of: { type: 'string' },
    },
    videoGif: {
      type: 'string',
      description: 'animated GIF url of the post',
    },
    videos: {
      type: 'list',
      description: 'Array list of video IDs',
      of: { type: 'string' },
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
})
