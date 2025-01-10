import styled from 'styled-components';
import Layout from 'components/Layout';
import FaqSection from 'views/PricingPage/FaqSection';
import PricingTablesSection from 'views/PricingPage/PricingTablesSection';
import { Wrapper } from './components';

export default function PricingPage() {
  return (
    <Layout title="Pricing" description="Cupidatat et reprehenderit ullamco aute ullamco anim tempor.">
      <Wrapper>
        <PricingTablesSection />
        <FaqSection />
      </Wrapper>
    </Layout>
  );
}
