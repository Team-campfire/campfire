//Express stuff
const express = require('express')
const app = express()
const port = 3000
const path = require('path')

// app.use(express.static(path.join(__dirname, './lab4/dist/lab4')));
app.use(express.static(path.join(__dirname, './campfire/dist/campfire')));

app.get('/', (req, res) => {
	res.send('Hello world!')
	// console.log(req)

})

app.listen(port, () => { 
  console.log('listening :))')
})


/*
function css (request, response) {
  if (request.url.indexOf(".css") !== -1){
    var file = fs.readFileSync(`${request.url}`, {'encoding' : 'utf8'});
    response.writeHead(200, {'Content-Type' : 'text/css'});
    response.write(file);
    response.end();
  }
}
*/


/*
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
})


server.listen(process.env.PORT || 3000)
*/
