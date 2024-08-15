export default function FormatedDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formatedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formatedDate;
}