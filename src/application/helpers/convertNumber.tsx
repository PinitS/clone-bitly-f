export function ConvertNumber(number: number) {
  return (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

export function ConvertNumberCurrency(number: number) {
  return Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
  }).format(number);
}

export function ConvertWithPrefixPostfix(number: number, postfix: string) {
  const newNumber = (number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `X ${newNumber} ${postfix}`
}