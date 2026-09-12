export const metadata = { title: "Terms & Conditions — Casual Carry" };

export default function TermsPage() {
  return (
    <article className="page-shell py-space-xl lg:py-space-2xl">
      <div className="max-w-3xl">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Information</span>
        <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl mt-space-xs mb-space-lg">Terms &amp; Conditions</h1>
        <div className="space-y-space-lg font-body-md text-body-md text-on-surface-variant leading-relaxed">
          <section><h2 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Catalog status</h2><p>This website currently presents the Casual Carry collection for browsing and enquiry. It does not accept orders, payments, account registrations, or reservations. Product availability is confirmed only through direct communication with the atelier.</p></section>
          <section><h2 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Product information</h2><p>Leather is a natural material, so grain, colour, and patina may vary from the photographs. We aim to keep descriptions and indicative prices accurate, but details may change before online sales open.</p></section>
          <section><h2 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Creative ownership</h2><p>Website copy, photography, product names, branding, and design are owned by or licensed to Casual Carry. They may not be reproduced for commercial use without written permission.</p></section>
          <section><h2 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Contact</h2><p>Questions about these terms can be sent to <a className="text-primary underline" href="mailto:hello@casualcarry.in">hello@casualcarry.in</a>.</p></section>
        </div>
      </div>
    </article>
  );
}
