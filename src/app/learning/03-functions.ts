
function sumarEnteros(a: number, b:number){
    return a + b;
}

const sumatoria = sumarEnteros(1, 2);

const sumatoriaFlecha = (a: number, b:number): number => {
    return a + b;
}
const sumatoria_flecha = sumatoriaFlecha(1,2);

const sumatoriaFlechaString = (a: number, b:number): string => {
    return `${a + b}`;
}
const sumatoria_flecha_string = sumatoriaFlechaString(1,3);

function raiz(radicando: number, indice?:number, exponente:number = 1): number{

    let raiz_calculada = Math.pow(radicando, exponente);
    if(indice != undefined && indice != 0)
    {     
        raiz_calculada = Math.pow(raiz_calculada, 1/indice);        
    }       
    
    return raiz_calculada;
}

let radicando = 4;
let indice = 0;
let exponente = 4;

const raiz_n = raiz(radicando,indice,exponente);

interface Publicacion {
    title: string;
    contenido: string;
    comentarios?: string[];
    mostrarComentarios: () => void;
}

const agregarComentarioAPublicacion = (publicacion: Publicacion, comentario:string) => {
    publicacion.comentarios?.push(comentario);
}

const publicacionObject: Publicacion = {
    title: "Titulo publicacion",
    contenido: "Contenido publicacion",
    comentarios: ["comentario 1", "comentario 2", "comentario 3"],
    mostrarComentarios() {
        console.log(this.comentarios);
    },
}


console.log({sumatoria, sumatoria_flecha, sumatoria_flecha_string});
console.log(sumatoria);
console.log(sumatoria_flecha);
console.log(sumatoria_flecha_string);
console.log("Raiz de " + radicando + " = " + raiz_n);

agregarComentarioAPublicacion(publicacionObject, "comentario 4");

publicacionObject.mostrarComentarios();

export{};