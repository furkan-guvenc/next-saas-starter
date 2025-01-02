import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';
import { Feature } from '../content_types';
import { readContent } from '../utils/readContent';
import { InferGetStaticPropsType } from 'next';

export default function FeaturesPage({ features }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page title="Features" description="Elit aute do nisi Lorem id ea culpa sint duis eu tempor dolore elit.">
      <Wrapper>
        <SectionTitle>Check out this quick introduction</SectionTitle>
        <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" />
        <CustomAutofitGrid>
          {features.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;


export async function getStaticProps() {
  const basePath = process.cwd();

  return {
    props: {
      features: await readContent<Feature>(basePath, 'features'),
    },
  };
}
