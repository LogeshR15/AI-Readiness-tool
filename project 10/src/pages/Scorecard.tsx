import React, { useState } from 'react';
import { categories } from '../data/categories';
import { QuestionCard } from '../components/QuestionCard';
import { ProgressBar } from '../components/ProgressBar';
import { ResultsDashboard } from '../components/ResultsDashboard';
import { Score } from '../types';
import { calculateTotalScore, getReadinessLevel } from '../utils/scoring';

export const Scorecard: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [scores, setScores] = useState<Score>({});
  const [showResults, setShowResults] = useState(false);

  const handleScoreChange = (questionId: string, value: number) => {
    setScores(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentCategory < categories.length - 1) {
      setCurrentCategory(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentCategory > 0) {
      setCurrentCategory(prev => prev - 1);
    }
  };

  const category = categories[currentCategory];
  const totalQuestions = categories.reduce(
    (sum, cat) => sum + cat.questions.length,
    0
  );
  const answeredQuestions = Object.keys(scores).length;

  if (showResults) {
    return <ResultsDashboard scores={scores} />;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <ProgressBar current={answeredQuestions} total={totalQuestions} />
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {category.title}
        </h2>
        <p className="text-gray-600">
          Answer the following questions to assess your organization's readiness in this area.
        </p>
      </div>

      <div className="space-y-6">
        {category.questions.map(question => (
          <QuestionCard
            key={question.id}
            question={question}
            value={scores[question.id] || 0}
            onChange={(value) => handleScoreChange(question.id, value)}
          />
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentCategory === 0}
          className="px-6 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
        >
          {currentCategory === categories.length - 1 ? 'View Results' : 'Next'}
        </button>
      </div>
    </div>
  );
};