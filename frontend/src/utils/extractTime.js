import { format } from "date-fns";
export function extractTime(dateString){
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`;
};

//Helper function to pad single digit number with a leading zero
function padZero(number){
    return number.toString().padStart(2, '0');
};
export function extractDate(dateString) {
    const date = new Date(dateString);
    const currentDate = new Date();
    const diffInDays = Math.floor((currentDate - date) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) {
        return 'Today';
    } else if (diffInDays === 1) {
        return 'Yesterday';
    } else if (diffInDays < 7) {
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return weekdays[date.getDay()];
    } else {
        return format(date, 'd MMM yyyy');
    }
}

// export function extractDate(dateString) {
//     const date = new Date(dateString);
//     return format(date, 'dd MM yyyy');
// }