import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Stethoscope } from 'lucide-react';
import ChatMessage from '@/components/ChatMessage';
import SymptomCard from '@/components/SymptomCard';
import { symptoms } from '@/data/symptoms';
import { ChatMessage as ChatMessageType, Question } from '@/types/triage';
import { Card } from '@/components/ui/card';

const Triage = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      id: '1',
      type: 'bot',
      content: '¡Hola! Soy el asistente de TriageSCZ. Voy a ayudarle a evaluar sus síntomas. Primero, seleccione el síntoma principal que le aqueja:',
      timestamp: new Date()
    }
  ]);
  const [stage, setStage] = useState<'symptom-selection' | 'questions' | 'complete'>('symptom-selection');
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleSymptomSelect = (symptomId: string) => {
    const selectedSymptom = symptoms.find(s => s.id === symptomId);
    if (!selectedSymptom) return;

    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      type: 'user',
      content: selectedSymptom.label,
      timestamp: new Date()
    };

    const botMessage: ChatMessageType = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      content: `Entiendo, ${selectedSymptom.label.toLowerCase()}. Voy a hacerle algunas preguntas para evaluar la gravedad. ${selectedSymptom.questions[0].text}`,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setCurrentQuestions(selectedSymptom.questions);
    setStage('questions');
  };

  const handleAnswer = (answer: boolean) => {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const answerText = answer ? 'Sí' : 'No';
    
    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      type: 'user',
      content: answerText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    if (answer) {
      setScore(prevScore => prevScore + currentQuestion.weight);
    }

    if (currentQuestionIndex < currentQuestions.length - 1) {
      const nextQuestion = currentQuestions[currentQuestionIndex + 1];
      const botMessage: ChatMessageType = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: nextQuestion.text,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const finalMessage: ChatMessageType = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: 'Gracias por sus respuestas. He completado la evaluación. Preparando sus resultados...',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, finalMessage]);
      
      setTimeout(() => {
        navigate('/results', { state: { score: answer ? score + currentQuestion.weight : score } });
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Volver
            </Button>
            <div className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-primary" />
              <span className="font-semibold text-sm">Evaluación</span>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 container mx-auto px-4 py-6 max-w-md">
        <div className="space-y-4">
          {messages.map(message => (
            <ChatMessage key={message.id} message={message} />
          ))}

          {/* Symptom Selection Cards */}
          {stage === 'symptom-selection' && (
            <div className="grid grid-cols-2 gap-3 pt-4">
              {symptoms.map(symptom => (
                <SymptomCard
                  key={symptom.id}
                  icon={symptom.icon}
                  label={symptom.label}
                  onClick={() => handleSymptomSelect(symptom.id)}
                />
              ))}
            </div>
          )}

          {/* Yes/No Buttons for Questions */}
          {stage === 'questions' && (
            <Card className="p-4 space-y-3 border-primary/20">
              <div className="grid grid-cols-2 gap-3">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold"
                  onClick={() => handleAnswer(false)}
                >
                  No
                </Button>
                <Button
                  size="lg"
                  className="font-semibold"
                  onClick={() => handleAnswer(true)}
                >
                  Sí
                </Button>
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default Triage;
