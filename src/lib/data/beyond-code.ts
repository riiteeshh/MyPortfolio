import type { LucideIcon } from "lucide-react";
import { Palette, Trophy } from "lucide-react";

export interface BeyondCodeItem {
  title: string;
  body: string;
  icon: LucideIcon;
}

export const BEYOND_CODE: BeyondCodeItem[] = [
  {
    title: "LITE Technical Exhibition",
    body: "Participated in 2019, and worked on the Graphic and Design Team in 2020.",
    icon: Palette,
  },
  {
    title: "Intra-college football tournament",
    body: "Organized a four-a-side football tournament during college.",
    icon: Trophy,
  },
];
