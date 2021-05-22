
exports.getDate = () => {
const today = new Date();
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}
    var day = today.toLocaleDateString(undefined, options);
    return day;
}

