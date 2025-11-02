module.exports.validateSimple =(principal, rate, time) => {
    if (typeof principal !== 'number' || principal <= 0) {
        return 'Principal must be a POSITIVE NUMBER.';
    }
    if (typeof rate !== 'number' || rate <= 0) {
        return 'Rate must be a POSITIVE NUMBER.';
    }
    if (typeof time !== 'number' || time <= 0) {
        return 'Time must be a POSITIVE NUMBER.';
    }
}

module.exports.validateCompound = (principal, rate, time, frequency) => {
    if (typeof principal !== 'number' || principal <= 0) {
        return 'Principal must be a POSITIVE NUMBER.';
    }
    if (typeof rate !== 'number' || rate <= 0) {
        return 'Rate must be a POSITIVE NUMBER.';
    }
    if (typeof time !== 'number' || time <= 0) {
        return 'Time must be a POSITIVE NUMBER.';
    }
    if (typeof frequency !== 'number' || frequency <= 0 || !Number.isInteger(frequency)) {
        return 'Frequency must be a POSITIVE INTEGER.';
    }
}
