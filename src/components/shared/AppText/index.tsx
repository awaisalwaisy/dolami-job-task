import { AppTextProps, Color, Size, Align, Weight, Decor } from "./@types";

const AppText: React.FC<AppTextProps> = ({
  as,
  children,
  size,
  color,
  ...rest
}) => {
  const colorVariants = {
    dark: "text-dark",
    light: "text-white",
  };

  const sizeVariants = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
  };

  const alignVariants = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  const weightVariants = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  const decorVariants = {
    underline: "underline",
    overline: "overline",
    "line-through": "line-through",
    "no-underline": "no-underline",
  };

  const classes = [
    colorVariants[color as Color],
    sizeVariants[size as Size],
    alignVariants[rest.align as Align],
    weightVariants[rest.weight as Weight],
    decorVariants[rest.decor as Decor],
    rest.className,
  ];

  /* const sizes: Record<Variant, string> = {
    h1: "text-5xl font-bold sm:text-4xl",
    h2: "text-4xl font-bold sm:text-3xl",
    h3: "text-3xl font-bold sm:text-2xl",
    h4: "text-2xl font-bold sm:text-1xl",
    h5: "text-xl font-bold sm:text-lg",
    body: "text-lg sm:text-md",
    "body-small": "text-md sm:text-sm",
    small: "text-sm sm:text-xs",
  }; */

  // const sizeClasses = sizes[variant];
  // const Tag = as || tags[variant];

  const Tag = as;

  return <Tag className={classes.join(" ")}>{children}</Tag>;
};

export default AppText;
