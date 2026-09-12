"use client";

const SHADES = [
  { name: "Bottle Green", hex: "#1B3B2B" },
  { name: "Terracotta Tan", hex: "#C26247" },
  { name: "Ivory Cream", hex: "#EADCC9" },
  { name: "Espresso Brown", hex: "#2E2825" },
];

const SILHOUETTES = ["Saddle Sling", "Structured Tote", "Baguette", "Half Moon"];

const HARDWARE = ["Antique Brass", "Brushed Gold", "Matte Gunmetal"];

type FilterModalProps = {
  isOpen: boolean;
  onClose: () => void;
  activeSilhouette: string;
  onSilhouetteChange: (value: string) => void;
  resultCount: number;
};

export default function FilterModal({
  isOpen,
  onClose,
  activeSilhouette,
  onSilhouetteChange,
  resultCount,
}: FilterModalProps) {
  return (
    <aside
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={onClose}
        className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"
      />
      <div
        className={`absolute bottom-0 inset-x-0 bg-surface rounded-t-2xl p-margin-mobile shadow-2xl transform transition-transform duration-300 ease-out flex flex-col max-h-[85vh] ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="w-10 h-1 rounded-full bg-outline-variant mx-auto mb-space-sm" />
        <div className="flex items-center justify-between pb-space-sm">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
              Preferences
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface">
              Refine Exhibition
            </h3>
          </div>
          <button
            aria-label="Close filters"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="overflow-y-auto py-space-sm flex flex-col gap-space-md">
          <div>
            <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface block mb-space-xs">
              Artisanal Shades
            </label>
            <div className="grid grid-cols-2 gap-space-xs">
              {SHADES.map((shade) => (
                <label
                  key={shade.name}
                  className="flex items-center gap-2 p-space-xs rounded bg-surface-container cursor-pointer"
                >
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: shade.hex }}
                  />
                  <span className="font-body-sm text-body-sm text-on-surface">
                    {shade.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface block mb-space-xs">
              Silhouette
            </label>
            <div className="flex flex-wrap gap-space-xs">
              {SILHOUETTES.map((s) => (
                <button
                  key={s}
                  onClick={() => onSilhouetteChange(s)}
                  className={`px-space-sm py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider cursor-pointer transition-colors ${
                    activeSilhouette === s
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container text-on-surface"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface block mb-space-xs">
              Hardware Finish
            </label>
            <div className="flex gap-space-sm flex-wrap">
              {HARDWARE.map((h) => (
                <span
                  key={h}
                  className="px-space-sm py-1 rounded bg-surface-container font-body-sm text-body-sm text-on-surface"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-space-sm mt-auto flex items-center gap-space-sm">
          <button
            onClick={() => onSilhouetteChange("")}
            className="flex-1 py-space-sm rounded-lg bg-surface-container text-on-surface font-label-md text-label-md uppercase tracking-wider"
          >
            Clear All
          </button>
          <button
            onClick={onClose}
            className="flex-[2] w-full py-space-sm rounded-lg bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider shadow-sm"
          >
            Show {resultCount} Creations
          </button>
        </div>
      </div>
    </aside>
  );
}
