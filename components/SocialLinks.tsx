import { SOCIAL_LINKS } from "@/lib/links";
import { TrackableLink } from "./TrackableLink";

export function SocialLinks() {
  return (
    <nav aria-label="Social links" className="flex w-full flex-col gap-3">
      {SOCIAL_LINKS.map((link) => (
        <TrackableLink
          key={link.platform}
          href={link.href}
          platform={link.platform}
          className="flex w-full items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-medium tracking-wide text-white backdrop-blur-md transition-[border-color,background-color,transform] hover:border-green-200/50 hover:bg-green-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-200 motion-safe:hover:scale-[1.01]"
        >
          {link.label}
        </TrackableLink>
      ))}
    </nav>
  );
}
