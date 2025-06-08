
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Percent } from 'lucide-react';

export const ReducaoLapsosCard: React.FC = () => {
  return (
    <Card className="my-8 shadow-lg border border-border fade-in-up bg-muted">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground flex items-center">
          <Percent className="w-6 h-6 mr-2 text-primary" />
          Redução dos Lapsos (§§ 2º e 3º do Art. 9º do Decreto)
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-foreground">
        <p className="mb-3">
          Redução pela <strong className="text-foreground">metade</strong> dos lapsos previstos nos incisos I a XI do caput do art. 9º para:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
          <li>Pessoa com mais de 60 anos.</li>
          <li>Mulher gestante ou com filho(a) ≤ 14 anos ou com deficiência/doença grave.</li>
          <li>Homem único responsável por filho(a) ≤ 14 anos ou com deficiência/doença grave.</li>
          <li>Pessoa imprescindível aos cuidados de criança ≤ 12 anos ou com deficiência/doença grave.</li>
          <li>Pessoa com deficiência (Lei nº 13.146/2015, art. 2º).</li>
          <li>Participante, com êxito, de programa de justiça restaurativa (Resolução CNJ nº 225/2016).</li>
        </ul>
        <Separator className="my-4 border-border" />
        <p>
          <strong className="text-foreground italic">Limitação (§3º):</strong> a redução prevista no § 2º não se aplica na hipótese de o crime ter sido praticado com violência ou grave ameaça contra filho ou filha, criança ou adolescente.
        </p>
      </CardContent>
    </Card>
  );
};
