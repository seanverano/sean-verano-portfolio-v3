import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Button = (
  props: {
    variant: "primary" | "secondary" | "text";
    iconAfter?: ReactNode;
    iconBefore?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { className, children, variant, iconAfter, iconBefore, ...rest } =
    props;
  return (
    <button
      className={twMerge(
        "h-11 px-6 rounded-xl border uppercase inline-flex items-center gap-2 transition duration-500 relative group/button",
        variant == "primary" &&
          "bg-[#8046F3] border-transparent text-white hover:bg-[#3C3C3C]",
        variant == "secondary" &&
          "bg-[#3C3C3C] text-bold border-transparent text-white hover:bg-[#8046F3]",
        variant == "text" &&
          "h-auto px-0 border-transparent after:transition-all after:duration-500 after:content-[''] after:h-px after:w-0 after:absolute after:top-full after:bg-[#8046F3] hover:after:w-full hover:text-[#8046F3]",
        className
      )}
      {...rest}
    >
      {iconBefore && <span>{iconBefore}</span>}
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
};

export default Button;
