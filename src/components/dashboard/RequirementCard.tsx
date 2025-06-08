
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { Requirement } from '@/constants/decreeData';
import { incisoLegalTexts } from '@/constants/decreeData';
import { parseRequirementText, type ParsedRequirement } from '@/lib/parseRequirementUtils';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';
import { IncisoDetailModal } from './IncisoDetailModal';

interface RequirementCardProps {
  requirements: Requirement[];
  icon: LucideIcon; 
  sectionId: string; 
}

const formatLabel = (text: string | undefined | null, options?: { sentenceCaseOnly?: boolean }): string => {
  if (!text || typeof text !== 'string') return '';
  let processedText = text.trim();

  if (options?.sentenceCaseOnly) {
    if (processedText.length === 0) return '';
    return processedText.charAt(0).toUpperCase() + processedText.slice(1).toLowerCase();
  }
  
  processedText = processedText.charAt(0).toUpperCase() + processedText.slice(1).toLowerCase();
  
  const specialCases = ["PRD", "CP", "CNJ", "HIV", "OU", "ECA", "ART."]; 

  processedText = processedText.split(' ').map(word => {
    const cleanedWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
    const punctuation = word.substring(cleanedWord.length); 

    if (specialCases.includes(cleanedWord.toUpperCase())) {
      return cleanedWord.toUpperCase() + punctuation;
    }
    if (cleanedWord.includes('-')) {
        return cleanedWord.split('-').map((part, index) => {
            if (index === 0 && part.length > 0) return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
            return part.toLowerCase();
        }).join('-') + punctuation;
    }
    return word;
  }).join(' ');
  
  if (processedText.length > 0) {
    processedText = processedText.charAt(0).toUpperCase() + processedText.slice(1);
  }
  
  if (processedText.toLowerCase().startsWith('art. ')) {
      processedText = 'Art.' + processedText.substring(4);
  }

  return processedText;
};


