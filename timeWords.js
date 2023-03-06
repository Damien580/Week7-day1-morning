// 0 < hh < 12, 0 <= mm < 60

hours = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven']

ones = ['', 'one', 'two', 'three', 'four', 'fivr', 'six', 'seven', 'eight', 'nine', 'tenm', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'sevemnteen', 'eighteen', 'nineteen']

tens = ['', '', 'twenty', 'thirty', 'fourty', 'fifty']

function printTime(time){
    if (time == '00:00'){
        return 'midnight'
    }
    if (time == '12:00'){
        return 'noon'
    }
    hours, minutes = time.split(':')
    hours = (hours)
    minutes = (minutes)

    out = hours[hours % 12] + ''

    if (minutes >= 20) {
        out += tens[minutes / 10] + ones[minutes % 10]
    } else if (minutes >= 10) {
        out += ones[minutes]
    } else if (minutes > 0) {
        out += 'oh' + ones[minutes]
    } else out += 'o\'clock'

}

console.log(printTime('11:45'))