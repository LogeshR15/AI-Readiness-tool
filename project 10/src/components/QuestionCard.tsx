import React from 'react';
import { Question } from '../types';
import { HelpCircle } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  value: number;
  onChange: (value: number) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  value,
  onChange,
}) => {
  return (
    <div className="card transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">{question.text}</h3>
        <div className="group relative">
          <HelpCircle className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-help" />
          <div className="hidden group-hover:block absolute right-0 w-64 p-2 bg-gray-800 text-white text-sm rounded-md shadow-lg z-10">
            {question.tooltip}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((score) => (
          <label
            key={score}
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors duration-200"
          >
            <input
              type="radio"
              name={question.id}
              value={score}
              checked={value === score}
              onChange={() => onChange(score)}
              className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-gray-700">
              {score}: {question.examples[score]}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};