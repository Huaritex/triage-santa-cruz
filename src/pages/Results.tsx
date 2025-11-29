import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, CheckCircle, AlertTriangle, Home, Phone } from 'lucide-react';
import HealthCenterCard from '@/components/HealthCenterCard';
import Disclaimer from '@/components/Disclaimer';
import { calculateTriageLevel, getTriageResult } from '@/utils/triageAlgorithm';
import { TriageResult } from '@/types/triage';
import { emergencyPhones } from '@/data/healthCenters';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [result, setResult] = useState<TriageResult | null>(null);

  useEffect(() => {
    const score = location.state?.score ?? 0;
    const level = calculateTriageLevel(score);
    const triageResult = getTriageResult(level);
    setResult(triageResult);
  }, [location.state]);

  if (!result) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Cargando resultados...</p>
      </div>
    );
  }

  const getLevelIcon = () => {
    switch (result.level) {
      case 'emergency':
        return <AlertCircle className="h-12 w-12 text-emergency" />;
      case 'urgent':
        return <AlertTriangle className="h-12 w-12 text-urgent" />;
      case 'mild':
        return <CheckCircle className="h-12 w-12 text-mild" />;
    }
  };

  const getLevelColor = () => {
    switch (result.level) {
      case 'emergency':
        return 'border-emergency bg-emergency/5';
      case 'urgent':
        return 'border-urgent bg-urgent/5';
      case 'mild':
        return 'border-mild bg-mild/5';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-center">Resultados de Evaluación</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 max-w-md space-y-6">
        {/* Result Card */}
        <Card className={`border-2 ${getLevelColor()}`}>
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-3">
              {getLevelIcon()}
            </div>
            <CardTitle className="text-xl">{result.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="font-medium">Evaluación:</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {result.description}
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-medium">Recomendación:</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {result.recommendation}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Phones for Red Level */}
        {result.level === 'emergency' && (
          <Card className="border-emergency">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Phone className="h-5 w-5 text-emergency" />
                Números de Emergencia
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {emergencyPhones.map(phone => (
                <Button
                  key={phone.number}
                  variant="outline"
                  className="w-full justify-between"
                  onClick={() => window.location.href = `tel:${phone.number}`}
                >
                  <span className="font-medium">{phone.service}</span>
                  <span className="text-emergency font-bold">{phone.number}</span>
                </Button>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Health Centers */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Centros de Salud Recomendados</h2>
          {result.centers.map((center, idx) => (
            <HealthCenterCard key={idx} center={center} />
          ))}
        </div>

        {/* Disclaimer */}
        <Disclaimer />

        {/* Actions */}
        <div className="grid gap-3 pt-2">
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/')}
            className="w-full"
          >
            <Home className="h-5 w-5 mr-2" />
            Volver al Inicio
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Results;
