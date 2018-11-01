const fs = require('fs');

function done(output){
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}

function evaluateCmd(userInput){
  const userInputArray = userInput.split(' ');
  const command = userInputArray[0];

  switch(command){
    case 'echo': commandLibrary.echo(userInputArray.slice(1).join(''));
      break;

    case 'cat': commandLibrary.cat(userInputArray.slice(1));
      break;

    case 'head': commandLibrary.head(userInputArray.slice(1));
      break;

    case 'tail': commandLibrary.tail(userInputArray.slice(1));
      break;

    default:
      console.log('Error msg: you chose a wrong command.')

  }
}

const commandLibrary = {
  'echo' : function(userInput){
  done(userInput);
},

  'cat' : function(fullPath){
    fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;
      done(data);
    });
  },

  'head' : function(fullPath){
    fileName = fullPath[0];
    fs.readFile(fileName, {encoding: 'utf8'}, (err, data) => {
      if (err) throw err;
      lines = data.split('\r\n');
      newFile = lines.slice(0,15).join('\n');
      done(newFile);
    });
  },

  'tail' : function(fullPath){
    fileName = fullPath[0];
    fs.readFile(fileName, {encoding: 'utf8'}, (err, data) => {
      if (err) throw err;
      lines = data.split('\r\n');
      newFile = lines.slice(-16).join('\n');
      done(newFile);
    });
  }
};

module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;
