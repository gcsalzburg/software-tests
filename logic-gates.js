// Write a program that implements logic gates AND, OR, NOT, NAND, NOR, XOR, and XNOR.

function logicGate(g,a,b){
   let logics = {
      'AND': 'a&b',
      'OR': 'a|b',
      'NAND': '!(a&b)',
      'XOR': 'a^b',
      'NOT': '!a',
      'NOR': '!(a|b)',
      'XNOR': '!(a^b)'
   };
   let gate = new Function('a','b', 'return '+logics[g]);
   return Number(gate(a,b));
}



//Testing
const cases = [
   {
       input: logicGate('AND',1,1),
       correct: 1
   },
   {
       input: logicGate('NOT', 1),
       correct: 0
   },
   {
       input: logicGate('NAND', 1, 0),
       correct: 1
   },
   {
       input: logicGate('NOR', 0, 0),
       correct: 1
   },
   {
       input: logicGate('XOR', 1, 1),
       correct: 0
   },
   {
       input: logicGate('XNOR', 0, 1),
       correct: 0
   }

];

cases.map(
   test => console.log( (test.input == test.correct ? 'PASS' : 'FAIL') + " | Calculated: " + test.input + " | Actual: " + test.correct)
);
