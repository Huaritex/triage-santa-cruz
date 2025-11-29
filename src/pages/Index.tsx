import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Stethoscope, ArrowRight, MapPin, Shield } from 'lucide-react';
import EmergencyButton from '@/components/EmergencyButton';
import Disclaimer from '@/components/Disclaimer';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary rounded-lg p-2">
              <Stethoscope className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">TriageSCZ</h1>
              <p className="text-xs text-muted-foreground">Sistema de Pre-Evaluación</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-md space-y-6">
        {/* Hero Card */}
        <Card className="border-2 border-primary/20 shadow-lg">
          <CardContent className="pt-6 pb-8 space-y-4">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">
                Bienvenido al Sistema de Triage
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Evalúe sus síntomas en minutos y reciba orientación sobre qué tipo de atención médica necesita.
              </p>
            </div>

            <Button
              size="lg"
              className="w-full text-lg font-semibold shadow-md h-14"
              onClick={() => navigate('/triage')}
            >
              Iniciar Evaluación de Síntomas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>

        {/* Emergency Button */}
        <EmergencyButton />

        {/* Info Cards */}
        <div className="grid gap-4">
          <Card className="border-border">
            <CardContent className="pt-6 flex gap-4">
              <div className="flex-shrink-0 bg-primary/10 rounded-lg p-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Confidencial y Seguro</h3>
                <p className="text-sm text-muted-foreground">
                  Su información es privada y no se almacena en servidores externos.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6 flex gap-4">
              <div className="flex-shrink-0 bg-mild/10 rounded-lg p-3">
                <MapPin className="h-6 w-6 text-mild" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Centros Cercanos</h3>
                <p className="text-sm text-muted-foreground">
                  Le indicamos el centro de salud más apropiado según sus síntomas.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer */}
        <Disclaimer />

        {/* Footer Info */}
        <div className="text-center pt-4">
          <p className="text-xs text-muted-foreground">
            Santa Cruz de la Sierra, Bolivia<br />
            Sistema de Apoyo a Decisiones de Salud Pública
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
