import { useCallback, useEffect, useState } from 'react';

import Card, { CardTitle, CardHeader, CardBody, CardFooter } from 'src/components/Card';
import PrincipalInfo from 'src/components/PrincipalInfo';
import SecondaryInfo from 'src/components/SecondaryInfo';
import Button from 'src/components/Button';
import { Icon } from 'src/components/Icon';
import SpacerVertical from 'src/components/SpacerVertical';
import Loader from 'src/components/Loader';
import { helpers } from 'src/utils/helpers';

import { Container } from './styles';
import { wealthService } from 'src/api/services/wealth';

const Dashboard = () => {
  const [wealth, setWealth] = useState<WealthType>({});
  const [loading, setLoading] = useState(false);

  const cdi = useCallback((value: number) => {
    return `${helpers.decimal(value, { maximumFractionDigits: 2 })}%`;
  }, []);

  const profitability = useCallback((value: number) => {
    return `${helpers.decimal(value, { maximumFractionDigits: 3 })}%`;
  }, []);

  const updateResume = useCallback(async () => {
    setLoading(true);

    try {
      const { data } = await wealthService.post(2);

      setWealth(data.data.wealthSummary_by_pk);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    updateResume();
  }, [updateResume]);

  return (
    <Container>
      <Card>
        <CardHeader>
          <CardTitle>Seu resumo</CardTitle>
          <Icon.More>Opções</Icon.More>
        </CardHeader>
        <CardBody>
          {loading ? (
            <Loader />
          ) : (
            <>
              {wealth?.total && (
                <>
                  <PrincipalInfo label="Valor investido" description={`${helpers.brazilianCurrency(wealth.total)}`} />
                  <SpacerVertical space="34" />
                </>
              )}

              {wealth?.profitability && (
                <>
                  <SecondaryInfo label="Rentabilidade/mês" description={profitability(wealth.profitability)} />
                  <SpacerVertical space="12" />
                </>
              )}

              {wealth?.cdi && (
                <>
                  <SecondaryInfo label="CDI" description={cdi(wealth.cdi)} />
                  <SpacerVertical space="12" />
                </>
              )}

              {wealth?.gain && (
                <>
                  <SecondaryInfo label="Ganho/mês" description={`${helpers.brazilianCurrency(wealth.gain)}`} />
                </>
              )}
            </>
          )}
        </CardBody>
        <CardFooter>
          <Button type="button" onClick={updateResume} style={{ marginRight: '8px' }}>
            Atualizar
          </Button>
          <Button type="button">Ver Mais</Button>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Dashboard;
