"use client";

import Image from "next/image";
import Link from "next/link";
import { useNavDrawer } from "./NavDrawerContext";

export default function Header() {
  const { toggle, isOpen } = useNavDrawer();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/95 backdrop-blur-xl border-b border-outline-variant/25 pt-safe">
      <div className="h-16 md:h-20 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-[1440px] mx-auto flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-sm">
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={toggle}
            className="h-11 md:hidden flex items-center justify-center font-label-md text-label-md uppercase tracking-widest text-on-surface hover:text-primary transition-colors"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
          <Link href="/" aria-label="Casual Carry home">
            <Image
              src="/images/logo.png"
              alt="Casual Carry"
              width={160}
              height={46}
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
          </Link>
        </div>
        <nav
          className="hidden md:flex items-center gap-space-lg"
          aria-label="Primary navigation"
        >
          <Link
            href="/catalog"
            className="font-label-md text-label-md uppercase tracking-widest text-on-surface hover:text-primary transition-colors"
          >
            Collection
          </Link>
          <Link
            href="/journal/leather-care"
            className="font-label-md text-label-md uppercase tracking-widest text-on-surface hover:text-primary transition-colors"
          >
            Craft &amp; Care
          </Link>
          <Link
            href="/gifting"
            className="font-label-md text-label-md uppercase tracking-widest text-on-surface hover:text-primary transition-colors"
          >
            Gifting
          </Link>
          <a
            href="mailto:casualcarrycc@gmail.com"
            className="inline-flex items-center px-space-md py-space-xs rounded-full border border-primary/35 text-primary font-label-md text-label-md uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-colors"
          >
            Enquire
          </a>
        </nav>
        <Link
          href="/catalog"
          className="md:hidden font-label-md text-label-md uppercase tracking-widest text-primary"
        >
          Catalog
        </Link>
      </div>
    </header>
  );
}
