function renderizarLista(coleccion) {
    const listaElementos = document.getElementById('lista');
    listaElementos.innerHTML = '';

    coleccion.elementos.forEach(elemento => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = elemento.titulo;
        listaElementos.appendChild(li);
    });
}

document.getElementById('formulario-elemento').addEventListener('submit', function(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;

    if (!titulo) return;

    const nuevoElemento = new Elemento(Date.now(), titulo);
    miColeccion.agregarElemento(nuevoElemento);
    renderizarLista(miColeccion);


    document.getElementById('titulo').value = '';
});

const miColeccion = new Coleccion();

miColeccion.agregarElemento(new Elemento(1, "Mi Primera Película"));
miColeccion.agregarElemento(new Elemento(2, "Mi Segundo Libro"));

renderizarLista(miColeccion);
