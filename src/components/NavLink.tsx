"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface INavLink extends LinkProps {
  children: ReactNode;
}

export function NavLink({ children, ...rest }: INavLink) {
  const path = usePathname();

  return (
    <Link
      {...rest}
      data-active={path === rest.href}
      className="px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors w-fit data-[active=true]:border-cyan-400"
    >
      {children}
    </Link>
  );
}
