'use client';

import { useState } from 'react';
import Image from 'next/image';
import Illustration from '@/public/images/features-illustration-02.svg';
import FeaturesImage from '@/public/images/features-image.png';

export default function Features02() {
  const [category, setCategory] = useState<string>('1');

  return (
    <section className="relative border-t border-slate-300">
      {/* Bg gradient: top */}
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-indigo-700 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div
        className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 mt-40 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          width="1440"
          height="453"
          alt="Features 02 Illustration"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-sans">
              Check Out Our Vibrance
            </h2>
          </div>
          {/* Box */}
          <div className="bg-indigo-200 drop-shadow-md bg-opacity-60 rounded overflow-hidden">
            <div className="flex flex-col md:flex-row items-end md:items-start md:justify-between lg:space-x-20">
              <div className="md:min-w-[28rem] p-6 lg:p-10">
                {/* Filters */}
                <div className="mb-6 lg:mb-8">
                  <div className="flex flex-wrap -m-1.5">
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === '1'
                          ? 'text-white bg-indigo-500'
                          : 'text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600'
                      }`}
                      onClick={() => setCategory('1')}
                    >
                      Musicians
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === '2'
                          ? 'text-white bg-indigo-500'
                          : 'text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600'
                      }`}
                      onClick={() => setCategory('2')}
                    >
                      Artists
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === '3'
                          ? 'text-white bg-indigo-500'
                          : 'text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600'
                      }`}
                      onClick={() => setCategory('3')}
                    >
                      Bands
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === '4'
                          ? 'text-white bg-indigo-500'
                          : 'text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600'
                      }`}
                      onClick={() => setCategory('4')}
                    >
                      Instruments
                    </button>
                  </div>
                </div>
                {/* Content */}
                <div>
                  <div className={`${category !== '1' && 'hidden'}`}>
                    <h3 className="h3 font-sans mb-2">
                      Hire the Best Musicians
                    </h3>
                    <div className="text-lg text-slate-500">
                      Music is a form of expression of emotions. It plays a crucial role in all kinds of events and occasions. Hire amongst the best musicians to pleasen your show with mind melting music.
                    </div>
                  </div>
                  <div className={`${category !== '2' && 'hidden'}`}>
                    <h3 className="h3 font-sans mb-2">
                      Top Rated Artists 
                    </h3>
                    <div className="text-lg text-slate-500">
                      Artists add life to music. Hire the best musicians for your occasion. A good artist in your show boasts your status in the eyes of your invitees. To make an impact amongst your in-laws, friends or family choose an artist.
                    </div>
                  </div>
                  <div className={`${category !== '3' && 'hidden'}`}>
                    <h3 className="h3 font-sans mb-2">
                      Hire a Band
                    </h3>
                    <div className="text-lg text-slate-500">
                      Want to celebrate your special days with pomp and show? Hire a band or orchestra. Augment the feel of your show and attract more praises and enjoyment. Want a freshers party in college or a bachelor's party? Yes, hire us.
                    </div>
                  </div>
                  <div className={`${category !== '4' && 'hidden'}`}>
                    <h3 className="h3 font-sans mb-2">
                      Want to Play Instruments?
                    </h3>
                    <div className="text-lg text-slate-500">
                      Yes we can make those arangements too. If you don't want to hire our team or are yourself a musician who has an occasion, you can even hire our instruments.
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src={FeaturesImage}
                className="md:max-w-none"
                width="480"
                height="414"
                alt="Feature"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
