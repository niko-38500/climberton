/**
 * Returns a string representation of the date formatted according to the specified format.
 *
 * Formatters are :
 *
 *  - Y for the full year ex : 2023
 *  - y for the short year syntax ex : 23
 *  - m for the month in integer ex : 03
 *  - M for the 3 first letter of the month ex : avr
 *  - d for the day number ex : 21
 *  - D for the 3 first letter of the day ex : Lun
 *  - N for the day number in the week ex : 1 for monday, 7 for sunday
 *  - H for the hours
 *  - i for the minutes
 */
Date.prototype.formatDate = function (format: string) {
    const availableFormatters: {[formatter: string]: string} = {
        Y: this.getFullYear().toString(),
        y: this.getFullYear().toString().slice(-2),
        m: (this.getMonth() + 1).toString().padStart(2, '0'),
        M: this.toLocaleString('fr-FR', {month: 'short'}),
        d: this.getDate().toString().padStart(2, '0'),
        D: this.getDayName().slice(0, 3),
        N: this.getDay() === 0 ? '7' : this.getDay().toString(),
        H: this.getHours().toString().padStart(2, '0'),
        i: this.getMinutes().toString().padStart(2, '0'),
    };

    const formatterList = Object.keys(availableFormatters);
    let result = '';

    for(let i = 0; i < format.length; i++) {
        const currentLetter: string = format.at(i)!;
        const previousLetter: string = format.at(i - 1) ?? '';

        result += formatterList.includes(currentLetter) && previousLetter !== '\\'
            ? availableFormatters[currentLetter]
            : currentLetter;
    }

    return result.replaceAll('\\', '');
}

Date.prototype.addDay = function (numberOfDay: number): Date {
    const newDate = new Date(this.formatDate('Y-m-d'));

    return new Date(newDate.setDate((newDate.getUTCDate()) + numberOfDay));
}

Date.prototype.addMonth = function (numberOfMonth: number): Date {
    const newDate = new Date(this.formatDate('Y-m-d'));

    return new Date(newDate.setMonth(newDate.getUTCMonth() + numberOfMonth));
}

Date.prototype.addYear = function (numberOfYear: number): Date {
    const newDate = new Date(this.formatDate('Y-m-d'));

    return new Date(newDate.setFullYear(newDate.getUTCFullYear() + numberOfYear));
}

Date.prototype.startOfWeek = function (): Date {
    const newDate = new Date(this.formatDate('Y-m-d'));
    let diff = newDate.getDay() - 1;

    if(diff < 0) {
        diff += 7;
    }

    return newDate.addDay(diff * -1);
}

Date.prototype.endOfWeek = function (): Date {
    const newDate = new Date(this.formatDate('Y-m-d'));

    return newDate.startOfWeek().addDay(6);
}

Date.prototype.normalizeTimeZone = function (): Date {
    this.setMinutes(this.getMinutes() + this.getTimezoneOffset());

    return this;
}

Date.prototype.getDayName = function (): 'Lundi'|'Mardi'|'Mercredi'|'Jeudi'|'Vendredi'|'Samedi'|'Dimanche' {
    const dayNumber = this.getDay() as 1|2|3|4|5|6|0;
    switch (dayNumber) {
        case 1 :
            return 'Lundi';
        case 2 :
            return 'Mardi';
        case 3 :
            return 'Mercredi';
        case 4 :
            return 'Jeudi';
        case 5 :
            return 'Vendredi';
        case 6 :
            return 'Samedi';
        case 0 :
            return 'Dimanche';
    }
}