export const RequirementCard: React.FC<RequirementCardProps> = ({ requirements, sectionId }) => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  if (!requirements || requirements.length === 0) {
    return null;
  }

  const allParsedData = requirements.map(r => parseRequirementText(r.text));
  const commonData = allParsedData[0]; 
  const currentLegalText = incisoLegalTexts[commonData.incisoKey] || "Texto legal não encontrado para este inciso.";


  const isCrimesSemViolencia = sectionId === 'crimes-sem-violencia';
  const isCrimesPatrimoniaisSemViolencia = sectionId === 'crimes-patrimoniais-sem-violencia';
  const isCrimesComViolencia = sectionId === 'crimes-com-violencia';

  const showPenaInfo = (incisoKey: string, penaValue: string) => {
    return penaValue && penaValue !== '—' && penaValue.toLowerCase() !== 'qualquer';
  }

  const getPenaLabel = (incisoKey: string) => {
    if (['I', 'II', 'III', 'XI', 'XII', 'XIII'].includes(incisoKey)) return "Pena Aplicada";
    return "Pena Máxima";
  }
  
  const shouldShowRegimeTitle = commonData.regime && commonData.regime !== '—';


  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02] hover:-translate-y-1 h-full flex flex-col bg-card relative w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.66rem)] min-w-[280px] max-w-sm">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-7 w-7 rounded-full text-muted-foreground hover:bg-muted/50 hover:text-foreground z-10"
        onClick={() => setIsDetailModalOpen(true)}
        aria-label="Ver texto legal do inciso"
      >
        <HelpCircle className="h-4 w-4" />
      </Button>
      <CardContent className="p-4 flex flex-col flex-grow">
        <div className="flex items-center mb-3 space-x-2 flex-wrap">
          <Badge
            variant="secondary"
            className="text-xs font-semibold bg-accent/10 text-accent-foreground border-accent/30 py-1 px-2 mb-1"
          >
            {commonData.incisoBadgeDisplay}
          </Badge>
          {(isCrimesSemViolencia || isCrimesPatrimoniaisSemViolencia) && (
            <Badge
              className="text-xs font-semibold py-1 px-2 mb-1 transform transition-transform duration-150 ease-in-out hover:scale-105 hover:bg-opacity-80"
              style={{
                backgroundColor: 'var(--theme-color-sem-violencia-badge-bg)',
                color: 'var(--theme-color-sem-violencia-badge-text)',
                borderColor: 'var(--theme-color-sem-violencia-badge-border)',
                borderWidth: '1px',
              }}
            >
              Sem violência
            </Badge>
          )}
          {isCrimesComViolencia && (
             <Badge
              className="text-xs font-semibold py-1 px-2 mb-1 transform transition-transform duration-150 ease-in-out hover:scale-105 hover:bg-opacity-80"
              style={{
                backgroundColor: 'var(--theme-color-com-violencia-badge-bg)',
                color: 'var(--theme-color-com-violencia-badge-text)',
                borderColor: 'var(--theme-color-com-violencia-badge-border)',
                borderWidth: '1px',
              }}
            >
              Com violência
            </Badge>
          )}
        </div>

        {shouldShowRegimeTitle && (
          <>
            <p className="text-xs text-muted-foreground mb-1">{formatLabel("Regime", { sentenceCaseOnly: true })}</p>
            <p className="font-semibold text-foreground mb-2 leading-tight">{formatLabel(commonData.regime)}</p>
          </>
        )}
        
        { ( (commonData.incisoKey !== 'XII' && commonData.requisitoAdicional !== '—' && commonData.incisoKey !== 'VIII' && commonData.incisoKey !== 'IX') || (showPenaInfo(commonData.incisoKey, commonData.penaMaxima) && commonData.incisoKey !== 'XI' && commonData.incisoKey !== 'XIII' ) ) && <Separator className="my-2 border-dashed border-border" /> }

        <div className="space-y-2 text-sm flex-grow">
           { (commonData.incisoKey === 'XI' || commonData.incisoKey === 'XIII') && showPenaInfo(commonData.incisoKey, commonData.penaMaxima) && (
            <div>
              <span className="text-foreground/80">{formatLabel(getPenaLabel(commonData.incisoKey), { sentenceCaseOnly: true })}:</span>
              <p className="text-foreground text-sm font-semibold leading-snug">{formatLabel(commonData.penaMaxima)}</p>
            </div>
          )}

          {commonData.incisoKey !== 'XII' && commonData.incisoKey !== 'VIII' && commonData.incisoKey !== 'IX' && commonData.requisitoAdicional !== '—' && commonData.incisoKey !== 'V' && commonData.incisoKey !== 'XI' && (
            <div>
              <span className="text-foreground/80">{formatLabel("Requisito Adicional", { sentenceCaseOnly: true })}:</span>
              <p className="text-foreground text-sm font-semibold leading-snug">{formatLabel(commonData.requisitoAdicional, { sentenceCaseOnly: true })}</p>
            </div>
          )}
          
          {commonData.incisoKey === 'V' && commonData.requisitoAdicional !== '—' && (
             <div>
              <span className="text-foreground/80">{formatLabel("Requisito Adicional", { sentenceCaseOnly: true })}:</span>
              <p className="text-foreground text-sm font-semibold leading-snug">
                {formatLabel(commonData.requisitoAdicional.split('.')[0] + '.', { sentenceCaseOnly: true })}
              </p>
              {commonData.requisitoAdicional.split('.')[1] && (
                <p className="text-foreground text-sm font-semibold leading-snug">
                  {formatLabel(commonData.requisitoAdicional.split('.').slice(1).join('.').trim(), { sentenceCaseOnly: true })}
                </p>
              )}
            </div>
          )}


          {commonData.incisoKey === 'XI' && commonData.requisitoAdicional !== '—' && (
             <div>
              <span className="text-foreground/80">{formatLabel("Requisito Adicional", { sentenceCaseOnly: true })}:</span>
              <p className="text-foreground text-sm font-semibold leading-snug">{formatLabel(commonData.requisitoAdicional, { sentenceCaseOnly: true })}</p>
            </div>
          )}


          {!(commonData.incisoKey === 'XI' || commonData.incisoKey === 'XIII') && showPenaInfo(commonData.incisoKey, commonData.penaMaxima) && (
            <div>
              <span className="text-foreground/80">{formatLabel(getPenaLabel(commonData.incisoKey), { sentenceCaseOnly: true })}:</span>
              <p className="text-foreground text-sm font-semibold leading-snug">{formatLabel(commonData.penaMaxima)}</p>
            </div>
          )}
        </div>

        {allParsedData.length > 0 && <Separator className="my-3 border-border" />}

        <div className="space-y-3">
          {allParsedData.map((parsed, index) => (
            <div key={requirements[index].id} className="text-sm">
              <div className="flex items-center space-x-2 mb-1 flex-wrap">
                {parsed.reincidenciaRaw.toLowerCase().includes('não reincidente') && (
                  <Badge
                    className="text-xs font-semibold py-1 px-2 mb-1 transform transition-transform duration-150 ease-in-out hover:scale-105 hover:bg-opacity-80"
                    style={{
                      backgroundColor: 'var(--theme-color-primario-badge-bg)',
                      color: 'var(--theme-color-primario-badge-text)',
                      borderColor: 'var(--theme-color-primario-badge-border)',
                      borderWidth: '1px',
                    }}
                  >
                    Primário
                  </Badge>
                )}
                {parsed.reincidenciaRaw.toLowerCase().includes('reincidente') && 
                 !parsed.reincidenciaRaw.toLowerCase().includes('não reincidente') && 
                  <Badge
                    className="text-xs font-semibold py-1 px-2 mb-1 transform transition-transform duration-150 ease-in-out hover:scale-105 hover:bg-opacity-80"
                    style={{
                      backgroundColor: 'var(--theme-color-reincidencia-badge-bg)',
                      color: 'var(--theme-color-reincidencia-badge-text)',
                      borderColor: 'var(--theme-color-reincidencia-badge-border)',
                      borderWidth: '1px',
                    }}
                  >
                    Reincidente
                  </Badge>
                }
              </div>
              
              {parsed.incisoKey === 'VIII' && (
                 <div>
                    <span className="text-foreground/80">{formatLabel("Requisito Adicional", { sentenceCaseOnly: true })}:</span>
                    <p className="text-foreground text-sm font-semibold leading-snug">{formatLabel(parsed.requisitoAdicional, { sentenceCaseOnly: true })}</p>
                  </div>
              )}

              {parsed.incisoKey === 'XII' && parsed.requisitoAdicional !== '—' && (
                 <div>
                    <span className="text-foreground/80">{formatLabel("Requisito Adicional", { sentenceCaseOnly: true })}:</span>
                    <p className="text-foreground text-sm font-semibold leading-snug">{formatLabel(parsed.requisitoAdicional, { sentenceCaseOnly: true })}</p>
                  </div>
              )}
              
              {parsed.incisoKey === 'IX' && parsed.requisitoAdicional !== '—' && (
                 <div>
                    <span className="text-foreground/80">{formatLabel("Requisito Adicional", { sentenceCaseOnly: true })}:</span>
                    <p className="text-foreground text-sm font-semibold leading-snug">{formatLabel(parsed.requisitoAdicional, { sentenceCaseOnly: true })}</p>
                  </div>
              )}


              {parsed.percentualTempo !== '—' ? (
                <div>
                  <span className="text-foreground/80">{formatLabel("Tempo de cumprimento", { sentenceCaseOnly: true })}:</span>
                  <p className="text-foreground text-sm font-semibold leading-snug">{formatLabel(parsed.percentualTempo)}</p>
                </div>
              ) : null}
              
              {parsed.incisoKey === 'IX' && parsed.reincidenciaRaw === '—' && parsed.percentualTempo === '—' && (
                <p className="text-muted-foreground text-xs italic">Nos termos da Res. CNJ nº 307/19.</p>
              )}
              {sectionId === 'indultos-humanitarios' && parsed.incisoKey !== 'IX' && parsed.reincidenciaRaw === '—' && parsed.percentualTempo === '—' && (
                <p className="text-muted-foreground text-xs italic">Mediante parecer técnico de junta multiprofissional.</p>
              )}
              {parsed.incisoKey !== 'IX' && sectionId !== 'indultos-humanitarios' &&
                parsed.reincidenciaRaw === '—' && 
                parsed.percentualTempo === '—' &&
                !((parsed.incisoKey === 'VIII' || parsed.incisoKey === 'XII') && parsed.requisitoAdicional !== '—') &&
                (
                  <p className="text-muted-foreground text-xs italic">Requisitos gerais aplicáveis.</p>
                )
              }
            </div>
          ))}
        </div>
      </CardContent>
       {isDetailModalOpen && (
        <IncisoDetailModal
          isOpen={isDetailModalOpen}
          onClose={() => setIsDetailModalOpen(false)}
          incisoTitle={commonData.incisoBadgeDisplay}
          legalText={currentLegalText}
        />
      )}
    </Card>
  );
};
