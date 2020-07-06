let calendar1 = [['9:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']];
let calendar2 = [['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']];

// first look if the first time of the elem in the items of the second list
function calenderAvail(p1S, p2S, time) {
    let mergeCalendar = [];
    let output = [];
    for (const item of calendar1) { //O(n*m)
        for (const item2 of calendar2) {
            let mergeItem = [null, null];
            if (compareD(item[0], item2[0]) >= 0 && compareD(item[0], item2[1]) <= 0) {
                mergeItem[0] = item2[0];
            }
            else if (compareD(item2[0], item[0]) >= 0 && compareD(item2[0], item[1]) <= 0) {
                mergeItem[0] = item[0];
            }
            if (compareD(item[1], item2[0]) >= 0 && compareD(item[1], item2[1]) <= 0) {
                mergeItem[1] = item2[1];
            }
            else if (compareD(item2[1], item[0]) >= 0 && compareD(item2[1], item[1]) <= 0) {
                margeItem[1] = item[1];
            }

            if (mergeItem[0] != null && mergeItem[1] == null) {
                if (compareD(item[1], item2[1]) >= 0) {
                    mergeItem[1] = item[1];
                } else {
                    mergeItem[1] = item2[1];
                }
            }

            if (mergeItem[1] != null && mergeItem[0] == null) {
                if (compareD(item[0], item2[0])) {
                    mergeItem[0] = item2[0];
                }
                else {
                    mergeItem[0] = item[0];
                }
            }
            if (mergeItem[0] != null)
                mergeCalendar.push(mergeItem)

        }
    }

    for (const i = 0; i < mergeCalendar.length; i++) { //O(n+m)
        if(getTimeBtw(mergeCalendar[i][1], mergeCalendar[i+1][0]) >= 60) {
            output.push([mergeCalendar[i][1], mergeCalendar[i+1][0]]);
        }
    }

    return output;
}

function compareD(t1, t2) {
    [hour1, minute1] = t1.split(':');
    [hour2, minute2] = t2.split(':');

    if (hour1 <= hour2 || minute1 < minute2)
        return -1;
    else if (hour1 == hour2 && minute1 == minute2)
        return 0;
    else
        return 1;

}