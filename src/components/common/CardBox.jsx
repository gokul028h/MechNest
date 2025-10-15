import React from "react";
import clsx from "clsx";

export default function CardBox({ children, className, as: Component = 'div', ...props }) {
  return (
    <Component
      className={clsx("bg-white rounded-2xl shadow-lg transition hover:shadow-xl", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
