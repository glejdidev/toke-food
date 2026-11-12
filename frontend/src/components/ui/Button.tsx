import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
type ButtonProps = {
  children: ReactNode;
  to: string;
  variant?: "primary" | "text";
  className?: string;
};

const Button = ({
  children,
  to,
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center text-xs gap-3 font-semibold transition-colors duration-300 group";
  const variantClasses =
    variant === "primary"
      ? "bg-brand text-white rounded-full px-8 py-4 hover:bg-brand-hover"
      : "border-b text-brand border-brand pb-1 hover:text-sage";
  return (
    <Link to={to} className={`${baseClasses} ${variantClasses} ${className} mt-3 md:mt-6`}>
      {children}
      <span
        className="transition-transform duration-300 group-hover:translate-x-1 "
        aria-hidden="true"
      >
       
        {variant === "primary" ? <ArrowUpRight size={15} /> : <ArrowRight  size={15}/>}
      </span>
    </Link>
  );
};

export default Button;
