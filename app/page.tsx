import Image from "next/image";
import { AgeGate } from "@/components/AgeGate";
import { FanvueHero } from "@/components/FanvueHero";
import { SocialLinks } from "@/components/SocialLinks";

export default function Home() {
  return (
    <>
      <div className="relative min-h-svh w-full overflow-hidden">
        <Image
          src="/leila-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
          aria-hidden="true"
        />

        <main className="relative z-10 flex min-h-svh flex-col justify-end px-5 pb-10 pt-24 sm:px-6 sm:pb-14">
          <div className="mx-auto flex w-full max-w-md flex-col gap-6">
            <h1 className="text-center font-serif text-3xl tracking-[0.15em] text-white drop-shadow-lg sm:text-4xl">
              @your_leila_
            </h1>

            <FanvueHero />
            <SocialLinks />
          </div>
        </main>
      </div>

      <AgeGate />
    </>
  );
}
