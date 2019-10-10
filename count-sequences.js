//Given an integer n, write a function to count all possible sequences of length n such that all the elements of the sequence are in the range [1 to n] and the sum of the elements of the sequence is even.

function countEvenSequences(N){

    // Method: Even sequences must have an even number of odd terms in them

    // Count the number of odd numbers between 1 and N
    let count_odd = (N+(N%2))/2;
    let count_even = N-count_odd;

    let totaliser = 0;
    // Iterate over each odd number up until N
    for(let i=0; i<count_odd; i++){
        let num_odd = i*2;

        // How many combos of odd numbers can be fitted into this number of slots for odd numbers
        let odd_options = permuationa(count_odd,num_odd);

        // How many combos of even numbers can be fitted into the remaining slots
        let even_options = permuationa(count_even,N-num_odd);

        // How many ways are there to combine odd and even numbers in this way
        let combos_between = combin(N,num_odd);

        // Add the permuations to the totaliser
        totaliser += (odd_options*even_options*combos_between);
    }

    return totaliser;
}


// Perms and combs functions implemented with Excel function names
// Taken from: https://www.hackmath.net/en/calculator/combinations-and-permutations
function permuationa(to_choose,how_many_chosen){
    return Math.pow(to_choose,how_many_chosen);
}
function combin(to_choose,how_many_chosen){
    return (factorial(to_choose) / ((factorial(how_many_chosen)*factorial(to_choose-how_many_chosen))));
}

// Factorial calculation with pre-computed factorials for speed
var facts = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800, 87178291200, 1307674368000, 20922789888000, 355687428096000, 6402373705728000, 121645100408832000, 2432902008176640000, 51090942171709440000, 1124000727777607680000];
function factorial (n) {
    if(n < facts.length){
        return facts[n];
    }else{
        throw "Factorial out of range";
    }
} 

//Testing
const cases = [
    {
        input: countEvenSequences(2),
        correct: 1
    },
    {
        input: countEvenSequences(3),
        correct: 13
    },
    {
        input: countEvenSequences(5),
        correct: 1562   // Calculated using Excel
    }
];

cases.map(
    test => console.log( (test.input == test.correct ? 'PASS' : 'FAIL') + " | Calculated: " + test.input + " | Actual: " + test.correct)
);