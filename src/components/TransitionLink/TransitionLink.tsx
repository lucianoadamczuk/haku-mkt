"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { ReactNode } from "react";

interface Props {
  className: string;
  href: string;
  children: ReactNode;
}
export default function TransitionLink({ className, href, children }: Props) {
  const router = useRouter();

  function handleNavigation(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const body = document.querySelector("body");
    body?.classList.add("pageTransition");

    setTimeout(() => {
      router.push(href);
    }, 1000);

    setTimeout(() => {
      body?.classList.remove("pageTransition");
    }, 2000);
  }

  return (
    <Link className={className} href={href} onClick={handleNavigation}>
      {children}
    </Link>
  );
}
