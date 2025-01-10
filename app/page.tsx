import BasicSection from 'components/BasicSection';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';
import { Feature, FeatureGalleryItem, HomePageCta, HomePageHero, Partner, Testimonial } from 'content_types';
import { readContent, readSingleContent } from '../utils/readContent';
import path from 'path';
import type { Metadata } from 'next';
import { HomepageWrapper, WhiteBackgroundContainer, DarkerBackgroundContainer } from './page_components';
import fs from 'fs/promises';
import { client } from '.tina/__generated__/client'
import { Section } from '.tina/__generated__/types'

export const metadata: Metadata = {
  title: EnvVars.SITE_NAME,
  description: "Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
}

export default async function Homepage() {
  const basePath = process.cwd();
  const hero = await readSingleContent<HomePageHero>(basePath, path.join('homepage', 'hero.json'))
  const cta = await readSingleContent<HomePageCta>(basePath, path.join('homepage', 'cta.json'))
  const posts = await getAllPosts()
  const partners = await readContent<Partner>(basePath, 'partners')
  const features = await readContent<Feature>(basePath, 'features')
  const featuresGallery = await readContent<FeatureGalleryItem>(basePath, 'featuresGallery')
  const testimonials = await readContent<Testimonial>(basePath, 'testimonials')
  const sections = await fetchSections(basePath)

  return (
    <>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero hero={hero} />
          <Partners partners={partners} />
          {sections.map((s, i) =>
            <BasicSection key={i} section={s} />
          )}
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta cta={cta} />
          <FeaturesGallery features={featuresGallery} />
          <Features features={features} />
          <Testimonials testimonials={testimonials} />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}


export function fetchSections(basePath: string): Promise<Section[]> {
  const sectionsPath = path.join(basePath, 'content', 'sections');
  return fs
    .readdir(sectionsPath)
    .then((files) => Promise.all(files
      .map((relativePath) => client.queries.section({relativePath})
        .then(({data}) => data.section))
    ));
}
