import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmergencyButtonProps {
  className?: string;
}

const EmergencyButton = ({ className }: EmergencyButtonProps) => {
  const handleEmergencyCall = () => {
    window.location.href = 'tel:160';
  };

  return (
    <Button
      variant="destructive"
      size="lg"
      className={`w-full text-lg font-semibold shadow-lg ${className}`}
      onClick={handleEmergencyCall}
    >
      <Phone className="mr-2 h-6 w-6" />
      Emergencia: Llamar 160/165
    </Button>
  );
};

export default EmergencyButton;
