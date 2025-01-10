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

export type SingleFooterListItem = { title: string; href: string };
export type FooterListItems = SingleFooterListItem[];
export type SingleFooterList = { title: string; items: FooterListItems };
export type FooterItems = SingleFooterList[];
export type Footer = {
  waveCtaTitle: string;
  footerItems: FooterItems
}
