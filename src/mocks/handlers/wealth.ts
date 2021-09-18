import { rest } from 'msw';

import { mountUrl } from 'src/api/endpoints';

interface Data {
  wealthSummary_by_pk: WealthType | null;
}

interface PostResponse {
  data: Data;
}

const data: PostResponse = {
  data: {
    wealthSummary_by_pk: {
      cdi: 3.45678,
      gain: 1833.23,
      profitability: 2.76789,
      total: 3200876,
      hasHistory: true,
      id: 2,
    },
  },
};

const dataEmpty: PostResponse = {
  data: {
    wealthSummary_by_pk: null,
  },
};

export const postSuccess = rest.post(mountUrl(), (request, response, context) => {
  return response(context.status(200), context.json(data));
});

export const postSuccessEmpty = rest.post(mountUrl(), (request, response, context) => {
  return response(context.status(200), context.json(dataEmpty));
});

export const postError = rest.post(mountUrl(), (request, response, context) => {
  return response(context.status(400), context.json(null));
});

export const wealthHandlers = [postSuccess];
