import React from 'react';

import Card, { CardTitle, CardHeader, CardBody, CardFooter } from 'src/components/Card';
import PrincipalInfo from 'src/components/PrincipalInfo';
import SecondaryInfo from 'src/components/SecondaryInfo';
import Button from 'src/components/Button';
import { Icon } from 'src/components/Icon';
import SpacerVertical from 'src/components/SpacerVertical';
import Loader from 'src/components/Loader';
import { helpers } from 'src/utils/helpers';

import { Container, ErrorMessage } from './styles';

interface IViewProps {
  requesting: boolean;
  error: string | undefined;
  wealth: WealthType;
  updateResume: () => void;
}

const View: React.FC<IViewProps> = ({ requesting, error, wealth, updateResume }) => {
  return (
    <Container>
      <Card>
        <CardHeader>
          <CardTitle>Seu resumo</CardTitle>
          <Icon.More />
        </CardHeader>
        <CardBody>
          {Boolean(requesting) && <Loader />}

          {Boolean(!requesting && error) && <ErrorMessage>{error}</ErrorMessage>}

          {Boolean(!requesting && !error) && (
            <>
              {wealth?.total && (
                <>
                  <PrincipalInfo label="Valor investido" description={`${helpers.brazilianCurrency(wealth.total)}`} />
                  <SpacerVertical space="34" />
                </>
              )}

              {wealth?.profitability && (
                <>
                  <SecondaryInfo
                    label="Rentabilidade/mês"
                    description={`${helpers.decimal(wealth.profitability, { maximumFractionDigits: 3 })}%`}
                  />
                  <SpacerVertical space="12" />
                </>
              )}

              {wealth?.cdi && (
                <>
                  <SecondaryInfo
                    label="CDI"
                    description={`${helpers.decimal(wealth.cdi, { maximumFractionDigits: 2 })}%`}
                  />
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
          <Button type="button" onClick={updateResume}>
            Atualizar
          </Button>
          {Boolean(wealth.hasHistory) && (
            <Button type="button" style={{ marginLeft: '8px' }}>
              Ver Mais
            </Button>
          )}
        </CardFooter>
      </Card>
    </Container>
  );
};

export default View;
