import { Score, ReadinessLevel } from '../types';
import { categories } from '../data/categories';

export const MAX_SCORE = 140; // 28 questions × 5 points each

export const readinessLevels: ReadinessLevel[] = [
  {
    label: 'AI Aware',
    range: [0, 34],
    description: 'Your organization is in the early stages of AI adoption. Focus on developing a strategic vision, building foundational capabilities, and increasing awareness across teams.'
  },
  {
    label: 'AI Starter',
    range: [35, 69],
    description: 'You have begun implementing AI initiatives. Continue strengthening governance frameworks, expanding technical capabilities, and developing talent.'
  },
  {
    label: 'AI Ready',
    range: [70, 104],
    description: 'Your organization has a strong AI foundation. Focus on scaling solutions, enhancing ethical frameworks, and deepening expertise across domains.'
  },
  {
    label: 'AI Mature',
    range: [105, 140],
    description: 'You demonstrate advanced AI capabilities. Continue driving innovation, sharing best practices, and leading in responsible AI deployment.'
  }
];

export const calculateTotalScore = (scores: Score): number => {
  return Object.values(scores).reduce((sum, score) => sum + score, 0);
};

export const getReadinessLevel = (totalScore: number): ReadinessLevel => {
  return readinessLevels.find(
    level => totalScore >= level.range[0] && totalScore <= level.range[1]
  ) || readinessLevels[0];
};

export const calculateProgress = (scores: Score): number => {
  const totalQuestions = categories.reduce(
    (sum, category) => sum + category.questions.length,
    0
  );
  return (Object.keys(scores).length / totalQuestions) * 100;
};