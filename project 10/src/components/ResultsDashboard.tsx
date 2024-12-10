import React from 'react';
import { Score } from '../types';
import { calculateTotalScore, getReadinessLevel, MAX_SCORE } from '../utils/scoring';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { categories } from '../data/categories';
import { Shield } from 'lucide-react';

interface ResultsDashboardProps {
  scores: Score;
}

export const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ scores }) => {
  const totalScore = calculateTotalScore(scores);
  const readinessLevel = getReadinessLevel(totalScore);
  const scorePercentage = (totalScore / MAX_SCORE) * 100;

  const getCategoryScore = (categoryId: string): number => {
    const categoryQuestions = categories.find(c => c.id === categoryId)?.questions || [];
    const categoryScores = categoryQuestions.map(q => scores[q.id] || 0);
    return categoryScores.length > 0
      ? categoryScores.reduce((sum, score) => sum + score, 0) / categoryScores.length
      : 0;
  };

  const chartData = categories.map(category => ({
    category: category.title,
    score: getCategoryScore(category.id),
  }));

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Assessment Results
        </h2>
        <Shield className="w-8 h-8 text-blue-500" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Your Readiness Level
          </h3>
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {readinessLevel.label}
          </div>
          <p className="text-gray-600">{readinessLevel.description}</p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Total Score
          </h3>
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {totalScore} / {MAX_SCORE}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="h-2.5 rounded-full bg-blue-600"
              style={{ width: `${scorePercentage}%` }}
            />
          </div>
        </div>
      </div>

      <div className="h-[400px] mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={chartData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="category" />
            <PolarRadiusAxis angle={30} domain={[0, 5]} />
            <Radar
              name="Score"
              dataKey="score"
              stroke="#6366f1"
              fill="#818cf8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Category Breakdown & Recommendations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map(category => {
            const score = getCategoryScore(category.id);
            return (
              <div key={category.id} className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-medium text-gray-800">
                  {category.title}
                </h4>
                <div className="text-sm text-gray-500 mb-1">
                  Score: {score.toFixed(1)} / 5
                </div>
                <p className="text-gray-600 text-sm">
                  {score < 2.5 ? (
                    'Priority area for improvement. Focus on developing basic capabilities.'
                  ) : score < 3.5 ? (
                    'Good foundation. Continue strengthening and expanding capabilities.'
                  ) : score < 4.5 ? (
                    'Strong performance. Focus on optimization and innovation.'
                  ) : (
                    'Excellent performance. Share best practices and maintain leadership.'
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};