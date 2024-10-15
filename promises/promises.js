//create a promise that divides numbers
const prom = new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    const den = Math.random() * 10;

    if (den === 0) {
        //can't divide by zero!
        reject({
            message: "Cannot divide by zero",
            num,
            den
        })
    } else {
        const result = num / den;
        resolve({
            result,
            num,
            den
        });
    }
});

// prom.then(dataResult => {
//     const { result, num, den } = dataResult;
//     console.log(`${num} / ${den} = ${result}`);
// }).catch(err => {
//     console.log(err);
// })

try {
    const result = await prom;
    console.log(result);
} catch (err) {
    console.log(err);
}