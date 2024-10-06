interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Browsers and Client-side Web Technologies',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: '/images/drawing_5.png',
    href: 'https://www.google.com',
  },
  {
    title: 'Introducing the Servo Collective',
    description: `“If we can make the web platform more modular and easily reusable in both familiar and novel ways, and help build web-platform-grade libraries in underlying areas like networking, graphics, and typography, we could really change the Rust ecosystem. But doing those things well does take time and money, and we can only achieve Servo’s full potential with your help.”`,
    imgSrc: '/images/drawing_5A.png',
    href: '/blog/the-time-machine',
  },
  {
    title: 'The high performance WebKit port for embedded',
    description: `WPE WebKit is being adopted in a wide range of industries, from cable operators to consumer electronic device manufacturers, with tens of millions of devices using it worldwide. Igalia can help you get the maximum performance out of your hardware by optimizing WPE WebKit for your needs.`,
    imgSrc: '/images/drawing_5E.png',
    href: '/blog/the-time-machine',
  },
  {
    title: 'GStreamer development',
    description: `We have a strong multimedia team with many experienced GStreamer developers. GStreamer hosts many of our contributions to different layers of the stack from the kernel up to the end-user application.`,
    imgSrc: '/images/zombie_felon.png',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
