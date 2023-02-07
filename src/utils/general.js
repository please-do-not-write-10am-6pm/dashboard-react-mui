const currentDate = new Date()
export const currentMonth = currentDate.toLocaleString('default', {
  month: 'long',
})
export const hours = currentDate.getHours()
export const greetingMessage =
  hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening'
