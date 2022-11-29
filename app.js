import express from "express";

const app = express();
const puerto = 3000; // configuracion del puerto de red, el 3000 es por standar//

function callback(){
    console.log("el servidor esta ejecutandose.");

}

app.listen(puerto, callback)