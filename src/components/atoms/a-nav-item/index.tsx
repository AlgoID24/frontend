"use client";

import { NavType } from "@/constants/navigation/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  nav: NavType;
}

const NavItem: React.FC<Props> = ({ nav }) => {
  const pathname = usePathname();

  return (
    <Link
      href={nav.href}
      data-active={
        nav.href === "/app"
          ? nav.href === pathname
          : pathname.startsWith(nav.href)
      }
      className="flex text-white p-4 rounded-lg items-center data-[active=true]:bg-primary gap-2 transition-all hover:bg-primary/60 font-medium"
    >
      {nav.icon && <span>{nav.icon}</span>}
      <span>{nav.title}</span>
    </Link>
  );
};

export default NavItem;
