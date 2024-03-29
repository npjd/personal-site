import Head from "next/head";
import { format, parseISO } from "date-fns";
import { getPostSlugs } from "../../util/data";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export default function BlogPost({ title, date, content }) {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta property="author" content="Nima Pourjafar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-4 md:mx-24">
        <div className="text-center p-10  md:p-24">
          <h2 className="font-bold text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-navyblue via-blue-500 to-skyblue animate-gradient-xy">{title}</h2>
          <h3 className="text-gray-200">
            {format(parseISO(date), "MMMM do, uuu")}
          </h3>
        </div>
        <article className="prose prose-xl">
          <MDXRemote {...content} />
        </article>
      </main>
      <div className="p-8 bg-background"/>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const allPosts = getPostSlugs();
  const content = allPosts.find((blog) => blog.slug === params.slug);
  const mdxSource = await serialize(content.content);
  return {
    props: {
      date: content.data.date.toISOString(),
      title: content.data.title,
      content: mdxSource,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = getPostSlugs();
  return {
    paths: allPosts.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
}
