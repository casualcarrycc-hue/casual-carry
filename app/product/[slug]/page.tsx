import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductBySlug, formatInr } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <div className="page-shell pt-space-md md:pt-space-xl pb-space-2xl">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-space-lg lg:gap-space-2xl lg:items-start">
      <div className="relative w-full aspect-[4/5] md:aspect-[16/11] lg:aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-low">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          className="object-cover object-center"
          priority
        />
        {product.badge && (
          <div className="absolute top-2 left-2">
            <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      <div className="lg:sticky lg:top-28 lg:py-space-lg"><span className="font-label-sm text-label-sm uppercase tracking-widest text-primary mb-0.5 block">
        {product.silhouette}
      </span>
      <h1 className="font-headline-lg text-headline-lg md:font-headline-xl md:text-headline-xl text-on-surface font-normal mb-space-xs">
        {product.name}
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm">
        {product.colorway}
      </p>
      <div className="flex items-baseline gap-2 mb-space-lg">
        <span className="font-headline-md text-headline-md text-on-surface">
          {formatInr(product.price)}
        </span>
        {product.compareAtPrice && (
          <span className="font-label-md text-label-md text-outline line-through">
            {formatInr(product.compareAtPrice)}
          </span>
        )}
      </div>

      <div className="p-space-md bg-surface-container-low rounded-xl mb-space-lg">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Catalog preview</span>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">Online purchasing is not open yet. Contact the atelier for availability, dimensions, or material details.</p>
        <a href={`mailto:hello@casualcarry.in?subject=Enquiry about ${encodeURIComponent(product.name)}`} className="inline-flex mt-space-md px-space-lg py-space-sm rounded-lg bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-widest">Enquire about this piece</a>
      </div>

      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-sm">
        Full-grain, vegetable-tanned leather finished by hand with solid
        sand-cast hardware. Structured to hold its shape from morning
        commute to evening wind-down.
      </p>

      <Link
        href="/journal/leather-care"
        className="font-label-md text-label-md uppercase tracking-wider text-primary hover:underline"
      >
        Read the leather care guide →
      </Link>
      </div>
      </div>
    </div>
  );
}
