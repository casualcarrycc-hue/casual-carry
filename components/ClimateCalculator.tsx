"use client";

import { useState } from "react";

type ClimateKey = "monsoon" | "arid" | "temperate";

const CLIMATES: Record<
  ClimateKey,
  { label: string; sub: string; timing: string; desc: string }
> = {
  monsoon: {
    label: "Monsoon",
    sub: "Coastal / Humid",
    timing: "Every 90 Days",
    desc: "High ambient moisture requires minimal oiling to deter fungal mildew. Prioritize shaded air baths and cotton spot wipes.",
  },
  arid: {
    label: "Arid",
    sub: "Delhi / Interior",
    timing: "Every 45 Days",
    desc: "Hot interior dust dries out grain oils rapidly. Generously massage botanical beeswax into handle curves and corners to prevent cracking.",
  },
  temperate: {
    label: "Mild",
    sub: "Bengaluru",
    timing: "Every 180 Days",
    desc: "Mild temperate climates provide the natural equilibrium. A standard semi-annual balm massage is all your carry requires.",
  },
};

export default function ClimateCalculator() {
  const [climate, setClimate] = useState<ClimateKey>("monsoon");
  const current = CLIMATES[climate];

  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
      <div className="flex items-center justify-between mb-space-sm">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-secondary text-[22px]">
            water_drop
          </span>
          <h4 className="font-headline-sm text-headline-sm text-on-surface">
            Climate Balm Calculator
          </h4>
        </div>
        <span className="font-label-sm text-label-sm text-tertiary uppercase">
          Living Tool
        </span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
        Select your regional climate pattern to estimate optimal conditioning
        frequency:
      </p>
      <div className="grid grid-cols-3 gap-space-xs mb-space-md">
        {(Object.keys(CLIMATES) as ClimateKey[]).map((key) => {
          const active = climate === key;
          return (
            <button
              key={key}
              onClick={() => setClimate(key)}
              className={`py-2 px-1 rounded-lg text-center transition-all ${
                active
                  ? "bg-secondary-container text-on-secondary-container"
                  : "bg-surface-container text-on-surface"
              }`}
            >
              <div className="font-label-md text-label-md uppercase">
                {CLIMATES[key].label}
              </div>
              <div className="font-body-sm text-[12px] opacity-80">
                {CLIMATES[key].sub}
              </div>
            </button>
          );
        })}
      </div>
      <div className="p-space-sm bg-surface-container-low rounded-lg">
        <div className="flex items-center justify-between mb-1">
          <span className="font-label-md text-label-md text-secondary uppercase">
            Recommended Frequency
          </span>
          <span className="font-headline-sm text-headline-sm text-primary">
            {current.timing}
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          {current.desc}
        </p>
      </div>
    </div>
  );
}
