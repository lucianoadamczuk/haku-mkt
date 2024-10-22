"use client";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";
import "./ViewTransition.css";

interface Props {
  children: ReactNode;
}

export default function ViewTransition({ children }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    const container = document.querySelector(".transitionContainer");
    if (container) {
      container.classList.remove("pageTransition");

      requestAnimationFrame(() => {
        container.classList.add("pageTransition");
      });
    }
  }, [pathname]);

  return <div className="transitionContainer">{children}</div>;
}
