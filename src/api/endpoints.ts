export const API_BASE_URL = process.env.REACT_APP_API_URL;
export const API_ENDPOINT = '/v1/graphql';

export const endpoints = {
  WEALTH_BY_PK: 'wealthSummary_by_pk',
};

export const mountUrl = (endpoint: string = ''): string => {
  return `${API_BASE_URL}${API_ENDPOINT}${endpoint}`;
};
