import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
      <div
        className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
      <div className="text-sm text-gray-600 mt-2">
        Progress: {current} of {total} questions answered ({Math.round(percentage)}%)
      </div>
    </div>
  );
};