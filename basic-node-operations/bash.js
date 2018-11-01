const commands = require('./commands.js');

process.stdout.write('prompt> ');

process.stdin.on('data', (data) => {
  userInput = data.toString().trim();
  commands.evaluateCmd(userInput);
});
