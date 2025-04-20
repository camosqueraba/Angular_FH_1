import { Comentario, ComentariosOptions, diferenciaFechaComentarios } from "./06-function-destructuring";

const comentario1: Comentario = {
    usuario: "usuario 1",
    contenido: "contenido",
    fecha : new Date("01/01/2000")
}

const comentario2: Comentario = {
    usuario: "usuario 2",
    contenido: "contenido",
    fecha : new Date("01/01/2000")
}

const comentarios = [comentario1, comentario2];
const comentariosOptions: ComentariosOptions = {fechaReferencia: "01/3/2001", comentarios}

const resultado = diferenciaFechaComentarios(comentariosOptions);  
console.log(resultado);