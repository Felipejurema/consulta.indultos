
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import type { ThematicSection, Requirement } from '@/constants/decreeData';
import { RequirementCard } from './RequirementCard';
import { parseRequirementText } from '@/lib/parseRequirementUtils';

interface ThematicGroupProps {
  section: ThematicSection;
}

export const ThematicGroup: React.FC<ThematicGroupProps> = ({ section }) => {
  const requirementsByInciso = new Map<string, Requirement[]>();

  section.requirements.forEach(req => {
    const parsed = parseRequirementText(req.text);
    const key = parsed.incisoKey; 
    if (!requirementsByInciso.has(key)) {
      requirementsByInciso.set(key, []);
    }
    requirementsByInciso.get(key)!.push(req);
  });

  return (
    <section>
      <Card 
        className="overflow-hidden shadow-xl border-2 rounded-lg"
        style={{ 
          backgroundColor: section.colorBgVar, 
          borderColor: section.colorBorderVar 
        }}
      >
        <CardContent className="px-4 pb-4 pt-4">
          {Array.from(requirementsByInciso.values()).length > 0 ? (
            <div className="flex flex-wrap gap-4"> {/* Changed justify-center to default (flex-start) */}
              {Array.from(requirementsByInciso.entries()).map(([incisoKey, reqsForInciso]) => (
                <RequirementCard 
                  key={incisoKey} 
                  requirements={reqsForInciso} 
                  icon={reqsForInciso[0].icon} 
                  sectionId={section.id}
                />
              ))}
            </div>
          ) : (
            <p 
              className="italic text-muted-foreground"
            >
              Nenhum requisito específico listado para esta seção.
            </p>
          )}
        </CardContent>
      </Card>
    </section>
  );
};
