'use client'
import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Container from './Container';
import OverTitle from './OverTitle';
import RichText from './RichText';
import { Section } from '.tina/__generated__/types'
import { TinaMarkdown } from 'tinacms/dist/rich-text';

export interface BasicSectionProps {
  section: Section;
}

export default function BasicSection({ section }: BasicSectionProps) {
  return (
    <BasicSectionWrapper reversed={section.reversed}>
      <ImageContainer>
        <NextImage
          src={section.imageUrl}
          alt={section.title}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover"
          }} />
      </ImageContainer>
      <ContentContainer>
        <CustomOverTitle>{section.overTitle}</CustomOverTitle>
        <Title>{section.title}</Title>
        <RichText>
          <TinaMarkdown content={section.content} />
        </RichText>
      </ContentContainer>
    </BasicSectionWrapper>
  );
}

const Title = styled.h1`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  flex: 1;

  position: relative;
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
`;

type Props = Pick<Section, 'reversed'>;
const BasicSectionWrapper = styled(Container)<Props>`
  display: flex;
  align-items: center;
  flex-direction: ${(p: Props) => (p.reversed ? 'row-reverse' : 'row')};

  ${ImageContainer} {
    margin: ${(p: Props) => (p.reversed ? '0 0 0 5rem' : '0 5rem 0 0')};
  }

  ${media('<=desktop')} {
    flex-direction: column;

    ${ImageContainer} {
      margin: 0 0 2.5rem 0;
    }
  }
`;
