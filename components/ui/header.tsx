import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/images/logo.svg';
import { useRef, useState } from 'react';

export default function Header({ nav = true }: { nav?: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="block" href="/" aria-label="pancaronadev">
              <Image
                className=""
                src={Logo}
                width={40}
                height={40}
                alt="Logo"
              />
            </Link>
          </div>
          {/* Desktop navigation */}
          {nav && (
            <nav className="flex grow">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li className="ml-3">
                  <Link
                    className="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group"
                    href="/"
                  >
                    Get Started
                  </Link>
                </li>
                <li className="ml-3">
                  <audio ref={audioRef} src="/images/bgmusic.mp3" loop />
                  <button
                    className="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group"
                    onClick={handlePlayMusic}
                  >
                    {isPlaying ? 'Pause Music' : 'Play Music'}
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
