module.exports.validateSimple =(principal, rate, time) => {
    if (typeof principal !== 'number' || principal <= 0) {
        return 'Principal must be a POSITIVE iNTEGER';
    }
    if (typeof rate !== 'number' || rate <= 0) {
        return 'Rate must be a POSITIVE iNTEGER';
    }
    if (typeof time !== 'number' || time <= 0) {
        return 'Time must be a  POSITIVE iNTEGER';
    }
}

module.exports.validateCompound = (principal, rate, time, frequency) => {
    if (typeof principal !== 'number' || principal <= 0) {
        return 'Principal must be a positive integer';
    }
    if (typeof rate !== 'number' || rate <= 0) {
        return 'Rate must be a positive integer';
    }
    if (typeof time !== 'number' || time <= 0) {
        return 'Time must be a positive integer';
    }
    if (typeof frequency !== 'number' || frequency <= 0 || !Number.isInteger(frequency)) {
        return 'Frequency must be a positive integer';
    }
}
