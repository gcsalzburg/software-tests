//Implement a square root function (without using an exponential function).

const prec = 10;

// Budget way
function square_root(x) {

    // Get first perfect square less than x
    let i = 1;
    do {
        i++;
    }while ((i*i) < x);
    i--;

    // https://brilliant.org/wiki/approximation-of-square-roots/
    return i + ((x-(i*i))/((2*i)+1));
}

// Babylonian method
const iterations = 20;
function square_root_baby(x){

    let approx = x;

    for(let i=0; i<iterations; i++){
        approx = (approx + (x/approx))/2;
    }
    return approx;
}

//Testing
const cases = [
    {
        input: square_root_baby(25),
        correct: 5.0
    },
    {
        input: square_root_baby(15.8),
        correct: 3.97492138287
    },
    {
        input: square_root_baby(300),
        correct: 17.3205080757
    }
];

cases.map(
    test => console.log( (test.input.toPrecision(prec) == test.correct.toPrecision(prec) ? 'PASS' : 'FAIL') + " | Calculated: " + test.input + " | Actual: " + test.correct)
);
