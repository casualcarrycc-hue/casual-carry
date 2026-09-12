import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";

export default function HomePage() {
  const bestsellers = PRODUCTS;

  return (
    <div className="flex flex-col w-full">
      {/* Asymmetric hero */}
      <section className="page-shell pt-space-lg md:pt-space-xl pb-space-xl lg:pb-space-2xl">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center gap-space-lg lg:gap-space-2xl">
          <div className="relative aspect-[5/6] md:aspect-[16/10] lg:aspect-[5/6] rounded-xl overflow-hidden -mx-margin-mobile w-[calc(100%+2.5rem)] md:mx-0 md:w-full">
            <Image
              src="/images/product-green-crossbody.jpg"
              alt="Verdant Saddle Sling staged on a white plinth beside dried wheat stems"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 90vw, 55vw"
            />
          </div>
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-space-xs">
              The Permanent Collection &middot; The Structured Edit
            </span>
            <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-display-hero md:text-display-hero text-on-surface leading-tight mb-space-sm">
              Style that speaks. Comfort that stays.
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-prose mb-space-md leading-relaxed">
              Full-grain, vegetable-tanned leather carried by hand for
              everyday poise &mdash; each piece finished by artisans in
              Kolkata and Chennai.
            </p>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 px-space-lg py-space-sm rounded-lg bg-secondary text-on-secondary font-label-md text-label-md uppercase tracking-widest shadow-sm hover:bg-primary transition-colors"
            >
              Browse the Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Browse by silhouette */}
      <section className="page-shell pb-space-xl">
        <div className="mb-space-md flex items-baseline justify-between">
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Browse by Silhouette
          </h2>
        </div>
        <div className="flex gap-space-sm overflow-x-auto pb-space-xs no-scrollbar md:flex-wrap">
          {[
            { label: "All Pieces", category: "" },
            { label: "Crossbody & Slings", category: "slings" },
            { label: "Structured Totes", category: "totes" },
            { label: "Handbags", category: "handbags" },
          ].map((edit) => (
            <Link
              key={edit.label}
              href={edit.category ? `/catalog?category=${edit.category}` : "/catalog"}
              className="shrink-0 px-space-lg py-space-sm rounded-full bg-surface-container text-on-surface font-label-md text-label-md uppercase tracking-wider whitespace-nowrap hover:bg-surface-container-high transition-colors"
            >
              {edit.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="page-shell pb-space-2xl">
        <div className="flex items-baseline justify-between mb-space-md">
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Bestsellers
          </h2>
          <Link
            href="/catalog"
            className="font-label-md text-label-md uppercase tracking-wider text-primary hover:underline"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-gutter-mobile md:gap-x-gutter gap-y-space-lg">
          {bestsellers.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Brand story band */}
      <section className="page-shell pb-space-2xl">
        <div className="relative rounded-xl bg-surface-container p-space-lg md:p-space-xl overflow-hidden md:grid md:grid-cols-[0.7fr_1.3fr] md:gap-space-xl md:items-end">
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-secondary/10 blur-2xl pointer-events-none" />
          <div><span className="font-label-md text-label-sm uppercase tracking-widest text-primary block mb-space-xs">
            Est. 2021 &middot; New Delhi
          </span>
          <h3 className="font-headline-md text-headline-md md:font-headline-xl md:text-headline-xl text-on-surface mb-space-xs leading-tight">
            Style in Hand.
          </h3></div>
          <p className="font-body-md text-body-md md:font-body-lg md:text-body-lg text-on-surface-variant max-w-prose leading-relaxed">
            Every Casual Carry piece begins as raw, vegetable-tanned hide and
            ends as something you&rsquo;ll carry for years &mdash; developing
            its own patina, its own story, in your hand.
          </p>
        </div>
      </section>
    </div>
  );
}
