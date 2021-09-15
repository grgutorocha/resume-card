import { useCallback } from 'react';
import { wealthMock } from 'src/mocks/wealth';

import Card, { CardTitle, CardHeader, CardBody, CardFooter } from 'src/components/Card';
import PrincipalInfo from 'src/components/PrincipalInfo';
import SecondaryInfo from 'src/components/SecondaryInfo';
import Button from 'src/components/Button';
import { Icon } from 'src/components/Icon';
import SpacerVertical from 'src/components/SpacerVertical';
import { helpers } from 'src/utils/helpers';

import { Container } from './styles';

const Dashboard = () => {
  const cdi = useCallback((value: number) => {
    return `${helpers.decimal(value, { maximumFractionDigits: 2 })}%`;
  }, []);

  const profitability = useCallback((value: number) => {
    return `${helpers.decimal(value, { maximumFractionDigits: 3 })}%`;
  }, []);

  return (
    <Container>
      <Card>
        <CardHeader>
          <CardTitle>Seu resumo</CardTitle>
          <Icon.More>Opções</Icon.More>
        </CardHeader>
        <CardBody>
          <PrincipalInfo label="Valor investido" description={`${helpers.brazilianCurrency(wealthMock.total)}`} />
          <SpacerVertical space="34" />
          <SecondaryInfo label="Rentabilidade/mês" description={profitability(wealthMock.profitability)} />
          <SpacerVertical space="12" />
          <SecondaryInfo label="CDI" description={cdi(wealthMock.cdi)} />
          <SpacerVertical space="12" />
          <SecondaryInfo label="Ganho/mês" description={`${helpers.brazilianCurrency(wealthMock.gain)}`} />
        </CardBody>
        <CardFooter>
          <Button type="button">Ver Mais</Button>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Dashboard;
