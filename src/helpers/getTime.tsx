export const getTime = (postDate: string, relativeTime = false) => {
    const addZero = (value: number) => {
        return value < 10 ? `0${value}` : value
    }

    if (!postDate) return "Loading...";
    const date = new Date(postDate);
    const now = new Date();

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long', timeZone: 'Asia/Almaty' }).format(date);
    const hour = new Intl.DateTimeFormat('en-US', { hour: 'numeric', hour12: false, timeZone: 'Asia/Almaty' }).format(date);
    const minute = new Intl.DateTimeFormat('en-US', { minute: 'numeric', timeZone: 'Asia/Almaty' }).format(date);

    const diffInMillis: number = now.getTime() - date.getTime();
    const diffInMinutes: number = Math.floor((diffInMillis / (1000 * 60)) % 60);
    const diffInHours: number = Math.floor(diffInMillis / (1000 * 60 * 60) % 24);
    const diffInDays: number = Math.floor(diffInMillis / (1000 * 60 * 60 * 24));

    if (relativeTime) return`${
        diffInDays 
            ? `${diffInDays === 1 
                ? `${diffInDays} day` 
                : `${diffInDays} days`} ago` 
            : diffInHours 
                ? `${diffInHours} hours ago` 
                : `${diffInMinutes} minutes ago`
    }`

    return `${weekdays[now.getDay()] === weekday ? "Today" : weekdays[now.getDay() - 1] === weekday ? 'Yesterday' : weekday}, ${hour}:${addZero(Number(minute))}`




}