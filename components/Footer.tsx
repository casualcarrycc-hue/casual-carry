import Image from "next/image";
import Link from "next/link";

const explore = [
  { href: "/catalog", label: "The Collection" },
  { href: "/journal/leather-care", label: "Leather & Care" },
  { href: "/gifting", label: "Curated Gifting" },
];

const information = [
  { href: "/journal/leather-care", label: "Our Craft" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface pb-16 md:pb-0">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl lg:py-space-2xl">
        <div className="grid gap-space-xl md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1fr] lg:gap-space-2xl">
          <div className="max-w-sm">
            <Image
              src="/images/logo-footer.png"
              alt="Casual Carry"
              width={700}
              height={394}
              sizes="224px"
              className="w-56 h-auto rounded-lg mb-space-md"
            />
            <p className="font-body-md text-body-md text-inverse-on-surface/75 leading-relaxed">
              Considered leather bags, shaped by hand in India and designed to
              gather a story with every carry.
            </p>
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim mt-space-md">
              New Delhi, India
            </p>
          </div>
          <FooterColumn title="Explore" links={explore} />
          <FooterColumn title="Information" links={information} />
          <div>
            <h2 className="font-label-md text-label-md uppercase tracking-widest text-primary-fixed-dim mb-space-md">
              Connect
            </h2>
            <a
              href="mailto:casualcarrycc@gmail.com"
              className="block font-body-md text-body-md hover:text-primary-fixed-dim transition-colors"
            >
              casualcarrycc@gmail.com
            </a>
            <a
              href="tel:+919027002614"
              className="block font-body-md text-body-md hover:text-primary-fixed-dim transition-colors mt-space-xs"
            >
              +91 90270 02614
            </a>
            <div className="flex flex-wrap gap-space-sm mt-space-md">
              <a
                href="https://www.instagram.com/casualcarrycc/"
                target="_blank"
                rel="noreferrer"
                className="footer-social"
              >
                Instagram · @casualcarrycc
              </a>
            </div>
          </div>
        </div>
        <div className="mt-space-xl pt-space-md border-t border-inverse-on-surface/15 flex flex-col sm:flex-row gap-space-xs justify-between font-label-sm text-label-sm uppercase tracking-widest text-inverse-on-surface/55">
          <span>© {new Date().getFullYear()} Casual Carry</span>
          <span>Catalog preview · Purchases opening soon</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h2 className="font-label-md text-label-md uppercase tracking-widest text-primary-fixed-dim mb-space-md">
        {title}
      </h2>
      <ul className="space-y-space-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-body-md text-body-md text-inverse-on-surface/75 hover:text-primary-fixed-dim transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
