// socket.io for real time edit
import { Server } from "socket.io";
import Connection from "./database/db.js";
import { getDocument , updateDocument } from "./controller/documentController.js";
import dotenv from 'dotenv';
dotenv.config();

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
Connection(username,password);

// server class object
const PORT=9000;
const io=new Server(PORT,{
    cors :{
        origin: 'http://localhost:3000',
        mehtods :['GET','POST']
    }
});


// for connection in socket
// first argument is server name which is connection for us
// second argument is class
io.on('connection',socket=>{

    socket.on('get-document',async documentID=>{
        const data="";
        const document=await getDocument(documentID);
        socket.join(documentID);
        socket.emit('load-document',document.data); // changes for a particular document
        socket.on('send-changes',delta=>{
            socket.broadcast.to(documentID).emit('receive-changes',delta);
        })

        socket.on('save-document',async data=>{
            await updateDocument(documentID,data);
        })
    })
});
