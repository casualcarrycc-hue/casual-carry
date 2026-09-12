export type Product = {
  slug: string;
  name: string;
  silhouette: string;
  colorway: string;
  price: number;
  compareAtPrice?: number;
  badge?: string;
  image: string;
  imageAlt: string;
  altImage?: string;
  altImageAlt?: string;
  category: "handbags" | "slings" | "totes" | "clutches" | "wallets";
};

export const PRODUCTS: Product[] = [
  {
    slug: "verdant-saddle-sling",
    name: "Verdant Saddle Sling",
    silhouette: "Saddle Crossbody",
    colorway: "Deep Bottle Green • Brass Clasp",
    price: 4890,
    compareAtPrice: 5490,
    badge: "Bestseller",
    image: "/images/product-green-crossbody.jpg",
    imageAlt:
      "Verdant Saddle Sling in rich bottle green leather displayed on a white plinth with dried wheat stems",
    altImage: "/images/product-green-macro.jpg",
    altImageAlt: "Macro detail of the brass turn-lock and saddle stitching",
    category: "slings",
  },
  {
    slug: "plinth-atelier-tote",
    name: "The Plinth Atelier Tote",
    silhouette: "Structured Tote",
    colorway: "Terracotta & Warm Tan",
    price: 6450,
    badge: "Atelier Batch",
    image: "/images/product-tan-tote.jpg",
    imageAlt:
      "The Plinth Atelier Tote in warm tan full-grain leather resting on a white pedestal against a torn-paper backdrop",
    category: "totes",
  },
  {
    slug: "crescent-day-crossbody",
    name: "Crescent Day Crossbody",
    silhouette: "Half-Moon Sling",
    colorway: "Blush Rose & Alabaster",
    price: 4250,
    badge: "New Hue",
    image: "/images/product-blush-saddle.jpg",
    imageAlt:
      "Crescent Day Crossbody in blush and cream two-tone leather resting on a textured white plinth",
    category: "slings",
  },
  {
    slug: "verdant-lock-sling",
    name: "Verdant Lock Sling",
    silhouette: "Craftsmanship Focus",
    colorway: "Heritage Brass Accents",
    price: 4890,
    image: "/images/product-green-macro.jpg",
    imageAlt:
      "Artisanal macro close-up of bottle green leather with a brass vintage turn-lock clasp",
    category: "handbags",
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function formatInr(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}
