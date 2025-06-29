import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: ReactNode;
  children?: ReactNode;
}

export default function Button({ text, children, ...props }: ButtonProps) {
  return (
    <button className="uppercase font-[600] text-balance flex gap-4 items-center tracking-[0.75rem] xl:text-[1.125rem] xl:font-[700]" {...props}>
      {text}
      {children}
    </button>
  );
}