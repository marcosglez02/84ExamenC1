const llamandoFetch=()=>{
    const url ="/html/servicio.json";
    fetch(url).then(respuesta =>respuesta.json()).then(datos => mostrarDatos(datos)).catch((reject)=>{
        console.log("Ocurrió un error");
    })
    const mostrarDatos=(data)=>{
        let GananciaTotal = 0
        let res = document.getElementById('respuesta');
            res.innerHTML = `<thead><tr>
            <th scope="col" width="5%">Id</th>
            <th scope="col" width="10%">Id cliente</th>
            <th scope="col" width="25%">Descripción</th>
            <th scope="col" width="15%">Cantidad</th>
            <th scope="col" width="15%">Precio venta</th>
            <th scope="col" width="15%">Precio Compra</th>
            <th scope="col" width="15%">Ganancias</th>
            </tr></thead><tbody></tbody>`;
        for(let item of data){
            let Ganancia = 0;
            Ganancia = (item.preciocompra * item.preciovta)*item.cantidad
            GananciaTotal += Ganancia
            res.innerHTML += `<tr">
                    <th>${item.codigo}</th>
                    <td>${item.idcliente}</td>
                    <td>${item.descripcion}</td>
                    <td>${item.cantidad}</td>
                    <td>${item.preciovta}</td>
                    <td>${item.preciocompra}</td>
                    <td>${Ganancia}</td>
                </tr>`;
            document.querySelector("#tot").innerHTML = "Ganancias totales: " + GananciaTotal
        }
    }
}