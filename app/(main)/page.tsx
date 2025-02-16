"use client";

import React, { useRef } from 'react';
import { metadata } from './metadata'; // Import the metadata
import Hero from '@/components/hero';
import Testimonials from '@/components/testimonials';
import Features02 from '@/components/features-02';
import FaeturedProjects from '@/components/featured-projects';
import Faqs from '@/components/faqs';
import Cta from '@/components/cta';
import SnowfallComponent from '@/components/snowfall-component';

export default function Home() {
  

  return (
    <>
      
      
      <SnowfallComponent />      
      <Hero />      
      <Features02 />
      <FaeturedProjects />
      <Faqs />
      <Testimonials />
      <Cta />

      
    </>
  );
}

