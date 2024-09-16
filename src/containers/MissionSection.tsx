
const MissionSection = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="relative overflow-hidden bg ">
        <div className="backdrop-blur-sm h-full">
          <div className="mission-text  z-10 flex h-full flex-col gap-4 items-center justify-center text-slate-100 px-5 md:px-20 lg:px-40 py-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white">
              Our Mission
            </h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-center">
              At the core of our values is a commitment to excellence and
              integrity. We strive to provide top-notch services that exceed
              expectations, foster innovation, and create a positive impact on
              our community. Our mission is to deliver exceptional results while
              maintaining the highest standards of professionalism and
              dedication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { MissionSection };

