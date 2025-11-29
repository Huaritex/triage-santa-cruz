import { Symptom } from '@/types/triage';

export const symptoms: Symptom[] = [
  {
    id: 'chest-pain',
    label: 'Dolor en el Pecho',
    icon: 'Heart',
    questions: [
      {
        id: 'chest-severity',
        text: '¿El dolor es intenso y opresivo?',
        type: 'yesno',
        weight: 10
      },
      {
        id: 'chest-breathing',
        text: '¿Tiene dificultad para respirar junto con el dolor?',
        type: 'yesno',
        weight: 10
      }
    ]
  },
  {
    id: 'breathing',
    label: 'Dificultad Respiratoria',
    icon: 'Wind',
    questions: [
      {
        id: 'breathing-severe',
        text: '¿Siente que no puede respirar o se está ahogando?',
        type: 'yesno',
        weight: 10
      },
      {
        id: 'breathing-lips',
        text: '¿Sus labios o dedos se ven azulados?',
        type: 'yesno',
        weight: 10
      }
    ]
  },
  {
    id: 'abdominal',
    label: 'Dolor Abdominal',
    icon: 'Activity',
    questions: [
      {
        id: 'abdominal-scale',
        text: 'Del 1 al 10, ¿qué tan intenso es el dolor?',
        type: 'scale',
        weight: 5
      },
      {
        id: 'abdominal-vomit',
        text: '¿Ha vomitado sangre o tiene vómitos incontrolables?',
        type: 'yesno',
        weight: 8
      }
    ]
  },
  {
    id: 'fever',
    label: 'Fiebre',
    icon: 'Thermometer',
    questions: [
      {
        id: 'fever-temp',
        text: '¿Su temperatura es mayor a 39°C (102°F)?',
        type: 'yesno',
        weight: 5
      },
      {
        id: 'fever-duration',
        text: '¿La fiebre persiste por más de 3 días?',
        type: 'yesno',
        weight: 4
      }
    ]
  },
  {
    id: 'headache',
    label: 'Dolor de Cabeza',
    icon: 'Brain',
    questions: [
      {
        id: 'headache-severe',
        text: '¿Es el peor dolor de cabeza que ha tenido?',
        type: 'yesno',
        weight: 8
      },
      {
        id: 'headache-vision',
        text: '¿Tiene visión borrosa o confusión?',
        type: 'yesno',
        weight: 7
      }
    ]
  }
];
