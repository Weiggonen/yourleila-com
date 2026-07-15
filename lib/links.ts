export type Platform = "fanvue";

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
