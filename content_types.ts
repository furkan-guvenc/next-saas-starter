import { TinaMarkdownContent } from 'tinacms/dist/rich-text';

export type Partner = {
  logoUrl: string;
}

export type Feature = {
  title: string;
  description: string;
  imageUrl: string;
}

export type Testimonial = {
  author: {
    name: string;
    title: string;
    avatarUrl: string;
  };
  content: string;
  companyLogoUrl: string;
}

export type FeatureGalleryItem = {
  title: string;
  description: string;
  imageUrl: string;
  baseColor: string;
  secondColor: string;
}

export type Section = {
  overTitle: string;
  title: string;
  content: TinaMarkdownContent;
  imageUrl: string;
  reversed: boolean;
}

export type HomePageHero = {
  overTitle: string;
  title: string;
  description: string;
}

export type HomePageCta = {
  overTitle: string;
  title: string;
  description: string;
}
