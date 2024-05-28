

let intentos = 3;

function login() {
    let nombreUsuarioInput = document.getElementById('username');
    let contraseñaInput = document.getElementById('password');
    let userName = nombreUsuarioInput.value;
    let password = contraseñaInput.value;

    if (userName === 'Francisco' && password === 'Pass') {
        alert(`Bienvenido ${userName}`);
    } else {
        intentos--;
        if (intentos > 0) {
            alert(`Usuario o contraseña incorrectos. Te quedan ${intentos} intentos.`);
        } else {
            alert('Has agotado tus intentos. Inténtalo de nuevo más tarde.');
            usernameInput.disabled = true;
            passwordInput.disabled = true;
        }
        // Actualizar y vaciar los campos
        nombreUsuarioInput.value = '';
        contraseñaInput.value = '';
    }
}









































































//  Variables 
let cantidadProducto = document.getElementById('cantidad');
let restarButton = document.getElementById('restar');
let sumarButton = document.getElementById('sumar');
let precioTotalProducto = document.getElementById('precio-total');
let finalizarButton = document.getElementById('finalizar');
let cantidad = 1;
let precioUnitario = 10;


// Event listeners para los botones
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

// Función para actualizar la cantidad mostrada
function actualizarCantidad() {
    cantidadProducto.innerText = cantidad;
    let total = cantidad * precioUnitario;
    precioTotalProducto.innerText = total;
}



















// Variables
const ivaPorcentaje = 0.21;
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

// Event listener para el botón "Agregar al Carrito"
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

// // Event listener para el botón "Finalizar Compra"
// finalizarCompraButton.addEventListener('click', function () {
//     Swal.fire({
//         title: 'Total de la compra',
//         text: 'El total de la compra, incluyendo el 21% de IVA, es: $' + totalCompra.toFixed(2),
//         icon: 'info',
//         showCancelButton: false,
//         confirmButtonText: 'Cerrar'
//     });
// });









// Objeto para almacenar los datos del formulario
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




// //GENERAR UN CODIGO DE DESCUENTO CON LA MATH.RANDOM



let botonDescuento = document.querySelector("#generarDescuento");
botonDescuento.addEventListener("click", mostrarCodigo);


function mostrarCodigo() {
    let generarCodigoDescuento = () => {
        let codigo = Math.floor(Math.random() * 10000);

        return codigo;
    }

    let codigoDescuento = generarCodigoDescuento();

    alert(`Su codigo de descuento es: DESC${codigoDescuento}`)

}




// caja de comentarios

// Función para obtener los comentarios desde localStorage
function getComments() {
    return JSON.parse(localStorage.getItem('comments')) || [];
}

// Función para guardar los comentarios en localStorage
function saveComment(comment) {
    let comments = getComments();
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
}

// Función para mostrar los comentarios en la página
function displayComments() {
    let comments = getComments();
    let commentsContainer = document.getElementById('comments');

    commentsContainer.innerHTML = '';

    comments.forEach(comment => {
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
            saveComment(newComment);
            displayComments();

            document.getElementById('name').value = '';
            document.getElementById('text').value = '';
        } else {
            alert('Por favor, completa todos los campos para dejar un comentario.');
        }
    });
});


