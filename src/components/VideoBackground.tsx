import { useEffect, useRef } from 'react';

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleMouseScrub = (event: MouseEvent) => {
      if (window.innerWidth <= 1024) return;
      const duration = video.duration;
      if (!Number.isFinite(duration) || duration <= 0) return;
      const percentX = event.clientX / window.innerWidth;
      video.currentTime = percentX * duration;
    };

    const handleSeeked = () => {
      if (window.innerWidth <= 1024) {
        void video.play().catch(() => undefined);
      }
    };

    if (window.innerWidth > 1024) {
      window.addEventListener('mousemove', handleMouseScrub);
    } else {
      void video.play().catch(() => undefined);
    }

    video.addEventListener('seeked', handleSeeked);

    return () => {
      window.removeEventListener('mousemove', handleMouseScrub);
      video.removeEventListener('seeked', handleSeeked);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
      }}
    >
      <video
        ref={videoRef}
        className="h-full w-full scale-[0.8] origin-center object-cover opacity-80 mix-blend-multiply lg:origin-right"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 100%)',
        }}
        src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/robo_motion.mp4"
        muted
        playsInline
        preload="auto"
        loop
        autoPlay
      />
    </div>
  );
}
