export type Platform = "fanvue" | "x" | "instagram" | "threads" | "tiktok";

export type LinkItem = {
  label: string;
  href: string;
  platform: Platform;
};

export const FANVUE_LINK: LinkItem = {
  label: "Fanvue",
  href: "https://www.fanvue.com/your-leila",
  platform: "fanvue",
};

export const SOCIAL_LINKS: LinkItem[] = [
  {
    label: "X",
    href: "https://x.com/your_leila_",
    platform: "x",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/your_leila_/",
    platform: "instagram",
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@your_leila_",
    platform: "threads",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@your_leila_",
    platform: "tiktok",
  },
];
