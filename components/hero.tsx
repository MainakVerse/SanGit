'use client'
import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '@/public/images/hero-image.png';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section className="relative">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full opacity-50"
      >
        <source src="/images/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-sans mb-6" data-aos="fade-up">
              <span className="relative inline-flexh2 bg-clip-text text-transparent bg-gradient-to-tr from-blue-800 to-sky-500 pb-6">
                Hire The Best
              </span>
              
            </h1>
            <h2 className='text-5xl font-extrabold text-white'>
              <Typewriter
                options={{
                  strings: ['Disco Jockey', 'Sound Engineer', 'Musician', 'Band'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p
              className="text-xl text-white mb-10 mt-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Hire the best band, musicians, DJ, sound systems or even instruments on any occasion. Make an impact in your special event and stand out from others.
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <Link
                  className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group"
                  href="/"
                >
                  Get Started Free
                </Link>
              </div>
              <div>
                <a
                  className="btn text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600 w-full shadow-sm"
                  href="#0"
                >
                  Read Docs
                </a>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="pt-16 md:pt-20"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image
              className="mx-auto"
              src={HeroImage}
              width={920}
              height={518}
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
