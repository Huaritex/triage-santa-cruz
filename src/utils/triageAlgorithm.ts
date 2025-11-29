import { TriageResult, TriageLevel } from '@/types/triage';
import { emergencyCenters, urgentCenters, basicCenters } from '@/data/healthCenters';

export const calculateTriageLevel = (score: number): TriageLevel => {
  if (score >= 15) return 'emergency';
  if (score >= 8) return 'urgent';
  return 'mild';
};

export const getTriageResult = (level: TriageLevel): TriageResult => {
  const results: Record<TriageLevel, TriageResult> = {
    emergency: {
      level: 'emergency',
      title: '🚨 EMERGENCIA - Atención Inmediata',
      description: 'Sus síntomas requieren atención médica de emergencia inmediata.',
      recommendation: 'Diríjase AHORA al hospital más cercano o llame al 160/165 para una ambulancia. No maneje si está solo.',
      centers: emergencyCenters
    },
    urgent: {
      level: 'urgent',
      title: '⚠️ URGENCIA - Atención Prioritaria',
      description: 'Sus síntomas requieren atención médica en las próximas horas.',
      recommendation: 'Diríjase a un centro de salud de nivel II o llame para consultar disponibilidad. No es vital, pero no debe esperar.',
      centers: urgentCenters
    },
    mild: {
      level: 'mild',
      title: '✅ SÍNTOMAS LEVES - Atención Ambulatoria',
      description: 'Sus síntomas parecen ser manejables con atención ambulatoria.',
      recommendation: 'Puede acudir a su posta sanitaria local o centro de salud más cercano. Si los síntomas empeoran, busque atención de mayor nivel.',
      centers: basicCenters
    }
  };

  return results[level];
};
