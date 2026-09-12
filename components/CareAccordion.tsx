"use client";

import { useState } from "react";

const RITUALS = [
  {
    title: "The Moisture Barrier",
    body: "Condition twice annually with organic raw beeswax and refined jojoba balm. Synthetic petrochemical glosses suffocate vegetable tannins; apply with light, circular friction using unbleached muslin.",
    rule: "Allow 12 hours absorption away from direct sunlight.",
    icon: "spa",
  },
  {
    title: "Monsoon & Water Protocol",
    body: "Sudden rain requires immediate tenderness. Dab gently with dry, unbleached cotton — never wipe or drag across wet grain. Never apply hair dryers, radiators, or direct artificial heat, which cook the natural skin fibers.",
    rule: "Dry slowly in cross-ventilated shade.",
    icon: "air",
  },
  {
    title: "Solid Brass & Hardware",
    body: "Our solid sand-cast turn-locks and buckles are untreated brass. They oxidize naturally, mirroring the mood of Indian temple bells. If you prefer a mirror gloss, buff gently with a micro-suede cloth dampened with lemon oil.",
    rule: "Avoid liquid brass cleaners touching raw leather edges.",
    icon: "lock_reset",
  },
  {
    title: "Storage Architecture",
    body: "Stuff cavities with acid-free unprinted tissue to maintain structural silhouettes without stressing stitch points. Always store upright in the breathable cotton dust slip provided. Plastic bins trap ambient moisture and cause mold bloom.",
    rule: "Rotate stored bags every 60 days to allow airflow.",
    icon: "inventory_2",
  },
];

export default function CareAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-space-sm">
      {RITUALS.map((ritual, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={ritual.title}
            className="bg-surface-container-low rounded-xl overflow-hidden transition-all duration-300"
          >
            <button
              className="w-full text-left p-space-md flex items-center justify-between gap-space-sm"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <div className="flex items-center gap-space-md">
                <span className="font-label-lg text-label-lg text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  {ritual.title}
                </span>
              </div>
              <span
                className={`material-symbols-outlined text-outline text-[20px] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>
            {isOpen && (
              <div className="px-space-md pb-space-md pt-0 text-on-surface-variant">
                <p className="font-body-sm text-body-sm mb-space-sm">
                  {ritual.body}
                </p>
                <div className="bg-surface-container p-space-sm rounded-lg flex items-center gap-space-xs text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    {ritual.icon}
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider">
                    Atelier Rule: {ritual.rule}
                  </span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
