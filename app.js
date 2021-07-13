const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({port:8080});
wss.on('connection',(ws)=>{
    ws.on('message',(msj)=>{
        console.log(`Messange receive ${msj}`);
        ws.send(msj)
    })
    ws.send
})