import React from "react";

const LessonCards = ({ vocabulary }) => {
  const { word, meaning, pronunciation, part_of_speech } = vocabulary;

  return (
    <div className="bg-[#DFF6FF] p-7 rounded-xl flex flex-col items-center justify-center gap-2">
      <h4 className="font-semibold text-md md:text-lg lg:text-xl">
        Word:
        <span className="text-md md:text-lg lg:text-xl font-normal">
          {" "}
          {word}{" "}
        </span>
      </h4>
      <h4 className="font-semibold text-md md:text-lg lg:text-xl">
        Meaning:
        <span className="text-md md:text-lg lg:text-xl font-normal">
          {" "}
          {meaning}
        </span>
      </h4>
      <h4 className="font-semibold text-md md:text-lg lg:text-xl">
        Pronunciation:
        <span className="text-md md:text-lg lg:text-xl font-normal">
          {" "}
          {pronunciation}
        </span>
      </h4>
      <h4 className="font-semibold text-md md:text-lg lg:text-xl">
        Part of speech:
        <span className="text-md md:text-lg lg:text-xl font-normal">
          {" "}
          {part_of_speech}
        </span>
      </h4>
      <button className="btn bg-[#008080] border-none text-white mt-3">
        When to say
      </button>
    </div>
  );
};

export default LessonCards;
