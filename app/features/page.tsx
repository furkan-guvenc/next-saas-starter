import BasicCard from 'components/BasicCard';
import Layout from 'components/Layout';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { fetchFeatures } from '../../utils/readContent';
import { CustomAutofitGrid, Wrapper } from './components';

export default async function FeaturesPage() {
  const features = await fetchFeatures();

  return (
    <Layout title="Features" description="Elit aute do nisi Lorem id ea culpa sint duis eu tempor dolore elit.">
      <Wrapper>
        <SectionTitle>Check out this quick introduction</SectionTitle>
        <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" />
        <CustomAutofitGrid>
          {features.map((singleFeature, idx) => (
            <BasicCard key={idx} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Layout>
  );
}
