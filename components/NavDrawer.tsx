"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useNavDrawer } from "./NavDrawerContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "The Collection" },
  { href: "/catalog?category=slings", label: "Slings & Crossbody" },
  { href: "/catalog?category=totes", label: "Structured Totes" },
  { href: "/journal/leather-care", label: "Leather & Care" },
  { href: "/gifting", label: "Curated Gifting" },
];

export default function NavDrawer() {
  const { isOpen, close } = useNavDrawer();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && close();
    const previous = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [isOpen, close]);

  return (
    <>
      <div
        aria-hidden={!isOpen}
        onClick={close}
        className={`md:hidden fixed inset-0 z-40 bg-on-surface/40 backdrop-blur-md transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />
      <aside
        aria-label="Catalog navigation"
        aria-hidden={!isOpen}
        className={`md:hidden fixed top-0 left-0 bottom-0 z-50 w-[88%] max-w-[360px] bg-surface shadow-[12px_0_48px_rgba(28,26,23,0.18)] overflow-y-auto pt-safe pb-safe transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="px-margin-mobile py-space-md flex items-center justify-between border-b border-outline-variant/30">
          <Image
            src="/images/logo.png"
            alt="Casual Carry"
            width={140}
            height={40}
            className="h-8 w-auto"
          />
          <button
            onClick={close}
            aria-label="Close navigation"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <nav className="px-margin-mobile py-space-lg flex flex-col gap-space-md">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.24em] text-primary">
            Catalog Directory
          </span>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="font-headline-md text-headline-md text-on-surface hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mx-margin-mobile rounded-xl overflow-hidden bg-surface-container-low">
          <div className="relative aspect-[16/9]">
            <Image
              src="/images/product-green-macro.jpg"
              alt="Bottle green leather and brass craftsmanship detail"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-space-md">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
              Made with considered slowness
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
              Discover the materials and care behind every piece.
            </p>
          </div>
        </div>
        <div className="px-margin-mobile py-space-lg mt-space-lg border-t border-outline-variant/30 flex flex-col items-start gap-space-xs">
          <a
            href="mailto:casualcarrycc@gmail.com"
            className="font-label-md text-label-md uppercase tracking-widest text-primary"
          >
            casualcarrycc@gmail.com
          </a>
          <a href="tel:+919027002614" className="font-label-md text-label-md uppercase tracking-widest text-primary">
            +91 90270 02614
          </a>
          <a href="https://www.instagram.com/casualcarrycc/" target="_blank" rel="noreferrer" className="font-label-md text-label-md uppercase tracking-widest text-primary">
            Instagram · @casualcarrycc
          </a>
        </div>
      </aside>
    </>
  );
}
