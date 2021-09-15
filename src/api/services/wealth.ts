import { AxiosResponse } from 'axios';
import { api } from 'src/api/';

type PostResponse = {
  data: {
    wealthSummary_by_pk: WealthType;
  };
};

export const wealthService = {
  post: (id: string | number): Promise<AxiosResponse<PostResponse>> =>
    api.post('', {
      query: `
      query MyQuery {
        wealthSummary_by_pk(id: ${id}) {
          cdi
          gain
          profitability
          total
          id
          hasHistory
        }
      }
    `,
    }),
};
