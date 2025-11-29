export type TriageLevel = 'emergency' | 'urgent' | 'mild';

export interface Symptom {
  id: string;
  label: string;
  icon: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  type: 'yesno' | 'scale' | 'multiple';
  options?: string[];
  weight: number;
}

export interface TriageResult {
  level: TriageLevel;
  title: string;
  description: string;
  recommendation: string;
  centers: HealthCenter[];
}

export interface HealthCenter {
  name: string;
  type: string;
  address: string;
  phone: string;
}

export interface ChatMessage {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}
