import { render } from '@testing-library/react';
import View, { IViewProps } from './View';

const props: IViewProps = {
  requesting: false,
  error: undefined,
  wealth: {},
  updateResume: jest.fn(),
};

const IS_REQUESTING = true;
const LOADER_MESSAGE = 'Carregando...';
const ERROR_MESSAGE = 'ERROR_MESSAGE';
const TOTAL = 300;
const PROFITABILITY = 1000;
const CDI = 50;
const GAIN = 1000;
const HAS_HISTORY = true;

describe('Dashboard > View', () => {
  it('should render a loader message', () => {
    const rendered = render(<View {...props} requesting={IS_REQUESTING} />);

    expect(rendered.getByText(LOADER_MESSAGE)).toBeInTheDocument();
  });

  it('should render a error message', () => {
    const rendered = render(<View {...props} error={ERROR_MESSAGE} />);

    expect(rendered.getByText(ERROR_MESSAGE)).toBeInTheDocument();
  });

  it('should render the wealth', () => {
    const rendered = render(
      <View
        {...props}
        wealth={{ total: TOTAL, profitability: PROFITABILITY, cdi: CDI, gain: GAIN, hasHistory: HAS_HISTORY }}
      />
    );

    expect(rendered.getByText(`R$ 300,00`)).toBeInTheDocument();
    expect(rendered.getByText(`50%`)).toBeInTheDocument();
    expect(rendered.getByText(`1.000%`)).toBeInTheDocument();
    expect(rendered.getByText(`R$ 1.000,00`)).toBeInTheDocument();
    expect(rendered.getByText('Ver Mais')).toBeInTheDocument();
  });
});
