export const getTime = (postDate: string) => {
    const addZero = (time: number) => {
        return time < 10 ? `0${time}` : time
    }

    const date = new Date(postDate);

    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        hour: 'numeric',
        day: 'numeric',
        minute: 'numeric',
        hour12: false,
        timeZone: 'UTC'
    };

    const formatter = new Intl.DateTimeFormat('en-US', options);

    const now: Date = new Date();
    const diffInMillis: number = now.getTime() - date.getTime();
    const diffInMinutes: number = Math.floor((diffInMillis / (1000 * 60)) % 60);
    const diffInHours: number = Math.floor(diffInMillis / (1000 * 60 * 60) % 24);
    const diffInDays: number = Math.floor(diffInMillis / (1000 * 60 * 60 * 24));

    const formattedDate = formatter.format(date);

    return diffInDays === 0
        ? `Today, ${addZero(diffInHours)}:${addZero(diffInMinutes)}`
        : diffInDays === 1
            ? `Yesterday, ${addZero(diffInHours)}:${addZero(diffInMinutes)}`
            : formattedDate;
}