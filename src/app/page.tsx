
'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ThematicIndex } from '@/components/dashboard/ThematicIndex';
import { ThematicGroup } from '@/components/dashboard/ThematicGroup';
import { CrimesImpeditivosModal } from '@/components/dashboard/CrimesImpeditivosModal';
import { ReducaoLapsosCard } from '@/components/dashboard/ReducaoLapsosCard';
import { ScrollToTopButton } from '@/components/utils/ScrollToTopButton';
import { dashboardSections } from '@/constants/decreeData'; 
import { AlertTriangle } from 'lucide-react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    dashboardSections.forEach(section => {
      sectionRefs.current[section.id] = document.getElementById(section.id);
    });
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      const yOffset = -120; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen container mx-auto px-4 py-8 md:py-12 bg-background">
      <header className="mb-10 text-center fade-in-up flex flex-col items-center">
        <Image
          src="/images/selo institucional.jpg" 
          alt="Selo MPPE"
          width={150}
          height={150}
          className="mb-4"
          data-ai-hint="logo emblem"
        />
        <h1 className="text-4xl md:text-4xl font-headline font-bold text-foreground mb-2">
          Decreto nº 12.338/24
        </h1>
        <p className="text-base md:text-lg text-muted-foreground">
          Ministério Público do Estado de Pernambuco
        </p>
      </header>

      <ThematicIndex sections={dashboardSections} onNavigate={handleNavigate} />

      <div className="my-8 flex justify-center fade-in-up w-full" style={{ animationDelay: '0.1s' }}>
        <Button 
          onClick={() => setIsModalOpen(true)} 
          variant="outline"
          size="lg"
          className="shadow-lg hover:shadow-xl transition-shadow duration-200 w-full bg-muted text-foreground hover:bg-muted/90"
        >
          <AlertTriangle className="w-5 h-5 mr-2" />
          Ver Crimes Impeditivos (Art. 1º)
        </Button>
      </div>

      <main className="mt-12 space-y-16">
        {dashboardSections.map((section, index) => {
          const IconComponent = section.icon;
          return (
           <div key={section.id} className="fade-in-up" style={{ animationDelay: `${0.2 + index * 0.05}s` }}>
            <div 
              id={section.id} 
              className="p-3 rounded-lg shadow-md mb-2 bg-muted text-center scroll-mt-32"
            >
              <h2 
                className="text-xl md:text-2xl font-headline font-semibold text-foreground flex items-center justify-center"
              >
                <IconComponent className="w-6 h-6 mr-3 text-primary" />
                {section.title}
              </h2>
            </div>
            <ThematicGroup section={section} />
           </div>
          );
        })}
      </main>
      
      <div className="mt-16 fade-in-up" style={{ animationDelay: `${0.2 + dashboardSections.length * 0.05 + 0.1}s` }}>
        <ReducaoLapsosCard />
      </div>
      
      <footer className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground fade-in-up" style={{ animationDelay: `${0.2 + dashboardSections.length * 0.05 + 0.2}s` }}>
        <p>© Dashboard | Decreto nº 12.338/24. Criada por Felipe Jurema.</p>
        <p></p>Promotorias de Justiça das Execuções Penais da Capital.
        <p>Este material é para fins de consulta e não substitui a leitura integral do Decreto nº 12.338/24.</p>
      </footer>
      
      <CrimesImpeditivosModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ScrollToTopButton />
    </div>
  );
}
