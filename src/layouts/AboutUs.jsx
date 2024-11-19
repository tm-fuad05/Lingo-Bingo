import React from "react";

const AboutUs = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col gap-3 my-10">
      <h3 className="text-2xl lg:text-3xl text-primary font-bold">
        About Us-Lingo Bingo
      </h3>
      <p className="text-gray-500 text-md lg:text-lg">
        Welcome to Lingo Bingo, where language learning meets culture,
        creativity, and connection! We are a vibrant platform dedicated to
        helping learners of all levels master Korean, Japanese, and Hindi—three
        of the world’s most captivating languages.
      </p>
      <p className="text-gray-500 text-md lg:text-lg">
        At Lingo Bingo, we believe that learning a new language is more than
        memorizing words and phrases; it’s about immersing yourself in a new way
        of thinking, understanding diverse cultures, and building bridges across
        borders. Our mission is to make language learning a fun, accessible, and
        rewarding experience for everyone, whether you're a beginner starting
        from scratch or an enthusiast looking to refine your skills.
      </p>
      <h3 className="text-2xl lg:text-3xl text-primary font-bold mt-10">
        What sets us apart?
      </h3>
      <ul className="list-disc pl-10 space-y-3">
        <li className="text-gray-500 text-md lg:text-lg">
          <span className="font-semibold text-black">
            Interactive Learning:
          </span>{" "}
          We combine modern teaching techniques with interactive exercises to
          ensure that learning is not only effective but also enjoyable.
        </li>
        <li className="text-gray-500 text-md lg:text-lg">
          <span className="font-semibold text-black">Cultural Insights:</span>{" "}
          Our lessons go beyond grammar and vocabulary, delving into the
          traditions, history, and nuances that make each language unique.
        </li>
        <li className="text-gray-500 text-md lg:text-lg">
          <span className="font-semibold text-black">
            {" "}
            Personalized Approach:{" "}
          </span>{" "}
          Every learner is different, and we tailor our resources to meet your
          individual goals—whether it’s for travel, career growth, or personal
          enrichment.
        </li>
        <li className="text-gray-500 text-md lg:text-lg">
          <span className="font-semibold text-black"> Community Focus:</span> At
          Lingo Bingo, you're never alone. Join a growing community of learners
          who share your passion and help each other succeed.
        </li>
      </ul>
      <p className="text-gray-500 text-md lg:text-lg">
        By learning Korean, you’ll unlock the vibrant world of K-dramas, K-pop,
        and ancient traditions. Mastering Japanese connects you to a rich
        culture of innovation, literature, and art. Hindi opens the door to one
        of the most diverse and historic civilizations on earth.
      </p>
      <p className="text-gray-500 text-md lg:text-lg">
        We’re here to guide you every step of the way, making your journey to
        fluency engaging and inspiring. Join us today at Lingo Bingo, and let’s
        turn your language learning goals into a reality!
      </p>
    </div>
  );
};

export default AboutUs;
