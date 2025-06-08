
import type { LucideIcon } from 'lucide-react';
import { 
  Scale, 
  Bomb, // Changed from AlertTriangle
  CalendarClock,
  Building,
  Activity, 
  GraduationCap,
  Home,
  ClipboardCheck,
  Users,
  Landmark, 
  HeartHandshake, 
  RadioTower, 
  Briefcase,   
  BookOpen,
  Repeat 
} from 'lucide-react';

export interface CrimeImpeditivo {
  id: string;
  title: string;
  details: string;
  law?: string;
  exception?: string;
}

export interface Requirement {
  id: string;
  text: string; 
  icon: LucideIcon;
}

export interface ThematicSection {
  id: string;
  title: string;
  colorBgVar: string; 
  colorBorderVar: string; 
  requirements: Requirement[];
  icon: LucideIcon; 
}

export const crimesImpeditivosArt1: CrimeImpeditivo[] = [
  { id: 'art1-i', title: 'Inciso I', details: 'Crime hediondo ou equiparado', law: 'Lei nº 8.072/90' },
  { id: 'art1-ii', title: 'Inciso II', details: 'Tortura', law: 'Lei nº 9.455/97' },
  { id: 'art1-iii', title: 'Inciso III', details: 'Lavagem de Dinheiro', law: 'Lei nº 9.613/98', exception: 'exceto quando a pena aplicada não for superior a quatro anos' },
  { id: 'art1-iv', title: 'Inciso IV', details: 'Organização Criminosa (Lei nº 12.850/13) e Constituição de Milícia Privada (art. 288-A do Código Penal)', law: 'Lei nº 12.850/13 e Código Penal' },
  { id: 'art1-v', title: 'Inciso V', details: 'Terrorismo', law: 'Lei nº 13.260/16' },
  { id: 'art1-vi', title: 'Inciso VI', details: 'Racismo', law: 'Lei nº 7.716/89' },
  { id: 'art1-vii', title: 'Inciso VII', details: 'Redução a condição análoga à de escravo (art. 149 CP) e Tráfico de Pessoas (art. 149-A CP)', law: 'Código Penal' },
  { id: 'art1-viii', title: 'Inciso VIII', details: 'Genocídio', law: 'Lei nº 2.889/56' },
  { id: 'art1-ix', title: 'Inciso IX', details: 'Crimes contra o Sistema Financeiro Nacional', law: 'Lei nº 7.492/86', exception: 'exceto quando a pena aplicada não for superior a quatro anos' },
  { id: 'art1-x', title: 'Inciso X', details: 'Crimes em Licitações e Contratos Administrativos', law: 'Lei nº 14.133/21 ou Lei nº 8.666/93', exception: 'exceto quando a pena aplicada não for superior a quatro anos' },
  { id: 'art1-xi', title: 'Inciso XI', details: 'Crimes contra a Dignidade Sexual (arts. 215, 216-A, 217-A, 218, 218-A, 218-B e 218-C CP)', law: 'Código Penal' },
  { id: 'art1-xii', title: 'Inciso XII', details: 'Crimes contra a Administração Pública (arts. 312 a 319 e art. 333 CP)', law: 'Código Penal', exception: 'exceto quando a pena aplicada não for superior a quatro anos' },
  { id: 'art1-xiii', title: 'Crimes contra Crianças e Adolescentes (arts. 239 a 244-B ECA)', details: 'Crimes definidos nos arts. 239 a 244-B do Estatuto da Criança e do Adolescente.', law: 'Lei nº 8.069/90 (ECA)' },
  { id: 'art1-xiv', title: 'Inciso XIV', details: 'Crimes Ambientais', law: 'Lei nº 9.605/98' },
  { id: 'art1-xv', title: 'Inciso XV', details: 'Crimes contra o Estado Democrático de Direito (arts. 359-I a 359-R CP)', law: 'Código Penal' },
  { id: 'art1-xvi', title: 'Inciso XVI', details: 'Crimes de abuso de autoridade', law: 'Lei nº 13.869/19' },
  { id: 'art1-xvii', title: 'Inciso XVII', details: 'Crimes de violência contra a mulher', law: 'Diversas leis e artigos (art. 121-A, art. 147-A CP; Lei nº 11.340/06; Lei nº 13.718/18; Lei nº 14.192/21)' },
  { id: 'art1-xviii', title: 'Inciso XVIII', details: 'Tráfico ilícito de drogas (art. 33, caput e §1º, arts. 34 a 37 e art. 39 da Lei nº 11.343/06)', law: 'Lei nº 11.343/06' },
  { id: 'art1-xix', title: 'Inciso XIX', details: 'Crime previsto no Código Penal Militar que corresponda a crime previsto nos incisos I a XVIII.', law: 'Código Penal Militar' },
];

