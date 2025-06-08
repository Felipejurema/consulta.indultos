
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
import { BookText } from 'lucide-react';

interface IncisoDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  incisoTitle: string;
  legalText: string;
}

export const IncisoDetailModal: React.FC<IncisoDetailModalProps> = ({ isOpen, onClose, incisoTitle, legalText }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] md:max-w-[750px] lg:max-w-[900px] max-h-[90vh] flex flex-col bg-card">
        <DialogHeader className="p-4 border-b border-border">
          <DialogTitle className="text-xl font-headline flex items-center text-foreground">
            <BookText className="w-6 h-6 mr-3 text-primary" />
            Redação Legal - Art. 9º, {incisoTitle}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex-grow p-1 pr-2 overflow-y-auto">
          <DialogDescription asChild className="block p-4 text-foreground">
            <pre className="whitespace-pre-wrap text-sm font-sans">
              {legalText}
            </pre>
          </DialogDescription>
        </ScrollArea>
        <DialogFooter className="p-4 border-t border-border">
          <Button onClick={onClose} variant="outline">Fechar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

