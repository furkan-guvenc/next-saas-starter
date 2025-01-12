import { type Metadata } from 'next';
import ArticleCard from 'components/ArticleCard';
import Layout from 'components/Layout';
import { getAllPosts } from 'utils/postsFetcher';
import { CustomAutofitGrid } from './components';

export const metadata: Metadata = {
  title: "My SaaS Startup Blog",
  description: "Culpa duis reprehenderit in ex amet cillum nulla do in enim commodo. Sunt ut excepteur et est aliqua anim ea excepteur fugiat voluptate. Fugiat exercitation dolore laboris do quis consectetur eiusmod tempor consequat."
}

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  return (
    <Layout
      title="My SaaS Startup Blog"
      description="Culpa duis reprehenderit in ex amet cillum nulla do in enim commodo. Sunt ut excepteur et est aliqua anim ea excepteur fugiat voluptate. Fugiat exercitation dolore laboris do quis consectetur eiusmod tempor consequat."
    >
      <CustomAutofitGrid>
        {posts.map((singlePost) => (
          <ArticleCard
            key={singlePost._sys.filename}
            title={singlePost.title}
            description={singlePost.description}
            imageUrl={singlePost.imageUrl}
            slug={singlePost._sys.filename}
          />
        ))}
      </CustomAutofitGrid>
    </Layout>
  );
}
