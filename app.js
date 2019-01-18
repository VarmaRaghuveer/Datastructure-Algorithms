const data = require('./data');
const Trie = require('./Trie');

var http = require('http');

const trie = new Trie();

data.forEach(d => {
  trie.insert(d);
})


// define the port of access for your server
const PORT = 3000;

// We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('Server working properly. Requested URL : ' + request.url);
}

// Create a server
var myFirstServer = http.createServer(handleRequest);

// Start the server !
myFirstServer.listen(PORT, function(){
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});



// console.log(trie.search('A', 10));