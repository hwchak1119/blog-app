import Head from "next/head";
import type { NextPage } from "next";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";

const Home: NextPage = ({ posts }: any) => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Blog App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          {posts?.map((post: any) => {
            <PostCard post={post} key={post.title} />;
          })}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative top-8 lg:sticky'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
