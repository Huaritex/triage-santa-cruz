import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone } from 'lucide-react';
import { HealthCenter } from '@/types/triage';
import { Button } from '@/components/ui/button';

interface HealthCenterCardProps {
  center: HealthCenter;
}

const HealthCenterCard = ({ center }: HealthCenterCardProps) => {
  const handleCall = () => {
    window.location.href = `tel:${center.phone}`;
  };

  return (
    <Card className="border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{center.name}</CardTitle>
        <p className="text-xs text-muted-foreground font-medium">{center.type}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-start gap-2 text-sm">
          <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
          <span className="text-muted-foreground">{center.address}</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={handleCall}
        >
          <Phone className="h-4 w-4 mr-2" />
          {center.phone}
        </Button>
      </CardContent>
    </Card>
  );
};

export default HealthCenterCard;
