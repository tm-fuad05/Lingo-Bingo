import React from "react";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { FaBookOpen, FaCircleInfo, FaXmark } from "react-icons/fa6";

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

  const pronounceWord = (text) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel(); // Cancel any ongoing speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ja-JP";
      utterance.rate = 0.9; // Slightly slower for clear learning
      window.speechSynthesis.speak(utterance);
    }
  };

  // Helper for Part of Speech Badge styling
  const getBadgeStyle = (pos) => {
    switch (pos?.toLowerCase()) {
      case "noun":
        return "bg-indigo-50 text-indigo-600 border-indigo-100";
      case "verb":
        return "bg-emerald-50 text-emerald-600 border-emerald-100";
      case "adjective":
        return "bg-amber-50 text-amber-600 border-amber-100";
      default:
        return "bg-sky-50 text-sky-600 border-sky-100";
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
      {/* Top Header: Word, Part of Speech & Audio */}
      <div className="space-y-4">
        <div className="flex justify-between items-start gap-3">
          <div>
            <span
              className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider border mb-2 ${getBadgeStyle(
                part_of_speech,
              )}`}
            >
              {part_of_speech || "Word"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-heading tracking-tight">
              {word}
            </h3>
          </div>

          {/* Audio Speaker Button */}
          <button
            onClick={() => pronounceWord(word)}
            className="w-10 h-10 rounded-2xl bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 flex-shrink-0 group/btn"
            title="Listen Pronunciation"
            aria-label="Pronounce Word"
          >
            <HiOutlineSpeakerWave className="text-xl group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>

        {/* Info Grid */}
        <div className="space-y-2.5 pt-2 border-t border-gray-100">
          <div className="flex items-baseline justify-between">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Meaning
            </span>
            <span className="text-sm sm:text-base font-bold text-heading">
              {meaning}
            </span>
          </div>

          <div className="flex items-baseline justify-between">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Pronunciation
            </span>
            <span className="text-sm font-bold text-primary italic">
              /{pronunciation}/
            </span>
          </div>
        </div>
      </div>

      {/* Action CTA & Modal */}
      <div className="pt-6 mt-4">
        <button
          onClick={() => document.getElementById(`modal_${id}`).showModal()}
          className="w-full py-3 bg-secondary hover:bg-primary hover:text-white text-heading font-bold rounded-2xl border border-gray-100 transition-all text-sm flex items-center justify-center gap-2 group/modalBtn"
        >
          <FaCircleInfo className="text-primary group-hover/modalBtn:text-white transition-colors" />
          <span>When to Say</span>
        </button>

        {/* Modernized DaisyUI Modal */}
        <dialog
          id={`modal_${id}`}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-2xl max-w-lg">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <FaBookOpen className="text-sm" />
                </div>
                <h3 className="text-lg font-bold text-heading">
                  Context Details
                </h3>
              </div>
              <form method="dialog">
                <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors">
                  <FaXmark />
                </button>
              </form>
            </div>

            {/* Modal Content */}
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-gray-100 space-y-1">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                  Word & Meaning
                </span>
                <p className="text-lg font-bold text-heading">
                  {word}{" "}
                  <span className="text-sm font-normal text-gray-500">
                    ({meaning})
                  </span>
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block ml-1">
                  When to say
                </span>
                <p className="text-sm font-normal text-gray-700 bg-gray-50/80 p-3.5 rounded-2xl border border-gray-100 leading-relaxed">
                  {when_to_say}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block ml-1">
                  Example Usage
                </span>
                <p className="text-sm font-normal text-gray-700 bg-emerald-50/50 p-3.5 rounded-2xl border border-emerald-100/60 leading-relaxed italic">
                  "{example}"
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="modal-action pt-4 border-t border-gray-100 mt-6">
              <form method="dialog" className="w-full">
                <button className="w-full py-3 bg-primary hover:bg-indigo-600 text-white font-bold rounded-2xl shadow-md transition-all text-sm">
                  Got It!
                </button>
              </form>
            </div>
          </div>

          <form
            method="dialog"
            className="modal-backdrop bg-slate-900/40 backdrop-blur-sm"
          >
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default LessonCards;
