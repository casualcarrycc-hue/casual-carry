"use client";

import { useState } from "react";

export default function ConciergeBooking() {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3200);
  };

  return (
    <div className="flex flex-col gap-space-xs">
      <button
        className="w-full py-3 px-space-md bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg tracking-widest uppercase rounded text-center transition-colors shadow-sm"
        onClick={() => showToast("Booking window opened for New Delhi atelier")}
      >
        Request Atelier Spa Booking
      </button>
      <button
        className="w-full py-3 px-space-md bg-transparent text-on-secondary font-label-lg text-label-lg tracking-widest uppercase rounded text-center transition-colors hover:bg-on-secondary/10 flex items-center justify-center gap-space-xs"
        onClick={() => showToast("Archival Care Guide (PDF) generated")}
      >
        <span className="material-symbols-outlined text-[18px]">download</span>
        <span>Download Print Care Codex (PDF)</span>
      </button>

      {toast && (
        <div className="mt-space-sm p-space-xs bg-secondary-container text-on-secondary-container rounded text-center font-label-sm text-label-sm uppercase tracking-wider">
          {toast}
        </div>
      )}
    </div>
  );
}
