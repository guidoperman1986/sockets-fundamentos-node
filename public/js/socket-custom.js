
        var socket = io();
        //escuchar
        socket.on('connect', function(){
            console.log("Conectado al servidor");
        })

        socket.on('disconnect', function(){
            console.log("Servidor desconectado");
        })

        //emite informacion
        socket.emit('enviar-mensaje',{
            usuario:'Guido',
            mensaje:'Hola mundo'
        }, function(resp){
            console.log('Respuesta del server ',resp);
        })

        //escuchar informacion
        socket.on('enviar-mensaje',function(mensaje){
            console.log('Servidor: ',mensaje);
        })
    
