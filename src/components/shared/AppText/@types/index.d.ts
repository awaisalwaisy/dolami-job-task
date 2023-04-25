import { ElementType } from "react";

type Size =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl";

type Color = "dark" | "light";

type Align = "left" | "center" | "right" | "justify";
type Weight = "normal" | "medium" | "semibold" | "bold" | "extrabold";
type Decor = "underline" | "overline" | "line-through" | "no-underline";

interface AppTextProps {
  readonly as: Tag;
  readonly children: React.ReactNode;
  readonly color?: Color;
  readonly size?: Size;
  readonly align?: Align;
  readonly weight?: Weight;
  readonly decor?: Decor;
  readonly className?: string[] | string;
  readonly style?: React.CSSProperties;
}

interface NavbarAccountBtn {
  readonly id: number;
  readonly icon?: ElementType;
  readonly img?: string;
}
export { Size, Color, Align, Weight, Decor, AppTextProps, NavbarAccountBtn };
