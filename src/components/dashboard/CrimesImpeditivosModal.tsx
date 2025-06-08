
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import type { CrimeImpeditivo } from '@/constants/decreeData';
import { crimesImpeditivosArt1, crimesImpeditivosParagrafos } from '@/constants/decreeData';
import { AlertTriangle } from 'lucide-react';

interface CrimesImpeditivosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CrimeItem: React.FC<{ crime: CrimeImpeditivo }> = ({ crime }) => (
  <div className="mb-4 p-3 border rounded-md shadow-sm bg-card">
    <h4 className="font-semibold text-sm text-destructive-foreground bg-destructive p-2 rounded-t-md -m-3 mb-2">{crime.title}</h4>
    <p className="text-sm text-card-foreground mt-4">{crime.details}</p>
    {crime.law && <p className="text-xs text-muted-foreground mt-1"><strong>Base Legal:</strong> {crime.law}</p>}
    {crime.exception && <p className="text-xs text-amber-700 dark:text-amber-500 mt-1"><strong>Exceção:</strong> {crime.exception}</p>}
  </div>
);

export const CrimesImpeditivosModal: React.FC<CrimesImpeditivosModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] md:max-w-[750px] lg:max-w-[900px] max-h-[90vh] flex flex-col">
        <DialogHeader className="p-4 border-b">
          <DialogTitle className="text-2xl font-headline flex items-center">
            <AlertTriangle className="w-7 h-7 mr-2 text-destructive" />
            Crimes Impeditivos - Art. 1º do Decreto
          </DialogTitle>
          <DialogDescription className="text-sm">
            Lista de crimes e situações que impedem a concessão de indulto ou comutação de pena, conforme o Decreto nº 12.338/24.
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="flex-grow p-1 pr-2 overflow-y-auto">
          <div className="p-4 space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-2">Inciso I a XIX:</h3>
            {crimesImpeditivosArt1.map((crime) => (
              <CrimeItem key={crime.id} crime={crime} />
            ))}
            <Separator className="my-6" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Parágrafos §1º a §3º:</h3>
            {crimesImpeditivosParagrafos.map((paragrafo) => (
              <CrimeItem key={paragrafo.id} crime={paragrafo} />
            ))}
          </div>
        </ScrollArea>
        
        <DialogFooter className="p-4 border-t">
          <Button onClick={onClose} variant="outline">Fechar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
