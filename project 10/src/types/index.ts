export interface Question {
  id: string;
  text: string;
  tooltip: string;
  examples: {
    [key: number]: string;
  };
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  questions: Question[];
}

export interface UserInfo {
  name: string;
  email: string;
}

export interface Score {
  [questionId: string]: number;
}

export interface ReadinessLevel {
  label: string;
  range: [number, number];
  description: string;
}