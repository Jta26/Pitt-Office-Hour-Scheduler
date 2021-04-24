

// gets the number of days to offset from the first monday of the month.
function getPadBeginning(days) {

    const firstDayWeekday = new Date(days[0].timestamp).getDay();
    // find out what number makes this number == 1 (monday)
    // i.e. 4 (thursday) - 3 = 1 (monday)
    // inversly 4 (thursday) - 1 = 3 (we pad the calendar with 3 empty days)
    // and 1 (monday) - 1 = 0 (we dont pad any)
    // 2 (tuesday) - 1 = 1 (we pad 1 day)
    const daysToPad = firstDayWeekday - 1;
    return daysToPad;
}

function getDaysInMonth(month, year) {
    // month is 0 based
    // i.e. january = 0
    return new Date(year, month + 1, 0).getDate();
}

// takes in a set of day objects with sparse timestamps for a specific month
// and fills in the missing days between them.
function fillMissingDays(days) {
    let newDays = [];
    const date = new Date(days[0].timestamp);
    const daysInMonth = getDaysInMonth(date.getMonth(), date.getFullYear());
    // iterate over the days in the month.
    for (i = 1; i <= daysInMonth; i++) {
        const existingDayIndex = getDayIndex(days, i);
        if (existingDayIndex != null) {
            newDays.push(days[existingDayIndex]);
            continue;
        }

        const thisDate = new Date(date.getFullYear(), date.getMonth(), i);
        // if this day is a weekday
        if (thisDate.getDay() < 1 || thisDate.getDay() > 5) {
            continue;
        }

        const newDay = {
            timestamp: thisDate.toISOString(),
            timeslots: []
        }
        newDays.push(newDay);
    }
    return newDays;
}

function getDayIndex(days, numDay) {
    for (let day of days) {
        const thisDate = new Date(day.timestamp);
        if (thisDate.getDate() == numDay) {
            return days.indexOf(day);
        }
    }
    return null;
}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    console.log(hours, minutes);
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  


const timeHelpers = {
    fillMissingDays,
    getPadBeginning,
    formatAMPM
}