export const crimesImpeditivosParagrafos: CrimeImpeditivo[] = [
  { id: 'art1-p1', title: '§ 1º', details: 'Pessoas que tenham firmado acordo de colaboração premiada, independentemente do crime praticado.', law: 'Lei nº 12.850/13' },
  { id: 'art1-p2', title: '§ 2º', details: 'Penas acessórias previstas no Código Penal Militar e aos efeitos da condenação.' },
  { id: 'art1-p3-i', title: '§ 3º, I', details: 'Integrantes de facções criminosas que nelas desempenhem ou tenham desempenhado função de liderança ou que tenham participado de forma relevante em organização criminosa.' },
  { id: 'art1-p3-ii', title: '§ 3º, II', details: 'Pessoas que estejam submetidas ao Regime Disciplinar Diferenciado – RDD.' },
  { id: 'art1-p3-iii', title: '§ 3º, III', details: 'Pessoas incluídas ou transferidas para cumprimento de pena em estabelecimentos penais de segurança máxima.', law: 'Art. 11-B da Lei nº 11.671/08' },
];

const art9Caput = "Art. 9º  Concede-se o indulto coletivo às pessoas, nacionais e migrantes, condenadas:\n\n";
const art13Caput = "Art. 13.  Concede-se a comutação da pena remanescente na proporção de um quinto da pena, às pessoas condenadas a pena privativa de liberdade que tenham cumprido, até 25 de dezembro de 2024, um quinto da pena, se não reincidentes, ou um quarto da pena, se reincidentes.";


