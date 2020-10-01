module.exports = (n) =>
    n >= 0
        ? Number(String(n).split("").reverse().join(""))
        : Number(String(n).slice(1).split("").reverse().join(""));
