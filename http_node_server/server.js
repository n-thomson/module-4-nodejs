const http = require('http');
const fs = require('fs');
const port = 3000;

fs.writeFile('hello-world.txt', 'Hello to this great world', function(err){
  if(err) throw err;
  console.log('File created and saved');
});

const requestHandler = (req, res) => {
  fs.readFile('hello-world.txt', function(err, data){
    if(err) throw err;
    res.write(data);
    res.end();
  });
}


const server = http.createServer(requestHandler).listen(port);
