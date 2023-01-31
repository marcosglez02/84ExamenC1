const llamandoFetch=()=>{
    const url ="/html/servicio.json";
    fetch(url).then(respuesta =>respuesta.json()).then(datos => mostrarDatos(datos)).catch((reject)=>{
        console.log("Ocurrió un error");
    })
    const mostrarDatos=(data)=>{
        let GananciaTotal = 0
        let diseño = "";
        let contador = 0;
        let res = document.getElementById('respuesta');
            res.innerHTML = `<thead><tr>
            <th width="5%">Id</th>
            <th width="10%">Id cliente</th>
            <th width="25%">Descripción</th>
            <th width="15%">Cantidad</th>
            <th width="15%">Precio venta</th>
            <th width="15%">Precio Compra</th>
            <th width="15%">Ganancias</th>
            </tr></thead><tbody></tbody>`;
        for(let item of data){
            contador = contador+1;
            if(contador %2 === 0){
                diseño="par"
            }else{
                diseño="impar"
            }
            let Ganancia = 0;
            Ganancia = (item.preciocompra * item.preciovta)*item.cantidad
            GananciaTotal += Ganancia
            res.innerHTML += `<tr class="${diseño}">
                    <td>${item.codigo}</td>
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