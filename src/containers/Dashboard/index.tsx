import { useCallback, useEffect } from 'react';

import Card, { CardTitle, CardHeader, CardBody, CardFooter } from 'src/components/Card';
import PrincipalInfo from 'src/components/PrincipalInfo';
import SecondaryInfo from 'src/components/SecondaryInfo';
import Button from 'src/components/Button';
import { Icon } from 'src/components/Icon';
import SpacerVertical from 'src/components/SpacerVertical';
import Loader from 'src/components/Loader';
import { helpers } from 'src/utils/helpers';
import { wealthService } from 'src/api/services/wealth';
import { constants } from 'src/utils/constants';

import { useAppSelector, useAppDispatch } from 'src/store/hooks';
import { isRequesting, requestSucces, requestError } from 'src/store/slices/wealth';

import { Container, ErrorMessage } from './styles';

const { MESSAGE } = constants;

const Dashboard = () => {
  const {
    user,
    wealth: { requesting, error, wealth },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const updateResume = useCallback(async () => {
    dispatch(isRequesting());

    try {
      const { data } = await wealthService.post(user.id);

      if (data.data.wealthSummary_by_pk) {
        dispatch(requestSucces(data.data.wealthSummary_by_pk));
      } else {
        dispatch(requestError(MESSAGE.NO_DATA));
      }
    } catch (error) {
      dispatch(requestError(MESSAGE.REQUEST_ERROR));
    }
  }, [dispatch, user.id]);

  useEffect(() => {
    updateResume();
  }, [updateResume]);

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
