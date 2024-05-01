class Elemento {
    constructor(id, titulo) {
        this.id = id;
        this.titulo = titulo;
    }
}

class Coleccion {
    constructor() {
        this.elementos = [];
    }

    agregarElemento(elemento) {
        this.elementos.push(elemento);
    }

    eliminarElemento(id) {
        this.elementos = this.elementos.filter(elemento => elemento.id !== id);
    }
}
