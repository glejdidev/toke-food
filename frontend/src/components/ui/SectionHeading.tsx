import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  children: ReactNode;
  highlight: string;
  subtitle?: string;
  theme?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
};

const SectionHeading = ({
  eyebrow = "",
  children,
  highlight = "",
  subtitle = "",
  theme = "light",
  align = "left",
  className = "",
}: SectionHeadingProps) => {
  const alignClasses = align === "center" ? "text-center" : "text-left";
  const eyebrowColor = theme === "light" ? "text-sage" : "text-lime";
  const headingColor = theme === "light" ? "text-brand" : "text-white";
  const lightHeading = theme === "light" ? "text-sage" : "text-lime";
  const subtitleColor = theme === "light" ? "text-gray-500" : "text-white/70";

  return (
    <div className={`${alignClasses} ${className}`}>
      {eyebrow && <p className={`${eyebrowColor} font-body block text-sm font-semibold uppercase tracking-widest`}>{eyebrow}</p>}
      <h2 className={`${headingColor} font-heading text-4xl font-bold md:text-6xl lg:text-7xl mt-8`}>{children}<span className={`${lightHeading}`}>{highlight}</span></h2>
      {subtitle && <p className={`${subtitleColor} font-body text-lg leading-relaxed`}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
