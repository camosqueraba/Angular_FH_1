

let skills : string[] = ["Bash", "co"];

interface Publicacion {
    titulo: string,
    contenido: string,
    links?: string[]
}

let publicacion: Publicacion = {
    titulo: "El titulo",
    contenido: "el contenido"

}

publicacion.links = ["link1", "link2", "link3"];

console.log(publicacion);

publicacion.links[0] = "link_0";

console.log("link pos 0: " + publicacion.links[0]);

export {}