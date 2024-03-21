export function formatDate(date: string | number | Date) {
  return new Intl.DateTimeFormat('es-MX', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Mexico_City' }).format(new Date(date))
}