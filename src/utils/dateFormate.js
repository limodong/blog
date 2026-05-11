export default function datetimeFormate(timestamp, showTime = false) {
    const date = new Date(+timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, 0);
    const day = date.getDate().toString().padStart(2, 0);
    if (showTime) {
        const hour = date.getHours().toString().padStart(2, 0);
        const minute = date.getMinutes().toString().padStart(2, 0);
        const seconds = date.getSeconds().toString().padStart(2, 0);
        return `${year}-${month}-${day} ${hour}:${minute}:${seconds}`
    }
    return `${year}-${month}-${day}`;
}