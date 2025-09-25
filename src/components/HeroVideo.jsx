import { useRef, useEffect } from "react";
import AppointmentButton from "./BookAppointment";

const HeroVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) video.play(); // ensures video keeps playing
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Fallback background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/fallback-hero.jpg')" }}
      ></div>

      {/* Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover will-change-transform"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source
          src="https://cdn.pixabay.com/video/2025/06/24/287510_large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Rediscover Balance and Wellness Through 24+ Years of Healing Expertise
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Integrating Traditional Chinese Medicine, Ayurvedic Acupressure, and
          Sujok Therapy for Holistic Healing.
        </p>
        <AppointmentButton />
      </div>
    </section>
  );
};

export default HeroVideo;
