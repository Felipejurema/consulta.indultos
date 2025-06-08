
import React from 'react';
import type { ThematicSection } from '@/constants/decreeData';
import { ScrollText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ThematicIndexProps {
  sections: ThematicSection[];
  onNavigate: (sectionId: string) => void;
}

export const ThematicIndex: React.FC<ThematicIndexProps> = ({ sections, onNavigate }) => {
  return (
    <Card className="mb-6 shadow-xl fade-in-up bg-card border-2 border-primary/30">
      <CardHeader className="bg-primary/5 border-b border-primary/20">
        <CardTitle className="text-2xl font-headline text-foreground flex items-center">
          <ScrollText className="w-7 h-7 mr-3 text-primary" />
          Menu Temático
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {sections.map((section) => (
            <button
              key={section.id}
              className="flex flex-col items-start justify-center text-left p-3 rounded-md shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring h-full"
              style={{
                backgroundColor: section.colorBgVar,
                borderColor: section.colorBorderVar,
                borderWidth: '2px',
                borderStyle: 'solid',
              }}
              onClick={() => onNavigate(section.id)}
              aria-label={`Navegar para ${section.title}`}
            >
              <div className="flex items-center">
                <section.icon 
                  className="w-5 h-5 mr-2 shrink-0" 
                  style={{ color: section.colorBorderVar }}
                />
                <span 
                  className="font-semibold text-sm block leading-tight text-foreground"
                >
                  {section.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

