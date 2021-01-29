const fs = require('fs');
const ohm = require('ohm-js');
const contents = fs.readFileSync('hello.ohm');
const myGrammar = ohm.grammar(contents);

const userInput = 'Hola';
const m = myGrammar.match(userInput);
if (m.succeeded()) {
  console.log('Greetings, human.');
} else {
  console.log("That's not a greeting!");
}