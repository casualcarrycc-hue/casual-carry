export const metadata = { title: "Privacy Policy — Casual Carry" };

export default function PrivacyPage() {
  return (
    <article className="page-shell py-space-xl lg:py-space-2xl">
      <div className="max-w-3xl">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Information</span>
        <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl mt-space-xs mb-space-lg">Privacy Policy</h1>
        <div className="space-y-space-lg font-body-md text-body-md text-on-surface-variant leading-relaxed">
          <section><h2 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Catalog-only experience</h2><p>This version of the website does not provide customer accounts, checkout, wishlists, booking forms, or newsletter registration. We therefore do not ask you to submit personal information through the website.</p></section>
          <section><h2 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Direct enquiries</h2><p>If you contact us by email, the information you choose to provide is used only to respond to your enquiry and maintain the related correspondence.</p></section>
          <section><h2 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Future services</h2><p>This notice will be updated before ecommerce, customer accounts, analytics requiring consent, or other data-backed services are introduced.</p></section>
          <section><h2 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Contact</h2><p>Privacy questions can be sent to <a className="text-primary underline" href="mailto:hello@casualcarry.in">hello@casualcarry.in</a>.</p></section>
        </div>
      </div>
    </article>
  );
}
