export interface Comentario {
    usuario: string,
    contenido: string,
    fecha: Date
}

const comentario1 : Comentario = {
    usuario: "Titulo comentario 1",
    contenido: "contenido comentario 1",
    fecha: new Date("01/01/2001")
}

const comentario2 : Comentario = {
    usuario: "Titulo comentario 2",
    contenido: "contenido comentario 2",
    fecha: new Date("01/02/2001")
}

const comentarios = [comentario1, comentario2];

export interface ComentariosOptions {
    fechaReferencia: string;
    comentarios: Comentario[]; 
}

const comentariosOptions: ComentariosOptions = {fechaReferencia: "01/3/2001", comentarios}

export function diferenciaFechaComentarios(comentariosOptions: ComentariosOptions): string[] {
    let diferencias : string[] = [];
    let diferencia :string = ""; 
    const fechaReferencia = new Date(comentariosOptions.fechaReferencia);
    const fechaReferenciaDate = fechaReferencia.getTime();
    let diferenciaEnMilisegundos: number = 0;

    comentariosOptions.comentarios.forEach(comentario => {
        diferenciaEnMilisegundos = comentario.fecha.getTime() - fechaReferenciaDate;
        
        const totalSeconds = Math.floor(diferenciaEnMilisegundos / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);
        const remSeconds = totalSeconds % 60;
        const remMinutes = totalMinutes % 60;

        diferencia = `La diferencia de fecha entre el comentario ${comentario.usuario}, ${comentario.fecha} y la fecha de referencia ${comentariosOptions.fechaReferencia} es ${totalHours}:${remMinutes}:${remSeconds}`;       
        diferencias.push(diferencia);
    });

    return diferencias;
}



const resultado = diferenciaFechaComentarios(comentariosOptions);    
//console.log(resultado);

//export {}