import React from "react";
import Link from "next/link";
import { PollQuestion } from "@prisma/client";

const QuestionCard: React.FC<{
  question: PollQuestion;
  copyToClipboard: (question: PollQuestion) => void;
}> = ({ question, copyToClipboard }) => {
  return (
    <div key={question.id} className="bg-gray-400 shadow-xl card">
      <div className="card-body">
        <h1 key={question.id} className="text-gray-800 card-title">
          {question.question}
        </h1>
        <p className="text-sm text-white/60">
          Created on {question.createdAt.toDateString()}
        </p>
        <div className="items-center justify-between mt-5 card-actions">
          <Link href={`/question/${question.id}`}>
            <a className="">View</a>
          </Link>
          <span
            className="cursor-pointer"
            onClick={() => copyToClipboard(question)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
