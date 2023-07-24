/* eslint-disable no-case-declarations */
export const generateRandomData = () => {
  const data = []
  const startDate = new Date('2023-01-01')
  const endDate = new Date('2023-12-31')
  const daysRange = (endDate - startDate) / (1000 * 60 * 60 * 24)

  for (let i = 0; i < daysRange; i++) {
    const currentDate = new Date(startDate.getTime() + i * (1000 * 60 * 60 * 24))
    const randomPrice = Math.random() * 10 + 1
    data.push({ date: currentDate.toISOString().slice(0, 10), price: randomPrice.toFixed(2) })
  }

  return data
}

export function filterDataByTime (filterType, data) {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  const currentDay = currentDate.getDate()

  switch (filterType) {
    case 'day':
      const currentDayStr = currentDate.toISOString().slice(0, 10)
      return data.filter((dataObj) => dataObj.date === currentDayStr)
    case 'week':
      const weekStart = new Date(currentDate)
      weekStart.setDate(currentDay - currentDate.getDay())
      const weekEnd = new Date(currentDate)
      weekEnd.setDate(currentDay + (6 - currentDate.getDay()))
      return data.filter((dataObj) => {
        const dataDate = new Date(dataObj.date)
        return dataDate >= weekStart && dataDate <= weekEnd
      })
    case 'month':
      const currentMonthStr = currentYear + '-' + String(currentMonth + 1).padStart(2, '0')
      return data.filter((dataObj) => dataObj.date.slice(0, 7) === currentMonthStr)
    case 'year':
      const currentYearStr = String(currentYear)
      return data.filter((dataObj) => dataObj.date.slice(0, 4) === currentYearStr)
    default:
      return data
  }
}
