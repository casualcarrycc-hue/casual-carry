"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/", label: "Atelier", icon: "home" },
  { href: "/catalog", label: "Collection", icon: "grid_view" },
  { href: "/journal/leather-care", label: "Stories", icon: "auto_stories" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 pb-safe bg-surface/95 backdrop-blur-xl shadow-[0_-4px_24px_rgba(28,26,23,0.04)]">
      <div className="flex justify-around items-center h-16 px-space-xs">
        {TABS.map((tab) => {
          const active = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={active ? "page" : undefined}
              className={`flex flex-col items-center justify-center min-w-[56px] h-11 gap-0.5 transition-colors ${
                active
                  ? "text-primary font-semibold"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <span className="font-label-sm text-label-sm uppercase tracking-widest">
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
