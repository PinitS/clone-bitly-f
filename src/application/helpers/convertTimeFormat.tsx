import moment from 'moment';
export function ConvertLongDate(date: string) {
  return moment(date).format('MMMM d, YYYY');
}
export function ConvertShortDate(date: string) {
  return moment(date).format('DD-MM-YYYY');
}