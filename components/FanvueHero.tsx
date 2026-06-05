import { FANVUE_LINK } from "@/lib/links";
import { TrackableLink } from "./TrackableLink";

function HeartIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect width="28" height="28" rx="8" fill="rgba(165, 214, 167, 0.2)" />
      <path
        d="M14 21.5s-6.5-4.2-8.5-7.8C3.8 10.5 5.2 7.5 8 7.5c1.6 0 3.1.9 4 2.3 0.9-1.4 2.4-2.3 4-2.3 2.8 0 4.2 3 2.5 6.2-2 3.6-8.5 7.8-8.5 7.8z"
        fill="#c8e6c9"
      />
    </svg>
  );
}

function AgeBadge() {
  return (
    <span
      className="absolute top-3 right-3 flex h-7 items-center rounded-full border border-green-200/60 bg-black/40 px-2.5 text-xs font-medium tracking-wide text-green-100"
      aria-label="Adults only, 18+"
    >
      18+
    </span>
  );
}

export function FanvueHero() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md">
      <AgeBadge />

      <div className="flex items-start gap-3">
        <HeartIcon />
        <div className="min-w-0 flex-1 pr-10">
          <h2 className="font-serif text-xl tracking-wide text-white">Fanvue</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/80">
            <strong className="font-medium text-white">Chat with me anytime.</strong>{" "}
            I&apos;m online 24/7 on Fanvue — message me directly and unlock
            exclusive content you won&apos;t find anywhere else.
          </p>
        </div>
      </div>

      <TrackableLink
        href={FANVUE_LINK.href}
        platform={FANVUE_LINK.platform}
        className="mt-5 flex w-full items-center justify-center rounded-full bg-green-200 px-6 py-3.5 text-sm font-medium tracking-wide text-black transition-[background-color,transform] hover:bg-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-200 motion-safe:hover:scale-[1.02]"
      >
        Visit Fanvue
      </TrackableLink>
    </div>
  );
}
