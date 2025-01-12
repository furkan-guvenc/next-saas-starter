import { Post } from '../content_types';
import client from '../.tina/__generated__/client';

export async function getAllPosts(): Promise<Post[]> {
  const { data } = await client.queries.postsConnection()
  return data.postsConnection.edges!.map(edge => edge!.node!)
}
