"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product, formatInr } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const [showAlt, setShowAlt] = useState(false);

  return (
    <article className="flex flex-col group">
      <div
        className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-low mb-space-xs transition-transform duration-300 active:scale-[0.99] cursor-pointer"
        onClick={() => product.altImage && setShowAlt((v) => !v)}
      >
        <Image
          src={showAlt && product.altImage ? product.altImage : product.image}
          alt={
            showAlt && product.altImageAlt
              ? product.altImageAlt
              : product.imageAlt
          }
          fill
          className="object-cover object-center transition-opacity duration-300"
          sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
        />

        {product.altImage && (
          <div className="absolute bottom-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-surface/75 backdrop-blur-md">
            <span
              className={`w-1.5 h-1.5 rounded-full ${showAlt ? "bg-outline-variant" : "bg-primary"}`}
            />
            <span
              className={`w-1.5 h-1.5 rounded-full ${showAlt ? "bg-primary" : "bg-outline-variant"}`}
            />
          </div>
        )}

        {product.badge && (
          <div className="absolute top-2 left-2">
            <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      <Link href={`/product/${product.slug}`} className="flex flex-col items-start text-left">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary mb-0.5">
          {product.silhouette}
        </span>
        <h2 className="font-headline-sm text-headline-sm text-on-surface font-normal leading-snug group-hover:text-primary transition-colors">
          {product.name}
        </h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">
          {product.colorway}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="font-headline-sm text-headline-sm text-on-surface">
            {formatInr(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="font-label-sm text-label-sm text-outline line-through">
              {formatInr(product.compareAtPrice)}
            </span>
          )}
        </div>
      </Link>
    </article>
  );
}
