const Introduction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-secondary-first to-primary-second text-center px-6">
      <img
        src="/therapist.jpg"
        alt="Therapist"
        className="mx-auto rounded-full w-32 h-32 mb-6 object-cover shadow-md border-4 border-secondary-first"
      />
      <p className="max-w-3xl mx-auto text-2xl leading-relaxed mb-4 text-white text-center">
        Welcome! With a passion for holistic care, I’ve dedicated my practice to treating the root cause of ailments. 
        My mission is to help patients rediscover balance and live healthier lives through natural, effective therapies.
      </p>
      <a
        href="/about"
        className="inline-block mt-6 text-black font-semibold hover:underline"
      >
        Read My Full Story →
      </a>
    </section>
  );
};

export default Introduction;
