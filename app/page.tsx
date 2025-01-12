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
import { FeatureGalleryItem, HomePageCta, HomePageHero, Partner, Testimonial } from 'content_types';
import { fetchFeatures } from '../utils/readContent';
import type { Metadata } from 'next';
import { HomepageWrapper, WhiteBackgroundContainer, DarkerBackgroundContainer } from './page_components';
import { client } from '.tina/__generated__/client'
import { Section } from 'content_types'

export const metadata: Metadata = {
  title: EnvVars.SITE_NAME,
  description: "Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
}

export default async function Homepage() {
  const hero = await fetchHero()
  const cta = await fetchCta()
  const posts = await getAllPosts()
  const partners = await fetchPartners()
  const features = await fetchFeatures()
  const featuresGallery = await fetchFeaturesGallery()
  const testimonials = await fetchTestimonials()
  const sections = await fetchSections()

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


async function fetchSections(): Promise<Section[]> {
  const { data } = await client.queries.sectionConnection()
  return data.sectionConnection.edges!.map(edge => edge!.node!)
}

async function fetchPartners(): Promise<Partner[]> {
  const { data } = await client.queries.partnersConnection()
  return data.partnersConnection.edges!.map(edge => edge!.node!)
}

async function fetchFeaturesGallery(): Promise<FeatureGalleryItem[]> {
  const { data } = await client.queries.featuresGalleryConnection()
  return data.featuresGalleryConnection.edges!.map(edge => edge!.node!)
}

async function fetchTestimonials(): Promise<Testimonial[]> {
  const { data } = await client.queries.testimonialsConnection()
  return data.testimonialsConnection.edges!.map(edge => edge!.node!)
}

async function fetchHero(): Promise<HomePageHero> {
  const { data } = await client.queries.heroConnection()
  return data.heroConnection.edges!.map(edge => edge!.node!)[0]
}

async function fetchCta(): Promise<HomePageCta> {
  const { data } = await client.queries.ctaConnection()
  return data.ctaConnection.edges!.map(edge => edge!.node!)[0]
}