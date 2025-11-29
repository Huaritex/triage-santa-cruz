import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Disclaimer = () => {
  return (
    <Alert className="border-muted-foreground/30">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription className="text-xs leading-relaxed">
        <strong>Aviso Legal:</strong> Esta herramienta es solo una guía de orientación y no sustituye 
        el criterio médico profesional. En caso de duda, busque atención médica inmediata. 
        Ante emergencias vitales, llame al 160 o 165.
      </AlertDescription>
    </Alert>
  );
};

export default Disclaimer;
