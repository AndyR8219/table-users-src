export const formateDate = (dateString: string): string => {
  const dateObject = new Date(dateString)

  const day = dateObject.getUTCDate().toString().padStart(2, '0')
  const month = (dateObject.getUTCMonth() + 1).toString().padStart(2, '0')
  const year = dateObject.getUTCFullYear()
  const formattedDate = day + '.' + month + '.' + year

  return formattedDate
}
