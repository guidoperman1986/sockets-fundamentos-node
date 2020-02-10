const {io} = require('../server')

io.on('connection',(client)=>{
    console.log('Usuario conectado');

    client.emit('enviar-mensaje',{
        usuario:'administrador',
        mensaje:'Bienvenido a esta aplicacion'
    })

    client.on('disconnect',()=>{
        console.log('Usuario desconectado');
    })

    //escuchar al cliente
    client.on('enviar-mensaje',(data, callback)=>{
        console.log(data);

        client.broadcast.emit('enviar-mensaje',data)

        /* if (mensaje.usuario){
            callback({
                mensaje:'todo salio bien'
            });
            
        }else{
            callback({
                mensaje:'todo salio bien'
            });

        } */

    })

})