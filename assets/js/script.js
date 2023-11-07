var imgAmpliada = document.getElementById("imagen-ampliada");
var imgAmpliadaSrc = document.getElementById("imagen-ampliada-src");
var carpetaActual = "";
var imagenes = {}; // Objeto para almacenar las rutas de las imágenes por carpeta
let i = 1;

function mostrarImagen(src, carpeta) {

    imgAmpliada.style.display = "block";
    imgAmpliadaSrc.src = src;
    carpetaActual = carpeta;
    imagenes[carpetaActual] = []; // Inicializar la lista de imágenes para el evento actual
    console.log(imagenes[carpetaActual].push)

    let i = 1; // Comenzamos con la primera imagen

    function intentarCargarImagen() {
        let rutaImagen = `eventos/${carpeta}/foto${i}.jpg`;
        let imagen = new Image();

        imagen.onload = function () {
            // Si la imagen se carga con éxito, la agregamos a la lista
            imagenes[carpeta].push(`foto${i}.jpg`);
            i++;
            intentarCargarImagen(); // Intentamos cargar la siguiente imagen
        };

        imagen.onerror = function () {
            // Si la imagen no se puede cargar, hemos terminado
            console.log(`Se encontraron ${i - 1} imágenes en ${carpeta}.`);
        };

        imagen.src = rutaImagen; // Intentamos cargar la imagen
    }

    intentarCargarImagen(); // Comenzamos con el primer intento
}

function cerrarImagen() {
    var imgAmpliada = document.getElementById("imagen-ampliada");
    imgAmpliada.style.display = "none";
}

function mostrarSiguiente() {
    i++;

    if (i > imagenes[carpetaActual].length) {
        i =1
    }

    let rutaImagen = `eventos/${carpetaActual}/foto${i}.jpg`;
    let imagen = new Image();
   
    src = `eventos/${carpetaActual}/foto${i}.jpg`;
    imgAmpliadaSrc.src = src;
    imagen.src = rutaImagen; 
}

function mostrarAnterior() {
    i--;

    if (i < 1) {
        i = imagenes[carpetaActual].length
        console.log ( imagenes[carpetaActual].length)
     }
     
    let rutaImagen = `eventos/${carpetaActual}/foto${i}.jpg`;
    let imagen = new Image();
    console.log(rutaImagen)

   

    src = `eventos/${carpetaActual}/foto${i}.jpg`;
    imgAmpliadaSrc.src = src;
    imagen.src = rutaImagen; 
}
