interface Comentario {
    usuario: string,
    contenido: string,
    fecha: Date
}
interface Publicacion {
    title: string;
    contenido: string;
    comentarios: Comentario[];
    mostrarComentarios?: () => void;
}

const publicacion: Publicacion = {
    title: "Titulo",
    contenido: "Contenido",
    comentarios: [
        { usuario:"usuario 1", contenido:"contenido comentario", fecha: new Date(2025,2,19)},
        { usuario:"usuario 2", contenido:"contenido comentario 2", fecha: new Date(2025,3,19)},
        { usuario:"usuario 3", contenido:"contenido comentario 3", fecha: new Date(2025,3,19)}
    ]
} 

const {title, comentarios} = publicacion;
const {usuario, fecha } = comentarios[0];

console.log("Publicacion ", title);
console.log("usuario: ", usuario, " fecha: ", fecha );
