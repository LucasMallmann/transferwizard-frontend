const formatDate = (value: Date): string =>
  Intl.DateTimeFormat('pt-BR').format(value);

export default formatDate;
