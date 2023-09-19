import moment from "moment"

export const timeframe = {
    "00": "8:00 - 8:30",
    "01": "8:30 - 9:00",
    "02": "9:00 - 9:30",
    "03": "9:30 - 10:00",
    "04": "10:00 - 10:30",
    "05": "10:30 - 11:00",
    "06": "11:00 - 11:30",
    "07": "11:30 - 12:00",
    "08": "13:30 - 14:00",
    "09": "14:00 - 14:30",
    "10": "14:30 - 15:00",
    "11": "15:00 - 15:30",
    "12": "15:30 - 16:00",
    "13": "16:00 - 16:30",
    "14": "16:30 - 17:00",
    "15": "17:00 - 17:30",
}

const today = moment().startOf("day")

export const dayArray = [
    moment(today).add(1, "days"),
    moment(today).add(2, "days"),
    moment(today).add(3, "days"),
    moment(today).add(4, "days"),
    moment(today).add(5, "days"),
    moment(today).add(6, "days"),
    moment(today).add(7, "days"),
]