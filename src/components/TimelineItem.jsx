const TimelineItem = ({ year, title, description, link, isLast }) => {
  return (
    <div className="relative flex items-center mb-8">
      {/* Circle + Line */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Circle */}
        <div className="bg-secondary-first text-black w-16 h-16 flex items-center justify-center rounded-full font-bold shadow-lg z-10">
          {year}
        </div>

        {/* Line (skip if last) */}
        {!isLast && (
          <div
            className="absolute top-full left-1/2 w-1 bg-black"
            style={{ height: "100%", transform: "translateX(-50%)" }}
          />
        )}
      </div>

      {/* Card */}
      <div className="ml-8 bg-white rounded-2xl shadow-2xl p-6 hover:shadow-3xl transition-shadow duration-300 flex-1">
        <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-first underline mt-3 inline-block"
          >
            Learn More
          </a>
        )}
      </div>
    </div>
  );
};
export default TimelineItem;
