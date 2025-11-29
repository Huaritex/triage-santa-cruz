import { Card, CardContent } from '@/components/ui/card';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface SymptomCardProps {
  icon: string;
  label: string;
  onClick: () => void;
}

const SymptomCard = ({ icon, label, onClick }: SymptomCardProps) => {
  const IconComponent = (Icons[icon as keyof typeof Icons] as LucideIcon) || Icons.Activity;

  return (
    <Card 
      className="cursor-pointer card-hover border-2 border-border hover:border-primary"
      onClick={onClick}
    >
      <CardContent className="flex flex-col items-center justify-center p-6 gap-3">
        <IconComponent className="h-10 w-10 text-primary" />
        <p className="text-center font-medium text-sm">{label}</p>
      </CardContent>
    </Card>
  );
};

export default SymptomCard;
