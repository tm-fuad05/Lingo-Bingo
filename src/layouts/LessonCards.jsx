import React from "react";

const LessonCards = ({ vocabulary }) => {
  const {
    word,
    meaning,
    pronunciation,
    part_of_speech,
    id,
    when_to_say,
    example,
  } = vocabulary;

  return (
    <div className="bg-secondary p-7 rounded-xl flex flex-col items-center justify-center gap-2">
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
      <div>
        <button
          onClick={() => document.getElementById(`${id}`).showModal()}
          className="btn bg-primary border-none text-white mt-3"
        >
          When to say
        </button>
        <dialog id={`${id}`} className="modal">
          <div className="modal-box  bg-gray-200 flex flex-col gap-2 lg:w-7/12 p-8">
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
              When to say:
              <span className="text-md md:text-lg lg:text-xl font-normal">
                {" "}
                {when_to_say}
              </span>
            </h4>
            <h4 className="font-semibold text-md md:text-lg lg:text-xl">
              Example:
              <span className="text-md md:text-lg lg:text-xl font-normal">
                {" "}
                {example}
              </span>
            </h4>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default LessonCards;
