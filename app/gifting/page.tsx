export const metadata = { title: "Curated Gifting — Casual Carry" };

export default function GiftingPage() {
  return (
    <div className="page-shell pt-space-xl pb-space-2xl flex flex-col items-center text-center min-h-[50vh] justify-center">
      <span className="material-symbols-outlined text-primary text-[40px] mb-space-sm">
        redeem
      </span>
      <h1 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
        Curated Gifting
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
        Explore gift-worthy silhouettes in the collection. Personalisation and gift-box requests will open with the online atelier.
      </p>
    </div>
  );
}
