export const metadata = { title: "Curated Gifting — Casual Carry" };

export default function GiftingPage() {
  return (
    <div className="page-shell pt-space-xl pb-space-2xl flex flex-col items-center text-center min-h-[50vh] justify-center">
      <span aria-hidden="true" className="font-headline-md text-headline-md text-primary mb-space-sm">CC</span>
      <h1 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
        Curated Gifting
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
        Explore gift-worthy silhouettes in the collection. Personalisation and gift-box requests will open with the online atelier.
      </p>
    </div>
  );
}
