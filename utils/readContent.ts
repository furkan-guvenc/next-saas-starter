import { Feature } from '../content_types';
import client from '.tina/__generated__/client';

export async function fetchFeatures(): Promise<Feature[]> {
  const { data } = await client.queries.featuresConnection()
  return data.featuresConnection.edges!.map(edge => edge!.node!)
}
