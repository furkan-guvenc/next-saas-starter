'use client'
import React from 'react';
import Head from 'next/head';
import { NavItems } from 'types';
import NavigationDrawer from '../components/NavigationDrawer';
import Navbar from '../components/Navbar';
import WaveCta from '../components/WaveCta';
import Footer from '../components/Footer';
import { NewsletterModalContextProvider, useNewsletterModalContext } from '../contexts/newsletter-modal.context';
import NewsletterModal from '../components/NewsletterModal';
import { ColorModeScript } from 'nextjs-color-mode';
import { GlobalStyle } from '../components/GlobalStyles';

const navItems: NavItems = [
  { title: 'Awesome SaaS Features', href: '/features' },
  { title: 'Pricing', href: '/pricing' },
  { title: 'Contact', href: '/contact' },
  { title: 'Sign up', href: '/sign-up', outlined: true },
];

export default function RootLayout({
 // Layouts must accept a children prop.
 // This will be populated with nested layouts or pages
 children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      {/* <link rel="alternate" type="application/rss+xml" href={EnvVars.URL + 'rss'} title="RSS 2.0" /> */}
      {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-117119829-1', 'auto');
          ga('send', 'pageview');`,
          }}
        /> */}
      {/* <script async src="https://www.google-analytics.com/analytics.js"></script> */}
    </Head>
    <body className="next-light-theme">
      <ColorModeScript />
      <GlobalStyle />
      <NewsletterModalContextProvider>
        <NavigationDrawer items={navItems}>
          <Modals />
          <Navbar items={navItems} />
          {children}
          <WaveCta />
          <Footer />
        </NavigationDrawer>
      </NewsletterModalContextProvider>
    </body>
    </html>
  )
}

function Modals() {
  const { isModalOpened, setIsModalOpened } = useNewsletterModalContext();
  if (!isModalOpened) {
    return null;
  }
  return <NewsletterModal onClose={() => {}} />;
}
