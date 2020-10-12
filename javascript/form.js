
const formmateria = document.querySelector('#materia');

eventListeners();

function eventListeners(){
    formmateria.addEventListener('submit', leerFormulario);
}

function leerFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value,
    opciones = document.querySelector('#opciones').value,
    cantidad = document.querySelector('#cantidad').value,
    costo = document.querySelector('#costo').value,
    total = document.querySelector('#total').value;
    if(nombre === '' || opciones === '' || cantidad === '' || costo === '' || cantidad < 0  || costo < 0){
        mostraralerta("Todos los campos son obligatorios", 'error');
    }else{
        console.log("llenos");
        cantidades();
        newRowTable();
        calcularsumaTotales();
    }
}

function mostraralerta(mensaje,clase){
    const notificacion = document.createElement('div');
    notificacion.classList.add(clase,'notificacion','sombra');
    notificacion.textContent = mensaje;

    formmateria.insertBefore(notificacion, document.querySelector('form Legend'));

    setTimeout(() => {
        notificacion.classList.add('visible');
        setTimeout(() => {
            notificacion.classList.remove('visible');
            notificacion.remove();
        },3000);
    },100);
}


function cantidades(){
    var a = parseFloat(document.getElementById("costo").value);
    var b = parseInt(document.getElementById('cantidad').value);
     var t = a*b;
    document.getElementById("total").value = t;
}

function newRowTable(){
    var ingre = document.getElementById("nombre").value;
    var uni = document.getElementById("opciones").value;
    var cant = document.getElementById("cantidad").value;
    var cos = document.getElementById("costo").value;
    var total = document.getElementById("total").value;

    var table = document.getElementById("listado-costos");

    var row = table.insertRow(0+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = ingre;
    cell2.innerHTML = uni;
    cell3.innerHTML = cant;
    cell4.innerHTML = cos;
    cell5.innerHTML = '<p name="total_p[]">'+total+'</p>';
    
}

function calcularsumaTotales(){
    var totales_n=0;
    var array_totales = document.getElementsByName("total_p[]");
    for(var i=0;i<array_totales.length;i++){
        totales_n+=parseFloat(array_totales[i].innerHTML);
    }
    document.getElementById("Totales").value = totales_n;
}




