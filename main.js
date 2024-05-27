// let idPassword = 123456;
// let nombreDeUsuario= "Francisco"
// let contraseñaPedida=prompt("ingrese su contraseña");

// if (contraseñaPedida == idPassword){
//     alert(`Bienvenido ${nombreDeUsuario}`)

// }

//  else if (contraseñaPedida != idPassword){
//     alert ("contraseña incorrecta - Le quedan 2 intentos")

//  contraseñaPedida=prompt("Ingrese su contraseña")
// }

//  if(contraseñaPedida != idPassword){
//     alert ("contraseña incorrecta - Le queda 1 intento")

//     contraseñaPedida= prompt("ingrese su contraseña")
// }

// else{
//     alert("no puede ")
// }





function verificarUsuario() {
    let nombreUsuario = document.getElementById("nombre").value;
    let contrasena = document.getElementById("contrasena").value;

    if (nombreUsuario === "Francisco" && contrasena === "Pass") {
        Swal.fire("Bienvenido Fran");;

    } else {
        Swal.fire('Usuario incorrecto. Inténtalo nuevamente.');
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
restarButton.addEventListener("click", function() {
    if (cantidad > 1) {
        cantidad--;
        actualizarCantidad();
    }
});

sumarButton.addEventListener("click", function() {
    cantidad++;
    actualizarCantidad();
});

finalizarButton.addEventListener("click", function() {
    let totalCompra = cantidad * precioUnitario;
    Swal.fire({
        title: "Gracias por su compra!",
        text: `El total de su compra es de $${totalCompra}`,
        icon: "success"
      });
    
});

// Función para actualizar la cantidad mostrada
function actualizarCantidad() {
    cantidadProducto.textContent = cantidad;
    let total = cantidad * precioUnitario;
    precioTotalProducto.textContent = total;
}
















let selectProductos = document.getElementById("productos");
let nombreProducto = document.getElementById("nombreProducto");
let precioProducto = document.getElementById("precioProducto");
let agregarCarritoButton = document.getElementById("agregarCarrito");

// Event listener para el cambio de selección
selectProductos.addEventListener("change", function() {
    var productoSeleccionado = selectProductos.value;
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
agregarCarritoButton.addEventListener('click', function() {
    let nombre = nombreProducto.textContent;
    let precio = parseFloat(precioProducto.textContent);
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: 'Producto agregado al carrito\nNombre: ' + nombre + '\nPrecio: $' + precio.toFixed(2),
        showConfirmButton: false,
        timer: 1500
      });
});












// Objeto para almacenar los datos del formulario
const usuario = {
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
    const nombreIngresado = document.getElementById('nombre').value;
    const apellidoIngresado = document.getElementById('apellido').value;
    const emailIngresado = document.getElementById('email').value;

    // Asignar los valores al objeto "usuario"
    usuario.nombre = nombreIngresado;
    usuario.apellido = apellidoIngresado;
    usuario.email = emailIngresado;




//GENERAR UN CODIGO DE DESCUENTO CON LA MATH.RANDOM



let botonDescuento = document.querySelector("#generarDescuento");
botonDescuento.addEventListener("click", mostrarCodigo);


function mostrarCodigo(){
    let generarCodigoDescuento = () => {
        let codigo = Math.floor(Math.random() *10000);
      
        return codigo;
      }
      
      let codigoDescuento = generarCodigoDescuento();
      
      alert(`Su codigo de descuento es: DESC${codigoDescuento}`)

}