export const dashboardSections: ThematicSection[] = [
  {
    id: 'crimes-sem-violencia',
    title: 'Crimes s/ Violência ou Grave Ameaça',
    icon: Scale,
    colorBgVar: 'var(--theme-color-spectrum-1-bg)',
    colorBorderVar: 'var(--theme-color-spectrum-1-border)',
    requirements: [
      { id: 'csv-i-nr', text: 'I (não reincidente) – Qualquer – — – ≤ 8 anos – 1/5 – Não reincidente', icon: Scale },
      { id: 'csv-i-r', text: 'I (reincidente) – Qualquer – — – ≤ 8 anos – 1/3 – Reincidente', icon: Scale },
      { id: 'csv-ii-nr', text: 'II (não reincidente) – Qualquer – — – ≤ 12 anos – 1/3 – Não reincidente', icon: Scale },
      { id: 'csv-ii-r', text: 'II (reincidente) – Qualquer – — – ≤ 12 anos – 1/2 – Reincidente', icon: Scale },
    ],
  },
  {
    id: 'crimes-com-violencia',
    title: 'Crimes c/ Violência ou Grave Ameaça',
    icon: Bomb, // Icon changed
    colorBgVar: 'var(--theme-color-spectrum-2-bg)',
    colorBorderVar: 'var(--theme-color-spectrum-2-border)',
    requirements: [
      { id: 'ccv-iii-nr', text: 'III (não reincidente) – Qualquer – — – ≤ 4 anos – 1/3 – Não reincidente', icon: Bomb },
      { id: 'ccv-iii-r', text: 'III (reincidente) – Qualquer – — – ≤ 4 anos – 1/2 – Reincidente', icon: Bomb },
    ],
  },
  { // Unified Regime Semiaberto
    id: 'regime-semiaberto', 
    title: 'Regime Semiaberto',
    icon: Building,
    colorBgVar: 'var(--theme-color-spectrum-3-bg)', // Uses spectrum-3
    colorBorderVar: 'var(--theme-color-spectrum-3-border)',
    requirements: [
      // Requirements from original 'regime-semiaberto'
      { id: 'rs-vi-nr', text: 'VI (não reincidente) – Semiaberto – Cumprimento ininterrupto – Qualquer – 10 anos – Não reincidente', icon: Building },
      { id: 'rs-vi-r', text: 'VI (reincidente) – Semiaberto – Cumprimento ininterrupto – Qualquer – 15 anos – Reincidente', icon: Building },
      // Requirements from original 'regime-semiaberto-beneficios'
      { id: 'rsb-x', text: 'X – Semiaberto c/ monitoramento eletrônico – Nesse regime ≥ 3 anos (SV 56) – Qualquer – — – —', icon: RadioTower },
      { id: 'rsb-xi-nr', text: 'XI (não reincidente) – Semiaberto ou aberto – 5 saídas temporárias OU 12 meses de trabalho externo nos últimos 3 anos – ≤ 12 anos – 1/3 – Não reincidente', icon: Briefcase },
      { id: 'rsb-xi-r', text: 'XI (reincidente) – Semiaberto ou aberto – 5 saídas temporárias OU 12 meses de trabalho externo nos últimos 3 anos – ≤ 12 anos – 1/2 – Reincidente', icon: Briefcase },
    ],
  },
  {
    id: 'regimes-brandos',
    title: 'Regimes Brandos',
    icon: Home,
    colorBgVar: 'var(--theme-color-spectrum-4-bg)', // Uses spectrum-4
    colorBorderVar: 'var(--theme-color-spectrum-4-border)',
    requirements: [
      { id: 'rapa-vii-nr', text: 'VII (não reincidente) – Aberto / PRD / Sursis – — – Qualquer – 1/6 – Não reincidente', icon: Home },
      { id: 'rapa-vii-r', text: 'VII (reincidente) – Aberto / PRD / Sursis – — – Qualquer – 1/5 – Reincidente', icon: Home },
      { id: 'lca-viii-nr', text: 'VIII (não reincidente) – Aberto ou livramento condicional – Pena remanescente ≤ 6 anos – Qualquer – — – Não reincidente', icon: ClipboardCheck },
      { id: 'lca-viii-r', text: 'VIII (reincidente) – Aberto ou livramento condicional – Pena remanescente ≤ 4 anos – Qualquer – — – Reincidente', icon: ClipboardCheck },
    ],
  },
  {
    id: 'crimes-patrimoniais-sem-violencia',
    title: 'Crimes Patrimoniais s/ Violência',
    icon: Landmark,
    colorBgVar: 'var(--theme-color-spectrum-5-bg)', // Uses spectrum-5
    colorBorderVar: 'var(--theme-color-spectrum-5-border)',
    requirements: [
      { id: 'cpsv-xiv', text: 'XIV – Qualquer – Valor do bem ≤ 1 salário-mínimo – Qualquer – 3 meses – —', icon: Landmark },
      { id: 'cpsv-xv', text: 'XV – Qualquer – Reparação do dano (art. 16 ou 65 III “b” CP) – Qualquer – — – —', icon: Landmark },
    ],
  },
  {
    id: 'tempo-longo-pena-cumprida',
    title: 'Tempo Longo de Pena Cumprida',
    icon: CalendarClock,
    colorBgVar: 'var(--theme-color-spectrum-6-bg)', // Uses spectrum-6
    colorBorderVar: 'var(--theme-color-spectrum-6-border)',
    requirements: [
      { id: 'tlpc-iv-nr', text: 'IV (não reincidente) – Qualquer – Cumprimento ininterrupto – Qualquer – 15 anos – Não reincidente', icon: CalendarClock },
      { id: 'tlpc-iv-r', text: 'IV (reincidente) – Qualquer – Cumprimento ininterrupto – Qualquer – 20 anos – Reincidente', icon: CalendarClock },
      { id: 'tlpc-v-nr', text: 'V (não reincidente) – Qualquer – Cumprimento não ininterrupto. Intervalo em liberdade ≤ 2 anos – Qualquer – 20 anos – Não reincidente', icon: CalendarClock },
      { id: 'tlpc-v-r', text: 'V (reincidente) – Qualquer – Cumprimento não ininterrupto. Intervalo em liberdade ≤ 2 anos – Qualquer – 25 anos – Reincidente', icon: CalendarClock },
    ],
  },
  {
    id: 'educacao-formal',
    title: 'Educação Formal',
    icon: GraduationCap,
    colorBgVar: 'var(--theme-color-spectrum-7-bg)', // Uses spectrum-7
    colorBorderVar: 'var(--theme-color-spectrum-7-border)',
    requirements: [
      { id: 'ef-xii-nr', text: 'XII (não reincidente) – Qualquer – Frequência em curso por 12 meses nos últimos 3 anos – ≤ 12 anos – 1/5 – Não reincidente', icon: BookOpen },
      { id: 'ef-xii-r', text: 'XII (reincidente) – Qualquer – Frequência em curso por 18 meses nos últimos 5 anos – ≤ 12 anos – 1/4 – Reincidente', icon: BookOpen },
      { id: 'ef-xiii-nr', text: 'XIII (não reincidente) – Qualquer – Conclusão de curso nos últ. 3 anos – ≤ 12 anos – 1/5 – Não reincidente', icon: GraduationCap },
      { id: 'ef-xiii-r', text: 'XIII (reincidente) – Qualquer – Conclusão de curso nos últ. 3 anos – ≤ 12 anos – 1/4 – Reincidente', icon: GraduationCap },
    ],
  },
  {
    id: 'inclusao-programa-egresso',
    title: 'Inclusão em Programa de Egresso',
    icon: Users,
    colorBgVar: 'var(--theme-color-spectrum-8-bg)', // Uses spectrum-8
    colorBorderVar: 'var(--theme-color-spectrum-8-border)',
    requirements: [
      { id: 'ipe-ix', text: 'IX – Aberto / PRD / Sursis / Livramento Condicional – Participação em programa de acompanhamento ≥ 2 anos + parecer favorável – Qualquer – — – —', icon: Users },
    ],
  },
  {
    id: 'indultos-humanitarios',
    title: 'Indultos Humanitários',
    icon: HeartHandshake,
    colorBgVar: 'var(--theme-color-spectrum-9-bg)', // Uses spectrum-9
    colorBorderVar: 'var(--theme-color-spectrum-9-border)',
    requirements: [
      { id: 'ih-xvi-a', text: 'XVI-A – Qualquer – Deficiência física grave superveniente (paraplegia, cegueira etc.) – Qualquer – — – —', icon: HeartHandshake },
      { id: 'ih-xvi-b', text: 'XVI-B – Qualquer – HIV em estágio terminal – Qualquer – — – —', icon: HeartHandshake },
      { id: 'ih-xvi-c', text: 'XVI-C – Qualquer – Gestante de alto risco (laudo) – Qualquer – — – —', icon: HeartHandshake },
      { id: 'ih-xvi-d', text: 'XVI-D – Qualquer – Doença grave crônica/contagiosa com limitação funcional – Qualquer – — – —', icon: HeartHandshake },
      { id: 'ih-xvi-e', text: 'XVI-E – Qualquer – Transtorno do espectro autista severo (grau 3) – Qualquer – — – —', icon: HeartHandshake },
    ],
  },
  {
    id: 'comutacao',
    title: 'Comutação',
    icon: Repeat,
    colorBgVar: 'var(--theme-color-spectrum-10-bg)', // Uses spectrum-10
    colorBorderVar: 'var(--theme-color-spectrum-10-border)',
    requirements: [
      { id: 'com-art13-nr', text: 'Art. 13 (não reincidente) – Qualquer – — – — – 1/5 – Não reincidente', icon: Repeat },
      { id: 'com-art13-r', text: 'Art. 13 (reincidente) – Qualquer – — – — – 1/4 – Reincidente', icon: Repeat },
    ],
  }
];


