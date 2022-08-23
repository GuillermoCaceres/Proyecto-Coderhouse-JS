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
const productos = [
    {   
        id:1,
        title: "Zapatilla Adidas",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMT6IE5Muhink2wQbIGlU1bso4SLGK2SQ3_g&usqp=CAU",
        price: 37500,
        category: "Zapatillas",
    },
    {   
        id:2,
        title: "Remera Nike",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDOfBNRxs6Y-coAAjNweHPCH22asxVmOxAQ&usqp=CAU",
        price: 1800,
        category: "Remeras",
    },
    {   
        id:3,
        title: "Remera Adidas",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5q68Fxz4lrIfAFUGLNnYwK3ZbkE28QWGATQ&usqp=CAU",
        price: 2500,
        category: "Remeras",
    },
    {   
        id:4,
        title: "Zapatilla Nike",
        img:"https://www.tradeinn.com/f/13803/138030718/nike-zapatillas-trail-running-wildhorse-7.jpg",
        price: 40000,
        category: "Zapatillas",
    },
]
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

function agregarAlCarrito (){ 
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
}
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
