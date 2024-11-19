import React, { useEffect } from "react";

const AboutSection = () => {
  return (
    <div className="space-y-4 mb-10">
      <h3 className="text-heading text-2xl md:text-4xl font-bold">About Us</h3>
      <p className="text-gray-500">
        At <strong>Lingo Bingo</strong>, we’re on a mission to make learning
        Korean, Japanese, and Hindi vocabulary both fun and effective. We
        believe that language learning should be engaging and rewarding.
      </p>
      <ul className="text-gray-500 list-disc pl-10 space-y-2">
        <li>Learn vocabulary through interactive bingo games.</li>
        <li>Understand words in their cultural context.</li>
        <li>Progress through levels as you master new words.</li>
        <li>Earn rewards and badges for your achievements.</li>
        <li>Compete with friends and other learners.</li>
      </ul>
      <p className="text-gray-500">
        Join us and start playing your way to fluency with every game you play!
      </p>
    </div>
  );
};

export default AboutSection;
