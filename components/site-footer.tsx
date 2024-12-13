"use client";

import { useRef } from "react";
import Image from "next/image";

export function SiteFooter() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <footer className="relative py-6 md:py-0 mt-16">
      <div
        className="absolute top-0 h-px w-full"
        style={{
          background:
            "radial-gradient(50% 100% at 50% 100%,rgba(255,255,255,.32) 0%,rgba(255,255,255,0) 100%)",
        }}
      ></div>
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <div className="flex flex-col items-center gap-x-2 md:flex-row">
          <h3 className="font-inter">Built with:</h3>
          <ul className="mt-3 flex items-center gap-x-2 text-sm text-zinc-400 dark:text-zinc-600 md:mt-0">
            <li>
              <a
                href="https://www.nextjs.org"
                rel="noreferrer noopener"
                target="_blank"
                className="flex items-center gap-x-2 text-zinc-600 hover:underline dark:text-white"
              >
                <Image
                  alt="Next logo"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  src="/images/nextjs.svg"
                />
                Next JS
              </a>
            </li>
            <li>
              <a
                href="https://www.framer.com/motion/component/"
                rel="noreferrer noopener"
                target="_blank"
                className="flex items-center gap-x-2 text-zinc-600 hover:underline dark:text-white"
              >
                <Image
                  alt="Framer Motion logo"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  src="/images/framer.svg"
                />
                Framer Motion
              </a>
            </li>
            <li>
              <a
                href="https://tailwindcss.com/"
                rel="noreferrer noopener"
                target="_blank"
                className="flex items-center gap-x-2 text-zinc-600 hover:underline dark:text-white"
              >
                <Image
                  alt="Tailwind CSS logo"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  src="/images/tailwindcss.svg"
                />
                Tailwind CSS
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          Made with{" "}
          <span className="cursor-pointer" onClick={toggleMusic}>
            ❤️
          </span>{" "}
          by Metamorix Team
        </div>
        <audio ref={audioRef} src="/uwu.mp3" />
      </div>
    </footer>
  );
}
