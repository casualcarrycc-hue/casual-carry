"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/lib/products";

const categories = [
  { key: "", label: "All Pieces" },
  { key: "slings", label: "Crossbody & Slings" },
  { key: "totes", label: "Structured Totes" },
  { key: "handbags", label: "Handbags" },
];

export default function CatalogContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") ?? "");
  useEffect(() => {
    setActiveCategory(searchParams.get("category") ?? "");
  }, [searchParams]);
  const filtered = useMemo(
    () => activeCategory ? PRODUCTS.filter((product) => product.category === activeCategory) : PRODUCTS,
    [activeCategory],
  );

  return (
    <div className="flex flex-col w-full">
      <section className="page-shell pt-space-lg md:pt-space-xl pb-space-lg md:pb-space-xl">
        <div className="md:grid md:grid-cols-[0.8fr_1.2fr] md:gap-space-2xl md:items-end">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">The permanent collection</span>
            <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl lg:font-display-hero lg:text-display-hero text-on-surface mt-space-xs">The Structured Edit</h1>
          </div>
          <p className="font-body-md text-body-md md:font-body-lg md:text-body-lg text-on-surface-variant leading-relaxed max-w-2xl mt-space-sm md:mt-0">
            Full-grain, vegetable-tanned leather sculpted for everyday poise. Each piece is shaped and finished by hand in India.
          </p>
        </div>
        <div className="flex gap-space-sm overflow-x-auto pt-space-lg pb-space-xs no-scrollbar md:flex-wrap" aria-label="Filter by bag style">
          {categories.map((category) => {
            const count = category.key ? PRODUCTS.filter((product) => product.category === category.key).length : PRODUCTS.length;
            const active = activeCategory === category.key;
            return (
              <button key={category.key || "all"} onClick={() => setActiveCategory(category.key)} className={`px-space-md py-space-xs rounded-full font-label-md text-label-md uppercase tracking-wider whitespace-nowrap transition-colors ${active ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"}`}>
                {category.label} <span className="opacity-70">({count})</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="page-shell pb-space-xl lg:pb-space-2xl">
        {filtered.length ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-gutter-mobile md:gap-x-gutter gap-y-space-lg lg:gap-y-space-xl">
            {filtered.map((product, index) => <ProductCard key={product.slug} product={product} priority={index === 0} />)}
          </div>
        ) : (
          <div className="rounded-xl bg-surface-container-low p-space-xl text-center">
            <h2 className="font-headline-md text-headline-md">This silhouette is being prepared.</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">Explore all pieces while the next atelier batch takes shape.</p>
            <button onClick={() => setActiveCategory("")} className="mt-space-md font-label-md text-label-md uppercase tracking-widest text-primary">View all pieces</button>
          </div>
        )}
      </section>

      <section className="page-shell pb-space-2xl">
        <div className="relative rounded-xl bg-secondary text-on-secondary p-space-lg md:p-space-xl lg:p-space-2xl overflow-hidden md:grid md:grid-cols-[1.2fr_0.8fr] md:gap-space-xl md:items-end">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-secondary-container/10 blur-2xl" />
          <div className="relative">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">Material note · vegetable tanned</span>
            <h2 className="font-headline-md text-headline-md md:font-headline-xl md:text-headline-xl mt-space-xs">Leather made to change with you.</h2>
          </div>
          <div className="relative mt-space-md md:mt-0">
            <p className="font-body-md text-body-md text-secondary-fixed leading-relaxed">Natural bark extracts preserve the grain without masking it. Time, touch, and use create a patina unique to its owner.</p>
            <Link href="/journal/leather-care" className="inline-flex mt-space-md font-label-md text-label-md uppercase tracking-widest text-on-secondary border-b border-on-secondary/50">Read the care journal</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
