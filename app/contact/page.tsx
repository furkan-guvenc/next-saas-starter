import Layout from 'components/Layout';
import FormSection from 'views/ContactPage/FormSection';
import InformationSection from 'views/ContactPage/InformationSection';
import { ContactContainer } from './components';

export default function ContactPage() {
  return (
    <Layout title="Contact" description="Minim sint aliquip nostrud excepteur cupidatat amet do laborum exercitation cupidatat ea proident.">
      <ContactContainer>
        <InformationSection />
        <FormSection />
      </ContactContainer>
    </Layout>
  );
}
