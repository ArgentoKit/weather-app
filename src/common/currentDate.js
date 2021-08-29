export const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',]
export const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

export const currentDate = () => {
    const time = new Date()
    const month = time.getMonth()
    const date = time.getDate()

    return `${months[month]} ${date}`
}