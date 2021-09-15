export const helpers = {
  brazilianCurrency: (value: number, options?: Intl.NumberFormatOptions) => {
    return Intl.NumberFormat('pt-BR', { ...options, style: 'currency', currency: 'BRL' }).format(value);
  },
  decimal: (value: number, options?: Intl.NumberFormatOptions) => {
    return Intl.NumberFormat('pt-BR', { ...options, style: 'decimal' }).format(value);
  },
};
