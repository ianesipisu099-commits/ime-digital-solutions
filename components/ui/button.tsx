"use client";

import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
  asChild?: boolean;
  children: React.ReactNode;
};

export function Button({
  className,
  variant = "default",
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const styles =
    variant === "outline"
      ? "border bg-white text-gray-900 hover:bg-gray-50"
      : "bg-gray-900 text-white hover:bg-gray-800";

  const combined = cn(base, styles, className);

  if (asChild) {
    // Clone the only child and inject className
    const child = React.Children.only(children) as React.ReactElement<any>;
    return React.cloneElement(child, {
      className: cn(child.props?.className, combined),
    });
  }

  return (
    <button className={combined} {...props}>
      {children}
    </button>
  );
}
