import Image from "next/image";
import Link from "next/link";
import { Product, formatInr } from "@/lib/products";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <article className="flex flex-col group">
      <Link href={`/product/${product.slug}`} className="flex flex-col items-start text-left">
        <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-low mb-space-xs">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority={priority}
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
          />
          {product.badge && (
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider">
              {product.badge}
            </span>
          )}
        </div>
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
