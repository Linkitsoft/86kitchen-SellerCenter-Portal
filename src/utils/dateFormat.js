import moment from "moment/moment"
export const dateFormat = (value) => {
    return moment(value).format('MMMM Do YYYY');
}