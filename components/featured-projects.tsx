import Image from 'next/image';

export default function FaeturedProjects() {
  const projects = [
    {
      img: '/images/features-icon-01.svg',
      title: 'Collaboration',
      description:
        'Want to colab with us? We would be happy if our banner helps. Contact us through email and get your quote.',
    },
    {
      img: '/images/features-icon-02.svg',
      title: 'Experiences',
      description:
        'Want a live experience at our place? Book a DJ show or a musical journey night and enjoy the elixir in music.',
    },
  ];

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-aspekta text-xl font-[650] mb-5">
          We not just play music, we are much more than that
        </h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <a
              key={index}
              className="rounded-lg border border-slate-300 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
              href="#0"
            >
              <div className="flex flex-col h-full">
                <div className="grow">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full mb-2">
                    <Image
                      className="mb-3"
                      src={project.img}
                      width={56}
                      height={56}
                      alt={project.title}
                    />
                  </div>
                  <div className="text-lg font-aspekta font-[650] mb-1">
                    {project.title}
                  </div>
                  <p className="text-sm text-slate-500 mb-2">
                    {project.description}
                  </p>
                </div>
                <div className="text-sky-500 flex justify-end">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="12"
                  >
                    <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
