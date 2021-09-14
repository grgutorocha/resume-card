import { wealthMock } from 'src/mocks/wealth';

import { Container } from './styles';

const Dashboard = () => {
  return (
    <Container>
      <h1>Dashboard</h1>
      <div>
        <p>Valor investido</p>
        <p>{wealthMock.total}</p>
      </div>
      <div>
        <p>Rentabilidade/mês</p>
        <p>{wealthMock.profitability}</p>
      </div>
      <div>
        <p>CDI</p>
        <p>{wealthMock.cdi}</p>
      </div>
      <div>
        <p>Ganho/mês</p>
        <p>{wealthMock.gain}</p>
      </div>
    </Container>
  );
};

export default Dashboard;
