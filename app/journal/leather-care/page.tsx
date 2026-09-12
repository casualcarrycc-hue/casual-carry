import Image from "next/image";
import CareAccordion from "@/components/CareAccordion";
import ClimateCalculator from "@/components/ClimateCalculator";

export const metadata = {
  title: "Living Leather: The Patina & Preservation Journal — Casual Carry",
};

export default function LeatherCarePage() {
  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* Masthead */}
      <section className="page-shell pt-space-lg md:pt-space-xl pb-space-md">
        <div className="flex items-center gap-space-xs mb-space-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="font-label-sm text-label-sm text-tertiary tracking-[0.2em] uppercase">
            Craft Dossier • Chapter IV
          </span>
        </div>
        <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl lg:font-display-hero lg:text-display-hero text-on-surface mb-space-sm leading-tight max-w-5xl">
          Living Leather:{" "}
          <span className="italic font-normal text-primary">
            The Patina &amp; Preservation
          </span>{" "}
          Journal
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-prose">
          Full-grain vegetable-tanned leather is not an inert object; it
          breathes, matures, and chronicles your daily movements. Here is how
          to honour its life.
        </p>
      </section>

      {/* Spotlight image */}
      <section className="page-shell mb-space-xl">
        <div className="bg-surface-container-low rounded-xl p-space-sm shadow-sm relative overflow-hidden">
          <div className="relative w-full aspect-[4/3] md:aspect-[16/8] rounded-lg overflow-hidden bg-surface-container">
            <Image
              src="/images/product-green-macro.jpg"
              alt="Macro studio photograph of a bottle-green full-grain leather crossbody bag showing saddle stitching and brass hardware"
              fill
              className="object-cover"
              sizes="(max-width: 767px) 100vw, 1280px"
            />
            <div className="absolute bottom-2 left-2 bg-surface/90 backdrop-blur-md px-space-sm py-space-xs rounded-lg shadow-sm">
              <span className="font-label-sm text-label-sm text-on-surface tracking-widest uppercase">
                Atelier Note • Specimen No. 14
              </span>
            </div>
          </div>
          <div className="p-space-sm pt-space-md flex items-start gap-space-sm">
            <span aria-hidden="true" className="text-primary text-[20px] mt-0.5">✓</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant italic">
              Botanical bark-tanned bovine hide showing authentic natural
              pebble grain and saddle-stitched wax thread.
            </p>
          </div>
        </div>
      </section>

      {/* Patina timeline */}
      <section className="page-shell mb-space-2xl">
        <div className="flex items-baseline justify-between mb-space-md">
          <div>
            <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest">
              Maturation Index
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              The Patina Timeline
            </h2>
          </div>
          <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">
            3 Epochs
          </span>
        </div>
        <div className="space-y-space-md relative max-w-4xl">
          <div className="absolute left-4 top-4 bottom-4 w-px bg-surface-container-highest" />

          {[
            {
              title: "Day 01: The Emergence",
              tag: "Crisp & Taut",
              body: "Matte finish, uniform botanical bark tone, structured silhouettes with fresh unworked grain pores. The leather holds its calibrated architectural tension.",
              dotClass: "bg-outline",
            },
            {
              title: "Month 06: The Awakening",
              tag: "Supple Ease",
              body: "Corners develop a soft, touch-burnished gleam. Vegetable oils begin migrating outwards, infusing warmth, subtle flexure, and gentle curvature into handle touchpoints.",
              dotClass: "bg-primary",
            },
            {
              title: "Year 03: Heirloom Soul",
              tag: "Indelible Story",
              body: "Unmistakable deep patina with honey-amber depth. Each water spot and palm contact mark melds into a singular, lustrous tapestry impossible to replicate.",
              dotClass: "bg-secondary",
            },
          ].map((stage) => (
            <div key={stage.title} className="relative pl-10">
              <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-surface-container-highest flex items-center justify-center -translate-x-1/2">
                <div className={`w-1.5 h-1.5 rounded-full ${stage.dotClass}`} />
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-space-xs">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    {stage.title}
                  </h3>
                  <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-tertiary">
                    {stage.tag}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {stage.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Care rituals */}
      <section className="page-shell mb-space-2xl">
        <div className="mb-space-md">
          <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest">
            Preservation Codex
          </span>
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Four Sacred Care Rituals
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Tap each principle to reveal artisanal maintenance techniques
            formulated for humid and arid microclimates.
          </p>
        </div>
        <div className="max-w-4xl"><CareAccordion /></div>
      </section>

      {/* Climate calculator */}
      <section className="page-shell mb-space-2xl">
        <div className="max-w-4xl"><ClimateCalculator /></div>
      </section>

      {/* Service information (booking is added when the commerce backend is ready) */}
      <section className="page-shell mb-space-xl">
        <div className="bg-secondary text-on-secondary rounded-xl p-space-lg shadow-md relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-secondary-container/10 pointer-events-none blur-2xl" />
          <div className="flex items-center gap-space-xs mb-space-xs text-secondary-fixed">
            <span className="font-label-sm text-label-sm tracking-[0.16em] uppercase">
              Lifelong Commitment
            </span>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-secondary mb-space-xs">
            The Atelier Restitch &amp; Spa Service
          </h2>
          <p className="font-body-md text-body-md text-secondary-fixed mb-space-lg leading-relaxed">
            Complimentary lifetime inspection, wax stitch replenishment, and
            restorative botanical nourishing at our master workshop in New
            Delhi.
          </p>
          <p className="font-label-md text-label-md uppercase tracking-widest text-secondary-fixed">Service appointments will open with the online atelier.</p>
        </div>
      </section>

      {/* Craft gallery */}
      <section className="page-shell mb-space-2xl">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-space-sm md:gap-gutter max-w-4xl">
          <div className="flex flex-col gap-space-xs">
            <div className="aspect-square bg-surface-container rounded-lg overflow-hidden relative">
              <Image
                src="/images/product-tan-tote.jpg"
                alt="Editorial close-up of hands applying beeswax balm to saddle-stitched leather"
                fill
                className="object-cover"
                sizes="(max-width: 767px) 50vw, 420px"
              />
            </div>
            <span className="font-label-sm text-label-sm text-tertiary uppercase">
              Hand Balm Application
            </span>
          </div>
          <div className="flex flex-col gap-space-xs">
            <div className="aspect-square bg-surface-container rounded-lg overflow-hidden relative">
              <Image
                src="/images/product-green-macro.jpg"
                alt="Brass crafting tool resting on uncut hunter-green full-grain leather hide"
                fill
                className="object-cover"
                sizes="(max-width: 767px) 50vw, 420px"
              />
            </div>
            <span className="font-label-sm text-label-sm text-tertiary uppercase">
              Sand-Cast Turn-Lock
            </span>
          </div>
        </div>
      </section>

      {/* Footer signoff */}
      <section className="page-shell pb-space-2xl text-center flex flex-col items-center">
        <div className="w-10 h-px bg-outline-variant mb-space-md" />
        <p className="font-headline-sm text-headline-sm italic text-tertiary max-w-xs leading-snug">
          &ldquo;Crafted to outlast fleeting seasons, gathered and nurtured by
          hand.&rdquo;
        </p>
        <div className="mt-space-sm flex items-center gap-space-xs">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
            Casual Carry Atelier
          </span>
          <span className="text-tertiary">•</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
            Est. 2021
          </span>
        </div>
      </section>
    </div>
  );
}
