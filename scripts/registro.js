let boton = document.getElementById('submit');
boton.addEventListener('click',capturaDatos);

function capturaDatos(){
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let telefono = document.getElementById('tlf').value;
    let direccion = document.getElementById('direccion').value;
    let textarea = document.getElementById('textarea').value;
    guardarLocalStorage(nombre,apellido,telefono,direccion,textarea);
    console.log(nombre,apellido,telefono,direccion,textarea);
}
function guardarLocalStorage(nom,ape,tel,dir,txtarea){
    localStorage.setItem('Nombre',nom);
    localStorage.setItem('Apellido',ape);
    localStorage.setItem('Teléfono',tel);
    localStorage.setItem('Dirección',dir);
    localStorage.setItem('TextArea',txtarea);
} 
