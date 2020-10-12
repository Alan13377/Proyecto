const formcosto = document.querySelector('#fijos');

eventListeners2();

function eventListeners2(){
    formcosto.addEventListener('submit', leerFormulario2);
}

function leerFormulario2(e){
    e.preventDefault();
    const servicio = document.querySelector('#servicios').value,
    costo = document.querySelector('#costof').value;
    if(servicio === '' || costo === '' ||  costo < 0){
        mostraralerta("Todos los campos son obligatorios", 'error');
    }else{
        console.log(costo);
        cantidades();
        newRowTable();
        calcularsumaTotales()
    }
}

function mostraralerta(mensaje,clase){
    const notificacion = document.createElement('div');
    notificacion.classList.add(clase,'notificacion','sombra');
    notificacion.textContent = mensaje;

    formcosto.insertBefore(notificacion, document.querySelector('form Legend'));

    setTimeout(() => {
        notificacion.classList.add('visible');
        setTimeout(() => {
            notificacion.classList.remove('visible');
            notificacion.remove();
        },3000);
    },100);
}


function cantidades(){
    var a = parseFloat(document.getElementById("costof").value);
     var t = a;
    document.getElementById("totalf").value = t;
}

function newRowTable(){
    var ser = document.getElementById("servicios").value;
    var cos = document.getElementById("costof").value;
    var total = document.getElementById("totalf").value;

    var table = document.getElementsByClassName("listado-fijos");

    var table = document.getElementById("listado-fijos");

    var row = table.insertRow(0+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = ser;
    cell2.innerHTML = cos;
    cell3.innerHTML = '<p name="total_p[]">'+total+'</p>';
}

function calcularsumaTotales(){
    var totales_n=0;
    var array_totales = document.getElementsByName("total_p[]");
    for(var i=0;i<array_totales.length;i++){
        totales_n+=parseFloat(array_totales[i].innerHTML);
    }
    document.getElementById("Totales").value = totales_n;
}

