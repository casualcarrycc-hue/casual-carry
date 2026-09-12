import { Suspense } from "react";
import CatalogContent from "@/components/CatalogContent";

export const metadata = {
  title: "The Collection — Casual Carry",
  description:
    "Browse the Casual Carry catalog: structured totes, saddle slings, and evening minis in full-grain leather.",
};

export default function CatalogPage() {
  return (
    <Suspense fallback={null}>
      <CatalogContent />
    </Suspense>
  );
}
