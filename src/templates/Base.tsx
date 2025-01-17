import HeroSection from '@/layout/HeroSection';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import Navbar from '../layout/Navbar';
import ServicesSection from '@/layout/ServiceHighlightsSection';
import FeaturesSection from '@/layout/FeaturesSection';
import CredentialInfoSection from '@/layout/CredentialInfoSection';
import FrequentlyAskedQueSection from '@/layout/FrequentlyAskedQueSection';
import CtaSection from '@/layout/CtaSection';
import Footer from '@/layout/Footer';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <FeaturesSection />
    <CredentialInfoSection />
    <FrequentlyAskedQueSection />
    <CtaSection />
    <Footer />
  </div>
);

export { Base };
