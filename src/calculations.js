import dayjs from 'dayjs'

function calculateBiorhythm(birthDate, targetDate, cycle) {
    const birthDay = dayjs(birthDate).startOf('Day');
    const targetDay = dayjs(targetDate).startOf('Day');
    const diff = targetDay.diff(birthDay, 'days');
    return Math.sin((2 * Math.PI * diff) / cycle);
};

export function calculateBiorhythms(birthDate, targetDate) {
    return {
        'physical': calculateBiorhythm(birthDate, targetDate, 23),
        'emotional': calculateBiorhythm(birthDate, targetDate, 28),
        'intellectual': calculateBiorhythm(birthDate, targetDate, 33),
    };
};
