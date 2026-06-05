"use client";

import { track } from "@vercel/analytics";
import type { Platform } from "@/lib/links";

type TrackableLinkProps = {
  href: string;
  platform: Platform;
  className?: string;
  children: React.ReactNode;
};

export function TrackableLink({
  href,
  platform,
  className,
  children,
}: TrackableLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => track("link_click", { platform })}
    >
      {children}
    </a>
  );
}
