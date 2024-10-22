// app/watch/page.tsx

import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface PostProps {
  post: {
    id: string;
    title: string;
    content: string;
    description: string;
  } | null;
}

const Post: React.FC<PostProps> = ({ post }) => {
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://yourdomain.com/posts/${post.id}`} />
        <meta property="og:image" content="https://yourdomain.com/image.jpg" />
      </Head>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  // Simulate fetching post data from an API or database
  const posts = [
    { id: '1', title: 'First Post', content: 'This is the first post content.', description: 'Description of the first post.' },
    { id: '2', title: 'Second Post', content: 'This is the second post content.', description: 'Description of the second post.' },
  ];

  const post = posts.find((p) => p.id === id) || null;

  return {
    props: {
      post,
    },
  };
};

export default Post;