const http = require('http');
const fs = require('fs');  
const url = require('url');
const EventEmitter = require("events");

//ceci est l'equivalent de 
let app = require('./app').start(8085)
//cela

// let App = {
//     start : (port)=>{
//         let emitter = new EventEmitter();
//         let server = http.createServer((request,response) =>{
//             response.writeHead(200 , {
//                 "Content-type":"text/html ; charset= utf-8"
//             })
//             if(request.url ==='/'){
//                 emitter.emit("root" , response)
//             }
//             response.end()
//         }).listen(port);
//         return emitter;
//     }
// }

app.on("root" ,function(response){
    response.write("Je suis à la racine")
})





// const EventEmitter = require("events");

// let ecoute = new EventEmitter();

// ecoute.on('manoratra' , (loko , anarana)=>{
//     console.log(`ito ilay soratra miloko ${loko} i ${anarana}`);
// })

// ecoute.emit("manoratra" , "mena" ,"Jerry");

//ecoute.once() executer une seule fois lorsque l'evenement est appelé




// let server = http.createServer();
// server.on('request' , (request,response) =>{

//     let query = url.parse(request.url ,true).query;
//     let name =query.name === undefined ? "anonyme" : query.name;
//     fs.readFile('./index.html' ,"utf-8",(err,data) =>{
//         if(err) {
//             //throw err;
//             response.writeHead(404)
//             response.end("ce fichier n'existe pas")
//         }else{
//             response.writeHead(200 , {
//                 'content-type': 'text/html ; charset = utf-8'
//             })
//         }
//         data = data.replace('#name}}', name)
//         response.end(data);
//     })
// })
// server.listen(8080);