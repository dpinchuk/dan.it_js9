/*
 Реализовать функцию, которая будет считать возраст пользователя и его знак зодиака.

 Технические требования:
 - При запуске программы - в диалоговом окне спросить дату рождения пользователя (текст в формате dd.mm.yyyy)
 - Вывести в модальном окне сообщение: Вам ? лет! - Вместо ? подставить возраст пользователя.
 - Вывести в отдельном модальном окне знак зодиака пользователя в формате: Ваш знак зодиака: ?
*/

const LENGTH = 10;
let validDate = /([0-2]\d|3[01])\.(0\d|1[012])\.(\d{4})/;

let getZodiac = (userBirthDate) => {
    let day = Number(userBirthDate.split(".")[0]);
    let month = Number(userBirthDate.split(".")[1]);

    let zodiacSigns = [
        'Capricorn',
        'Aquarius',
        'Pisces',
        'Aries',
        'Taurus',
        'Gemini',
        'Cancer',
        'Leo',
        'Virgo',
        'Libra',
        'Scorpio',
        'Sagittarius'
    ];

    if ((month === 1 && day <= 20) || (month === 12 && day >= 22)) {
        return zodiacSigns[0];
    } else if ((month === 1 && day >= 21) || (month === 2 && day <= 18)) {
            return zodiacSigns[1];
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return zodiacSigns[2];
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
        return zodiacSigns[3];
    } else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
        return zodiacSigns[4];
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return zodiacSigns[5];
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        return zodiacSigns[6];
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 23)) {
        return zodiacSigns[7];
    } else if ((month === 8 && day >= 24) || (month === 9 && day <= 23)) {
        return zodiacSigns[8];
    } else if ((month === 9 && day >= 24) || (month === 10 && day <= 23)) {
        return zodiacSigns[9];
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) {
        return zodiacSigns[10];
    } else if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) {
        return zodiacSigns[11];
    }
};

let getAge = (userBirthDate) => {
    return new Date().getFullYear() - Number(userBirthDate.split(".")[2]);
};

let userBirthDate = prompt("Input your birth date in format 'dd.mm.yyyy': ");
while (!validDate.test(userBirthDate)) {
    userBirthDate = prompt("Input your birth date in correct format 'dd.mm.yyyy': ");
}

alert("User '" + getAge(userBirthDate) + "' years old");
alert("On a horoscope he is '" + getZodiac(userBirthDate) + "'");