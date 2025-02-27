export function getFrDate(value: Date): string {
  const date = new Date(value)
  return date.toLocaleString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  })
}
