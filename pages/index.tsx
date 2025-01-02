import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
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
import { Feature, FeatureGalleryItem, HomePageCta, HomePageHero, Partner, Section, Testimonial } from 'content_types';
import { readContent, readSingleContent } from '../utils/readContent';
import path from 'path';
import fs from 'fs';
import { staticRequest } from 'tinacms';

export default function Homepage({ hero, cta, posts, partners, features, testimonials, featuresGallery, sections }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
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

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

function fetchSections(basePath: string): Promise<Section[]> {
  const sectionsPath = path.join(basePath, 'content', "sections");
  const sectionsQuery = `
    query Sections($relativePath: String!) {
      sections(relativePath: $relativePath) {
        overTitle
        title
        content
        imageUrl
        reversed
      }
    }
  `;

  return Promise.all(fs
    .readdirSync(sectionsPath)
    .map((filePath) => staticRequest({
      query: sectionsQuery,
      variables: { relativePath: filePath },
    }) as Promise<{sections: Section}>)
    .map(async (result) => (await result).sections)
  );
}

export async function getStaticProps() {
  const basePath = process.cwd();

  return {
    props: {
      hero: await readSingleContent<HomePageHero>(basePath, 'homepage', 'hero.json'),
      cta: await readSingleContent<HomePageCta>(basePath, 'homepage', 'cta.json'),
      posts: await getAllPosts(),
      partners: await readContent<Partner>(basePath, 'partners'),
      features: await readContent<Feature>(basePath, 'features'),
      featuresGallery: await readContent<FeatureGalleryItem>(basePath, 'featuresGallery'),
      testimonials: await readContent<Testimonial>(basePath, 'testimonials'),
      sections: await fetchSections(basePath),
    },
  };
}
