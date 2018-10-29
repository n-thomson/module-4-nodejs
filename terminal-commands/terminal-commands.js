const fs = require('fs');

module.exports.ls = () =>{
  fs.readdir('./', (err, files) =>{
    const filesToString = files.reduce((acc, file) => {
      return `${acc}   ${file}`;
    });
    console.log(filesToString);
  });
}

module.exports.touch = (name) => {
  fs.writeFile(name, function(err){
    console.log('Failed to create new file');
  });
}

module.exports.mkdir = (dirname) => {
  fs.mkdir(dirname, function(err){
    if(err) throw err;
  });
}
