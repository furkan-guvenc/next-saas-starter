import React from 'react';
import { client } from '.tina/__generated__/client'
import SingleArticle from './SingleArticle';

type DynamicSegment = {
  slug: string;
}

export default async function SingleArticlePage({ params }: { params: Promise<DynamicSegment> }) {

  const slug = (await params).slug;

  const { data } = await client.queries.posts({ relativePath: `${slug}.mdx` })

  return <SingleArticle slug={slug} posts={data.posts} />;
}

export const dynamicParams = false

export function generateStaticParams(): Promise<DynamicSegment[]> {

  return client.queries.postsConnection({}).then(({data}) => data.postsConnection.edges!.map((edge) => (
    { slug: normalizePostName(edge!.node!._sys.basename) }
  )))
}

function normalizePostName(postName: string) {
  return postName.replace('.mdx', '');
}