export const incisoLegalTexts: Record<string, string> = {
  'I': art9Caput + "I - a pena privativa de liberdade não superior a oito anos, por crime praticado sem violência ou grave ameaça a pessoa, que tenham cumprido, até 25 de dezembro de 2024, um quinto da pena, se não reincidentes, ou um terço da pena, se reincidentes;",
  'II': art9Caput + "II - a pena privativa de liberdade não superior a doze anos, por crime praticado sem violência ou grave ameaça a pessoa, que tenham cumprido, até 25 de dezembro de 2024, um terço da pena, se não reincidentes, ou metade da pena, se reincidentes;",
  'III': art9Caput + "III - a pena privativa de liberdade não superior a quatro anos, por crime praticado com violência ou grave ameaça a pessoa, que tenham cumprido, até 25 de dezembro de 2024, um terço da pena, se não reincidentes, ou metade da pena, se reincidentes;",
  'IV': art9Caput + "IV - a pena privativa de liberdade que, até 25 de dezembro de 2024, tenham cumprido, ininterruptamente, quinze anos da pena, se não reincidentes, ou vinte anos da pena, se reincidentes;",
  'V': art9Caput + "V - a pena privativa de liberdade que, até 25 de dezembro de 2024, tenham cumprido, não ininterruptamente, vinte anos da pena, se não reincidentes, ou vinte e cinco anos da pena, se reincidentes, desde que o período em liberdade não supere dois anos;",
  'VI': art9Caput + "VI - a pena privativa de liberdade que, até 25 de dezembro de 2024, tenham cumprido em regime semiaberto, ininterruptamente, dez anos da pena, se não reincidentes, ou quinze anos da pena, se reincidentes;",
  'VII': art9Caput + "VII - a pena privativa de liberdade sob o regime aberto ou substituída por pena restritiva de direitos, na forma prevista no art. 44 do Decreto-Lei nº 2.848, de 7 de dezembro de 1940 – Código Penal, ou beneficiadas com a suspensão condicional da pena, que tenham cumprido, até 25 de dezembro de 2024, um sexto da pena, se não reincidentes, ou um quinto da pena, se reincidentes;",
  'VIII': art9Caput + "VIII - a pena privativa de liberdade que estejam em livramento condicional ou cumprindo pena em regime aberto, cujo período da pena remanescente, em 25 de dezembro de 2024, não seja superior a seis anos, se não reincidentes, ou quatro anos, se reincidentes;",
  'IX': art9Caput + "IX - a pena privativa de liberdade sob regime aberto ou substituída por pena restritiva de direitos, ou em cumprimento de livramento condicional ou em suspensão condicional da pena que, até 25 de dezembro de 2024, estejam inseridas como pré-egressas ou egressas em programa de acompanhamento compatível com a Política de Atenção a Pessoas Egressas do Sistema Prisional, instituída pela Resolução nº 307, de 17 de dezembro de 2019, do Conselho Nacional de Justiça, por, no mínimo, dois anos, atendidas por meio de patronatos, escritórios sociais, centrais de alternativas penais ou órgãos congêneres, e que obtenham parecer favorável de aproveitamento do responsável local pelo programa de atendimento;",
  'X': art9Caput + "X - a pena privativa de liberdade que, até 25 de dezembro de 2024, em regime semiaberto mediante monitoramento eletrônico, na forma prevista na Resolução nº 412, de 23 de agosto de 2021, do Conselho Nacional de Justiça, cuja liberação tenha ocorrido com fundamento na Súmula Vinculante nº 56 do Supremo Tribunal Federal, e que se encontrem nessa condição há mais de três anos;",
  'XI': art9Caput + "XI - a pena privativa de liberdade não superior a doze anos, desde que já tenham cumprido um terço da pena, se não reincidentes, ou metade da pena, se reincidentes, em regime semiaberto ou aberto, e que tenham usufruído, até 25 de dezembro de 2024, de, no mínimo, cinco saídas temporárias previstas no art. 122, combinado com o art. 124, caput, da Lei nº 7.210, de 11 de julho de 1984, ou que tenham exercido trabalho externo por, no mínimo, doze meses nos três anos anteriores, contados retroativamente a 25 de dezembro de 2024;",
  'XII': art9Caput + "XII - a pena privativa de liberdade não superior a doze anos, desde que já tenham cumprido um quinto da pena, se não reincidentes, ou um quarto da pena, se reincidentes, e que tenham frequentado, ou estejam frequentando, curso de ensino fundamental, médio, superior, profissionalizante ou de requalificação profissional, na forma prevista no art. 126, caput, da Lei nº 7.210, de 11 de julho de 1984, por, no mínimo, doze meses, nos três anos anteriores, se não reincidentes, ou dezoito meses, nos cinco anos anteriores, se reincidentes, contados retroativamente a 25 de dezembro de 2024;",
  'XIII': art9Caput + "XIII - a pena privativa de liberdade não superior a doze anos, desde que já tenham cumprido um quinto da pena, se não reincidentes, ou um quarto da pena, se reincidentes, e tenham concluído, durante a execução da pena, curso de ensino fundamental, médio, superior ou profissionalizante, certificado por autoridade educacional local, na forma prevista no art. 126 da Lei nº 7.210, de 11 de julho de 1984, nos três anos anteriores, contados retroativamente a 25 de dezembro de 2024;",
  'XIV': art9Caput + "XIV - a pena privativa de liberdade por crime contra o patrimônio, cometido sem violência ou grave ameaça a pessoa, com valor do bem estimado não superior a um salário mínimo à época do fato, desde que tenham cumprido, até 25 de dezembro de 2024, três meses da pena privativa de liberdade;",
  'XV': art9Caput + "XV - a pena privativa de liberdade por crime contra o patrimônio, cometido sem violência ou grave ameaça a pessoa que, até 25 de dezembro de 2024, tenham reparado o dano conforme o disposto no art. 16 ou no art. 65, caput, inciso III, alínea “b”, do Decreto-Lei nº 2.848, de 7 de dezembro de 1940 – Código Penal, excetuada a necessidade de reparação do dano nas hipóteses previstas no art. 12, § 2º, deste Decreto; ou",
  'XVI-A': art9Caput + "XVI - a pena privativa de liberdade:\n\na) com paraplegia, tetraplegia, monoplegia, hemiplegia, ostomia, amputação, paralisia, cegueira ou outra deficiência física que acarrete comprometimento análogo, comprovadas por laudo emitido por médico oficial, por médico designado pelo juiz da execução ou, na falta destes, por médico autorizado pelo juiz da execução, desde que essas condições não sejam anteriores à prática do crime;",
  'XVI-B': art9Caput + "XVI - a pena privativa de liberdade:\n\nb) infectadas pelo vírus HIV, em estágio terminal, comprovado por laudo emitido por médico oficial, por médico designado pelo juiz da execução ou, na falta destes, por médico autorizado pelo juiz da execução;",
  'XVI-C': art9Caput + "XVI - a pena privativa de liberdade:\n\nc) gestantes, cuja gravidez seja considerada de alto risco, desde que comprovada a condição por laudo emitido por médico oficial, por médico designado pelo juiz da execução ou, na falta destes, por médico autorizado pelo juiz da execução;",
  'XVI-D': art9Caput + "XVI - a pena privativa de liberdade:\n\nd) acometidas de doença grave, crônica ou altamente contagiosa, que apresentem grave limitação ambulatorial ou severa restrição para participação regular nas atividades oferecidas pela unidade prisional ou, ainda, que exijam cuidados contínuos que não possam ser adequadamente prestados no estabelecimento, comprovadas a doença e a inadequação por laudo emitido por médico oficial, por médico designado pelo juiz da execução ou, na falta destes, por médico autorizado pelo juiz da execução; ou",
  'XVI-E': art9Caput + "XVI - a pena privativa de liberdade:\n\ne) com transtorno do espectro autista severo (grau 3) ou neurodiversas em condição análoga, comprovado por laudo emitido por médico oficial, por médico designado pelo juiz da execução ou, na falta destes, por médico autorizado pelo juiz da execução.",
  'ART.13': art13Caput,
};

    