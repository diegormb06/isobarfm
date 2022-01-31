export const formatNumber = (num: number = 0) => {
  return new Intl.NumberFormat("pt-BR").format(num);
};
