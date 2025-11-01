module.exports.simpleInterest = (principal, rate, time) => {
    const interest = principal * rate * time / 100;
    const amount = interest + principal;

    return {interest, amount};
}

module.exports.compoundInterest = (principal, rate, time, frequency) => {
    const interest = principal * Math.pow(1 + rate / (frequency * 100), frequency * time).toFixed(2);
    const amount = Number((interest + principal).toFixed(2));

    return {interest, amount};
}
// throw Error('incorrect password');
// module.exports = {simpleInterest, compoundInterest};