"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navbar = ({
  navItems,
}: {
  navItems: { name: string; link: string; icon?: JSX.Element }[];
}) => {
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[5000]  backdrop-blur-md border-b border-white/10"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo ou nom du site */}
        <Link href="/" className="text-white text-xl font-bold tracking-wide">
          MSN
        </Link>
        <div className="flex items-center space-x-6">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="text-white/90 hover:text-purple transition-colors text-base font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
