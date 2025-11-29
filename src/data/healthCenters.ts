import { HealthCenter } from '@/types/triage';

export const emergencyCenters: HealthCenter[] = [
  {
    name: 'Hospital Japonés',
    type: 'Nivel III - Emergencias',
    address: 'Av. Japonés entre 3er y 4to Anillo',
    phone: '3-462626'
  },
  {
    name: 'Hospital San Juan de Dios',
    type: 'Nivel III - Emergencias',
    address: 'Calle Junín esquina Arenales',
    phone: '3-342071'
  }
];

export const urgentCenters: HealthCenter[] = [
  {
    name: 'Hospital Francés',
    type: 'Nivel II - Urgencias',
    address: 'Av. Irala 468',
    phone: '3-342011'
  },
  {
    name: 'Centro de Salud Plan 3000',
    type: 'Nivel II',
    address: 'UV 203, Plan 3000',
    phone: '3-456789'
  }
];

export const basicCenters: HealthCenter[] = [
  {
    name: 'Posta Sanitaria Pampa de la Isla',
    type: 'Nivel I - Atención Primaria',
    address: 'Zona Pampa de la Isla',
    phone: '3-334455'
  },
  {
    name: 'Centro de Salud Villa 1ro de Mayo',
    type: 'Nivel I',
    address: 'Villa 1ro de Mayo',
    phone: '3-445566'
  }
];

export const emergencyPhones = [
  { service: 'Bomberos', number: '119' },
  { service: 'Ambulancia Cruz Roja', number: '160' },
  { service: 'Ambulancia Municipal', number: '165' },
  { service: 'Policía', number: '110' }
];
