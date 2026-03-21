type TestimonialProps = {
  name: string;
  location: string;
  initials: string;
  text: string;
  bgColor: string;
  translateZ: string;
};

const TestimonialCards = ({
  name,
  location,
  initials,
  text,
  bgColor,
  translateZ,
}: TestimonialProps) => {
  return (
    <div
      className={`min-h-40 w-full lg:w-[30%] border lg:${translateZ} lg:shrink shrink-0 snap-center lg:snap-none p-6 bg-white rounded-xl shadow-lg flex flex-col justify-between`}
    >
      <p className="text-gray-700 italic mb-4">{text}</p>
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 ${bgColor} rounded-full flex items-center justify-center text-white font-bold`}
        >
          {initials}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
