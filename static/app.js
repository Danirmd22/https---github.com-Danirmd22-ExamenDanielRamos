console.log("Hola mundo...");

// Continuar codigo javascript desde aqui ...

const dialog = document.querySelector("#dialogRegistro");
const btnRegistro = document.querySelector("#btnRegistr");
const dialogBorrar = document.querySelector("#DborrarCoche");
const btnRegistroBorrar = document.querySelector("#borrarCoche");
const cerrarDialogo = document.querySelector('#cerrarModal');


btnRegistroBorrar.addEventListener("click",()=>{
    console.log("funciona");
    dialogBorrar.showModal();
})

btnRegistro.addEventListener("click",()=>{
    console.log("funciona");
    dialog.showModal();
})

cerrarDialogo.addEventListener("click",()=>{
    console.log("funciona");
    dialogBorrar.close();
})


