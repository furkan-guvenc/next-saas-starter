'use client';
import styled from 'styled-components';
import { media } from 'utils/media';
import Container from 'components/Container';
import Head from 'next/head';
import OpenGraphHead from 'views/SingleArticlePage/OpenGraphHead';
import StructuredDataHead from 'views/SingleArticlePage/StructuredDataHead';
import MetadataHead from 'views/SingleArticlePage/MetadataHead';
import ShareWidget from 'views/SingleArticlePage/ShareWidget';
import Header from 'views/SingleArticlePage/Header';
import MDXRichText from 'components/MDXRichText';
import React, { useEffect, useRef, useState } from 'react';
import { getReadTime } from 'utils/readTime';
import { NonNullableChildrenDeep } from 'types';
import { Posts } from 'content_types';
import { formatDate } from 'utils/formatDate';


interface SingleArticleProps {
  slug: string;
  posts: Posts;
}

export default function SingleArticle({ slug, posts }: SingleArticleProps) {
  const post = posts as NonNullableChildrenDeep<Posts>;
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [readTime, setReadTime] = useState('');

  useEffect(() => {
    calculateReadTime();
    lazyLoadPrismTheme();

    function calculateReadTime() {
      const currentContent = contentRef.current;
      if (currentContent) {
        setReadTime(getReadTime(currentContent.textContent || ''));
      }
    }

    function lazyLoadPrismTheme() {
      const prismThemeLinkEl = document.querySelector('link[data-id="prism-theme"]');

      if (!prismThemeLinkEl) {
        const headEl = document.querySelector('head');
        if (headEl) {
          const newEl = document.createElement('link');
          newEl.setAttribute('data-id', 'prism-theme');
          newEl.setAttribute('rel', 'stylesheet');
          newEl.setAttribute('href', '/prism-theme.css');
          newEl.setAttribute('media', 'print');
          newEl.setAttribute('onload', 'this.media=\'all\'; this.onload=null;');
          headEl.appendChild(newEl);
        }
      }
    }
  }, []);

  const { title, description, date, tags, imageUrl } = post;
  const meta = { title, description, date: date, tags, imageUrl, author: '' };
  const formattedDate = formatDate(new Date(date));
  const absoluteImageUrl = imageUrl.replace(/\/+/, '/');

  return (
    <>
      <Head>
        <noscript>
          <link rel="stylesheet" href="/prism-theme.css" />
        </noscript>
      </Head>
      <OpenGraphHead slug={slug} {...meta} />
      <StructuredDataHead slug={slug} {...meta} />
      <MetadataHead {...meta} />
      <CustomContainer id="content" ref={contentRef}>
        <ShareWidget title={title} slug={slug} />
        <Header title={title} formattedDate={formattedDate} imageUrl={absoluteImageUrl} readTime={readTime} />
        <MDXRichText content={posts.body} />
      </CustomContainer>
    </>
  );
}

export const CustomContainer = styled(Container)`
    position: relative;
    max-width: 90rem;
    margin: 10rem auto;

    ${media('<=tablet')} {
        margin: 5rem auto;
    }
`;