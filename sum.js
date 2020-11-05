function sum(a, b) {
    if (!Number.isInteger(a, b)) throw new Error('Entry must be a number');
    return a + b;
};

module.exports = sum;
