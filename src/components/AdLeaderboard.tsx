import React, { useEffect } from 'react';

const TRACKING_URL =
  'https://track.aftrk3.com/38df6f12-f103-452f-9386-22bba88ec8ef?ats=eyJhIjoxNzczMzIzLCJjIjo2NDU4OTA0OCwibiI6MzcsInMiOjczNSwiZSI6MTEwNTIsInAiOjMxN30=&aff_token=IicvLSYpeH1+NA';

interface AdLeaderboardProps {
  className?: string;
}

export const AdLeaderboard: React.FC<AdLeaderboardProps> = ({ className }) => {
  useEffect(() => {
    const img = new Image();
    img.src = TRACKING_URL;
  }, []);

  return (
    <section
      aria-label="Advertisement"
      className={className ?? "bg-neutral-950 pt-24 md:pt-28 pb-4 flex justify-center"}
    >
      <div className="w-full max-w-[728px] h-[90px] overflow-hidden flex justify-center items-center">
        <iframe
          style={{ backgroundColor: '#ffffff' }}
          width="728"
          height="90"
          scrolling="no"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          name="spot_id_10001811"
          src="https://a.adtng.com/get/10001811?ata=celica175x"
          title="Advertisement"
        />
      </div>
    </section>
  );
};