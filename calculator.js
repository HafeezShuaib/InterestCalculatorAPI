module.exports.simpleInterest = (principal, rate, time) => {
    const interest = principal * rate * time / 100;
    const amount = interest + principal;

    return {interest, amount};
}

module.exports.compoundInterest = (principal, rate, time, frequency) => {
    const amount = principal * Math.pow(1 + rate / (frequency * 100), frequency * time);
    const interest = amount - principal;

    return {
        interest: Number(interest.toFixed(2)),
        amount: Number(amount.toFixed(2))
    };
}
// throw Error('incorrect password');
// module.exports = {simpleInterest, compoundInterest};