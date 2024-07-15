import moment from "moment/moment"
export const dateTimeFormat = (value) =>
{
    return moment(value).format('MMMM Do YYYY h:mm a');
}