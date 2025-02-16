export const metadata = {
  title: 'Sangeet',
  description: 'Musician & Band Hiring Platform',
};

import Hero from '@/components/hero';
import Testimonials from '@/components/testimonials';
import Features02 from '@/components/features-02';
import FaeturedProjects from '@/components/featured-projects';
import Faqs from '@/components/faqs';
import Cta from '@/components/cta';
import SnowfallComponent from '@/components/snowfall-component';  // Create a separate Client Component

export default function Home() {
  return (
    <>
      <audio src="/images/bgmusic.mp3" autoPlay loop/>
      <SnowfallComponent /> {/* Render the Client Component */}
      <Hero />
      <Features02 />
      <FaeturedProjects />
      <Faqs />
      <Testimonials />
      <Cta />
    </>
  );
}
