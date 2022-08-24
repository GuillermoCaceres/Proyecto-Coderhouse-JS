const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []
const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0)
document.getElementById("cant").innerHTML = carrito.length + " - $" + total

function generarCardsCarrito() {
    carrito.forEach((producto) => {
        document.getElementById("cards-modal").innerHTML += `
             <tr>
                <td><img src = "${producto.img}" style="width:50px"</td>
                <td>${producto.id}</td>
                <td>${producto.title}</td>
                <td>${producto.price}</td>
                <td><button> X </button></td>
                <br>
            </tr>
        `
    })
}


const lista = document.querySelector('#listado')
/* Aca traigo la informacion del listado de JSON */
fetch('/listaProductos.json')
    .then( (resp) =>resp.json())
    .then( (productos) => {

let cards = "";
productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
        document.getElementById("seccion-card").innerHTML += 
        `<div class="card h-100">
            <img class="card-img-top" src="${producto.img}" alt="..." />
        <div class="card-body p-4">
            <div class="text-center">
            <h5 class="fw-bolder">${producto.title}</h5>
            $${producto.price}
        </div>
        </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" id="${idButton}">Añadir al carrito</a></div>
        </div>
    </div>`
})
    })

function agregarAlCarrito (){ 
    /* traigo nuevamente el listado de JSON para darle funcionalidad el carrito */
    fetch('/listaProductos.json')
    .then( (resp) =>resp.json())
    .then( (productos) => {
productos.forEach((producto)=> {
    const idButton = `add-cart${producto.id}`
    document.getElementById(idButton).addEventListener('click', () => {
    
        carrito.push(producto)
        localStorage.setItem("carrito",JSON.stringify(carrito))
        const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0)
        document.getElementById("cant").innerHTML = carrito.length + " - $" + total
        document.getElementById("cart-elements").innerHTML = ""
       carrito.forEach((producto) => {
             document.getElementById("cart-elements").innerHTML += `
                <tr>
                    <td><img src = "${producto.img}" style="width:50px"</td>
                    <td>${producto.id}</td>
                    <td>${producto.title}</td>
                    <td>${producto.price}</td>
                    <td><button> X </button></td>
                </tr>
            `
        }) 
        Toastify({
            text: `Se ha añadido ${producto.title}`,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    })
})
})}
agregarAlCarrito()
console.log(document.getElementsByClassName('filtrar-categoria'))
for (const nodoHTML of document.getElementsByClassName('filtrar-categoria')){
    nodoHTML.onclick = (event) => {
        const categoria = event.target.getAttribute('data-categoria')
        filtrarProductosPorCategoria(categoria)
    }
    
} 


function filtrarProductosPorCategoria(categoria) {
    document.getElementById("seccion-card").innerHTML=""
    const productosFiltrados = productos.filter((producto) => producto.category === categoria)
    productosFiltrados.forEach((producto) => {
        const filtro = `add-cart${producto.id}`
        document.getElementById("seccion-card").innerHTML += `<div class="card h-100">
            <img class="card-img-top" src="${producto.img}" alt="..." />
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder">${producto.title}</h5>
                    $${producto.price}
                </div>
            </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" id="${filtro}">Añadir al carrito</a></div>
            </div>
        </div>`
    })
}  

    document.getElementById("botoncant").addEventListener('click', () => {
    document.getElementById("cart-elements").innerHTML = ""
   
           
            carrito.push(producto)
            localStorage.setItem("carrito",JSON.stringify(carrito))
            const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0)
            document.getElementById("cant").innerHTML = carrito.length + " - $" + total
            document.getElementById("cart-elements").innerHTML = ""
           carrito.forEach((producto) => {
                 document.getElementById("cart-elements").innerHTML +=  `
                    ${carrito}
                `
            
})
})
console.log(carrito)
