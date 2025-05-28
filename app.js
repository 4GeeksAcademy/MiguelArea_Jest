// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs["USD"];
};


const fromDollarToYen = (dollars) => {
    let euros = dollars / oneEuroIs["USD"];
    return euros * oneEuroIs["JPY"];
};


const fromYenToPound = (yen) => {
    let euros = yen / oneEuroIs["JPY"];
    return euros * oneEuroIs["GBP"];
};
module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};


