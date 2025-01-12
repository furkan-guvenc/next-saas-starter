import {
  SectionQuery,
  PostsQuery,
  FeaturesQuery,
  TestimonialsQuery,
  FeaturesGalleryQuery,
  PartnersQuery,
  HeroQuery,
  CtaQuery,
  FooterQuery,
  FooterFooterItemsItems, FooterFooterItems,
} from '.tina/__generated__/types';

export type Section = SectionQuery['section'];
export type Post = PostsQuery['posts'];
export type Feature = FeaturesQuery['features'];
export type Testimonial = TestimonialsQuery['testimonials'];
export type FeatureGalleryItem = FeaturesGalleryQuery['featuresGallery'];
export type Partner = PartnersQuery['partners'];
export type HomePageHero = HeroQuery['hero'];
export type HomePageCta = CtaQuery['cta'];

export type Footer = FooterQuery['footer']
export type SingleFooterListItem = FooterFooterItemsItems;
export type SingleFooterList = FooterFooterItems;
export type FooterItems = Footer['footerItems'];
