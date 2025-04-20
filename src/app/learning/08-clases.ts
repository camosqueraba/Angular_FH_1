export class Comentario{
    public usuario: string;
    public contenido: string;
    public fecha: Date;

    constructor(usuario: string, contenido: string, fecha:string){
        this.usuario = usuario;
        this.contenido = contenido;
        this.fecha = new Date(fecha);
    }
}

export class Comentario2 {
    constructor(public usuario: string,
                public contenido: string,
                public fecha:string){

    }
}

export class Publicacion {
    public title: string;
    public contenido: string;
    public comentarios: Comentario2[];
    public mostrarComentarios?: () => void;

    /**
     *
     */
    constructor(title: string, contenido:string, comentarios:Comentario2[]) {
        this.title = title;
        this.contenido = contenido;
        this.comentarios = comentarios
    }
}

export class ResultadoOperacion{

}

export class ApiResponse<T> {    
    
    constructor(statusCode: number, data: string){

    }
} 


const comentarios : Comentario2[] = [
    new Comentario2("usuario 1", "contenido 1", "01/01/2025"),
    new Comentario2("usuario 2", "contenido 2", "01/02/2025")
]

const publicacion1 : Publicacion = new Publicacion("titulo", "contenido", comentarios);
console.log(publicacion1);