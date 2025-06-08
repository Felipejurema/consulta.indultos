
export interface ParsedRequirement {
  incisoKey: string; 
  incisoBadgeDisplay: string; 
  incisoCompleto: string; 
  regime: string;
  requisitoAdicional: string;
  penaMaxima: string;
  percentualTempo: string;
  reincidenciaRaw: string; 
}

export const parseRequirementText = (text: string): ParsedRequirement => {
  const parts = text.split(' – ');
  const incisoCompleto = parts[0] || 'N/A';
  
  let incisoKeyPart = incisoCompleto;
  let displayBadgeText = `Inciso ${incisoKeyPart}`;

  const matchNonReincidente = incisoCompleto.match(/^(.*?)\s*\(não reincidente\)/i);
  const matchReincidente = incisoCompleto.match(/^(.*?)\s*\(reincidente\)/i);

  if (incisoCompleto.toLowerCase().startsWith('art. 13')) {
    incisoKeyPart = 'ART.13';
    displayBadgeText = 'Art. 13';
     if (matchNonReincidente) {
      // Keep "Art. 13" as the key part for grouping, but allow full display in `incisoCompleto`
    } else if (matchReincidente) {
      // Keep "Art. 13" as the key part
    }
  } else {
    if (matchNonReincidente) {
      incisoKeyPart = matchNonReincidente[1].trim();
    } else if (matchReincidente) {
      incisoKeyPart = matchReincidente[1].trim();
    }
    displayBadgeText = `Inciso ${incisoKeyPart}`;
  }
  
  const incisoKey = incisoKeyPart.toUpperCase().replace(/\s+/g, ''); // Normalize key

  return {
    incisoKey,
    incisoBadgeDisplay: displayBadgeText,
    incisoCompleto,
    regime: parts[1]?.trim() || '—',
    requisitoAdicional: parts[2]?.trim() || '—',
    penaMaxima: parts[3]?.trim() || '—',
    percentualTempo: parts[4]?.trim() || '—',
    reincidenciaRaw: parts[5]?.trim() || '—',
  };
};
