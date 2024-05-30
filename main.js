// FORMULARIO REGISTRO DE USUARIO
let usuario = {
    _nombre: "",
    _apellido: "",
    _email: "",

    // Método SET para el nombre
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    },

    // Método GET para el nombre
    get nombre() {
        return this._nombre;
    },

    // Método SET para el apellido
    set apellido(nuevoApellido) {
        this._apellido = nuevoApellido;
    },

    // Método GET para el apellido
    get apellido() {
        return this._apellido;
    },

    // Método SET para el email
    set email(nuevoEmail) {
        this._email = nuevoEmail;
    },

    // Método GET para el email
    get email() {
        return this._email;
    }
};

// Event listener para el envío del formulario
document.getElementById('formulario');

// Obtener los valores ingresados por el usuario
let nombreIngresado = document.getElementById('nombre').value;
let apellidoIngresado = document.getElementById('apellido').value;
let emailIngresado = document.getElementById('email').value;

// Asignar los valores al objeto "usuario"
usuario.nombre = nombreIngresado;
usuario.apellido = apellidoIngresado;
usuario.email = emailIngresado;







// LOGGIN USUARIO CON 3 INTENTOS.

let intentos = 3;

function login() {
    let nombreUsuarioInput = document.getElementById('nombreDeUsuario');
    let contraseñaInput = document.getElementById('contraseñas');
    let nombreDeUsuario = nombreUsuarioInput.value;
    let contraseñas = contraseñaInput.value;

    if (nombreDeUsuario === 'Francisco' && contraseñas === 'Vazquez') {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-start",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: `Bienvenido ${nombreDeUsuario}`
          });
        
        
      
    } else {
        intentos--;
        if (intentos > 0) {
            Swal.fire({
                icon: "Error",
                title: "Oops...",
                text: `Usuario o contraseña incorrectos. Te quedan ${intentos} intentos.`,
               
              });
           
        } else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Demasiados intentos fallidos",
              text: "Intenta mas tarde",
                showConfirmButton: false,
                timer: 1500
              });;
              nombreUsuarioInput.disabled = true;
              contraseñaInput.disabled = true;
        }
        
        
        // ACTUALIZAR Y VACIAR LOS CAMPOS
        nombreUsuarioInput.value = '';
        contraseñaInput.value = '';
    }
}







// CARRITO DE COMPRAS PARA BOTELLA DE AGUA
let cantidadProducto = document.getElementById('cantidad');
let restarButton = document.getElementById('restar');
let sumarButton = document.getElementById('sumar');
let precioTotalProducto = document.getElementById('precio-total');
let finalizarButton = document.getElementById('finalizar');
let cantidad = 1;
let precioUnitario = 10;


// Eventos para los botones
restarButton.addEventListener("click", function () {
    if (cantidad > 1) {
        cantidad--;
        actualizarCantidad();
    }
});

sumarButton.addEventListener("click", function () {
    cantidad++;
    actualizarCantidad();
});

finalizarButton.addEventListener("click", function () {
    let totalCompra = cantidad * precioUnitario;
    Swal.fire({
        title: "Gracias por su compra!",
        text: `El total de su compra es de $${totalCompra}`,
        icon: "success"
    });

});

// Actualizar la cantidad mostrada
function actualizarCantidad() {
    cantidadProducto.innerText = cantidad;
    let total = cantidad * precioUnitario;
    precioTotalProducto.innerText = total;
}
















// CARRITO DE COMPRAS SELECCION DE PRODUCTOS
let ivaPorcentaje = 0.21;
let totalCompra = 0;

// Función para calcular el total con IVA
function calcularTotalConIVA(precio) {
    let total = precio + (precio * ivaPorcentaje);
    return total;
}

// Elementos del DOM
let selectProductos = document.getElementById("productos");
let nombreProducto = document.getElementById("nombreProducto");
let precioProducto = document.getElementById("precioProducto");
let agregarCarritoButton = document.getElementById("agregarCarrito");

// Event listener para el cambio de selección
selectProductos.addEventListener("change", function () {
    let productoSeleccionado = selectProductos.value;
    switch (productoSeleccionado) {
        case 'papasFritas':
            nombreProducto.textContent = 'Papas Fritas';
            precioProducto.textContent = '5';
            break;
        case 'mani':
            nombreProducto.textContent = 'Maní';
            precioProducto.textContent = '10';
            break;
        case 'chicitos':
            nombreProducto.textContent = 'Chicitos';
            precioProducto.textContent = '15';
            break;
        default:
            nombreProducto.textContent = '';
            precioProducto.textContent = '';
    }
});

// Evento boton agregar al carrito
agregarCarritoButton.addEventListener('click', function () {
    let nombre = nombreProducto.textContent;
    let precio = parseFloat(precioProducto.textContent);
    let precioConIVA = calcularTotalConIVA(precio);

    totalCompra += precioConIVA;

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: 'Producto agregado al carrito\nNombre: ' + nombre + '\nPrecio: $' + precio.toFixed(2) + '\nIVA (21%): $' + (precio * ivaPorcentaje).toFixed(2) + `\nTotal compra: ${precioConIVA}`,
        showConfirmButton: false,
        timer: 1500
    });
});



//GENERAR UN CODIGO DE DESCUENTO CON LA MATH.RANDOM
let botonDescuento = document.querySelector("#generarDescuento");
botonDescuento.addEventListener("click", mostrarCodigo);


function mostrarCodigo() {
    let generarCodigoDescuento = () => {
        let codigo = Math.floor(Math.random() * 10000);

        return codigo;
    }

    let codigoDescuento = generarCodigoDescuento();

    Swal.fire(`Su codigo de descuento es: DESC${codigoDescuento}`);

}





// CAJA DE COMENTARIOS
// Obtener los comentarios del localStorage o inicializar un array vacío
let comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

// Función para mostrar los comentarios en la página
function displayComments() {
    let commentsContainer = document.getElementById('comments');
    commentsContainer.innerHTML = '';

// Ordenar los comentarios alfabéticamente por nombre
comentarios.sort((a, b) => a.name.localeCompare(b.name));

    comentarios.forEach(comment => {
        let commentElement = document.createElement('div');
        commentElement.innerHTML = `${comment.name}: ${comment.text}`;
        commentsContainer.appendChild(commentElement);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displayComments();

    let commentForm = document.getElementById('commentForm');
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let name = document.getElementById('name').value;
        let text = document.getElementById('text').value;

        if (name && text) {
            let newComment = { name, text };
            comentarios.push(newComment);

            // Guardar en el localStorage
            localStorage.setItem('comentarios', JSON.stringify(comentarios));

            displayComments();

            document.getElementById('name').value = '';
            document.getElementById('text').value = '';
        } else {
            Swal.fire({
                title: "Por favor completa todos los campos para dejar tu comentario",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });;
        }
    });
});



// Aplicando fetch - Consumo de una api para la web

document.addEventListener('DOMContentLoaded', function() {
    let obtenerDatosButton = document.getElementById('obtenerDatosButton');
    let resultadoDiv = document.getElementById('resultado');

    obtenerDatosButton.addEventListener('click', async function() {
        try {
            let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments'); 
            if (!respuesta.ok) {
                throw new Error('Error al obtener los datos de la API');
            }
            let data = await respuesta.json();
            resultadoDiv.textContent = JSON.stringify(data, null, 2);
        } catch (error) {
            console.error('Error:', error.message);
        }
    });
});