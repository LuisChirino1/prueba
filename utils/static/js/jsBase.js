function numerosLetrasSinCaracteresEspeciales(event){
    var code =event.charCode || event.keyCode;
    if(code==46 || code== 8){
        code=48;
    }
    if ((code < 48 || code > 57)&&
        (code < 65 || code > 90)&&
        (code < 97 || code > 122)&&
        code > 32)
            if(window.event){
                event.returnValue = false;
            }else{
                event.preventDefault();
            }
    if (code == 13)
        if(window.event){
            event.returnValue = false;
        }else{
            event.preventDefault();
        }
}

function soloNumeros(event){
    var code =event.charCode || event.keyCode;
    if(code==46 || code== 8){
        code=48;
    }
    if ((code< 48) || (code> 57)){
        if(window.event){
            event.returnValue = false;
        }else{
            event.preventDefault();
        }
    }
}

function numerosLetrasPunto(e){
    var key;
    var keychar;

    if (window.event) {
        key = e.keyCode;
    }
    else if (e.which) {
        key = e.which;
    }else{return true;}



    if ( (key >= 65 && key <= 90)     || //LETRAS MAYUSCULAS
        (key >= 97 && key <= 122)    || //LETRAS MINUSCULAS
        (key == 241) || (key == 209) || //ñ Ñ
        (key == 225) || (key == 193) || //á Á
        (key == 233) || (key == 201) || //é É
        (key == 237) || (key == 205) || //í Í
        (key == 243) || (key == 211) || //ó Ó
        (key == 250) || (key == 218) || //ú Ú
        (key == 9)   || // Tabulador
        (key == 8)   ||  (key == 32)||
        (key >= 48 && key <= 57) ||
        (key ==46)  ) {  //BACKSPACE,  || (key == 32)Espacio "."


        return true;
    }
    return false;

}

function verificarSelect(){
    var sel = document.getElementById( 'sel' );

    if( sel.options[ sel.selectedIndex ].value !="" && sel.options[ sel.selectedIndex ].value !=0){

        var contenedorCamposModificarMarca=document.getElementById("contenedorCamposModificarMarca");
        var contenedorConsultaMarca=document.getElementById("contenedorConsultaMarca");
        var contenedorDetalleConsultaMarca=document.getElementById("contenedorDetalleConsultaMarca");

        if( sel.options[ sel.selectedIndex ].value ==1){
            document.getElementById("mensaje").innerHTML="";
            document.getElementById('solicitudNombreMarca').value="";
            document.getElementById("solicitudNombreMarca").disabled=false;
            document.getElementById("contenedorDatos").style.display="block";
            contenedorConsultaMarca!=null?contenedorConsultaMarca.style.display="none":null;
            contenedorCamposModificarMarca!=null?contenedorCamposModificarMarca.style.display="none":null;
            contenedorDetalleConsultaMarca!=null?contenedorDetalleConsultaMarca.style.display="none":null;

        }else if( sel.options[ sel.selectedIndex ].value ==2){
            document.getElementById('solicitudNombreMarca').value="";
            document.getElementById("solicitudNombreMarca").disabled=false;
            document.getElementById("contenedorDatos").style.display="none";
            contenedorConsultaMarca!=null?contenedorConsultaMarca.style.display="none":null;
            contenedorCamposModificarMarca!=null?contenedorCamposModificarMarca.style.display="none":null;
            contenedorDetalleConsultaMarca!=null?contenedorDetalleConsultaMarca.style.display="none":null;
            consultarMarcasTodos();
        }else if( sel.options[ sel.selectedIndex ].value =="select"){
            document.getElementById("contenedorCamposModificarMarca").style.display="none";
            document.getElementById("contenedorDatos").style.display="none";
            contenedorConsultaMarca!=null?contenedorConsultaMarca.style.display="none":null;
            contenedorCamposModificarMarca!=null?contenedorCamposModificarMarca.style.display="none":null;
            contenedorDetalleConsultaMarca!=null?contenedorDetalleConsultaMarca.style.display="none":null;
        }
    }
}

function verificarSelectProducto(){
    var sel = document.getElementById( 'sel' );

    if( sel.options[ sel.selectedIndex ].value !="" && sel.options[ sel.selectedIndex ].value !=0){

        var contenedorCamposModificarProducto=document.getElementById("contenedorCamposModificarProducto");
        var contenedorConsultaProducto=document.getElementById("contenedorConsultaProducto");
        var contenedorDetalleConsultaProducto=document.getElementById("contenedorDetalleConsultaProducto");

        if( sel.options[ sel.selectedIndex ].value ==1){
            document.getElementById("mensaje").innerHTML="";
            document.getElementById('solicitudItemId').value="";
            document.getElementById("solicitudItemId").disabled=false;
            document.getElementById("contenedorDatosItemId").style.display="block";
            document.getElementById("contenedorDatosMarca").style.display="none";
            contenedorConsultaProducto!=null?contenedorConsultaProducto.style.display="none":null;
            contenedorDetalleConsultaProducto!=null?contenedorDetalleConsultaProducto.style.display="none":null;
            document.getElementById('solicitudMarcaProducto').value="";
            document.getElementById("solicitudMarcaProducto").disabled=false;
        }else if( sel.options[ sel.selectedIndex ].value ==2){
            document.getElementById("mensaje").innerHTML="";
            document.getElementById('solicitudMarcaProducto').value="";
            document.getElementById("solicitudMarcaProducto").disabled=false;
            document.getElementById("contenedorDatosItemId").style.display="none";
            document.getElementById("contenedorDatosMarca").style.display="block";
            contenedorConsultaProducto!=null?contenedorConsultaProducto.style.display="none":null;
            contenedorDetalleConsultaProducto!=null?contenedorDetalleConsultaProducto.style.display="none":null;
            document.getElementById('solicitudItemId').value="";
            document.getElementById("solicitudItemId").disabled=false;
        }else if( sel.options[ sel.selectedIndex ].value ==3){
            contenedorConsultaProducto!=null?contenedorConsultaProducto.style.display="none":null;
            contenedorDetalleConsultaProducto!=null?contenedorDetalleConsultaProducto.style.display="none":null;
            document.getElementById('solicitudItemId').value="";
            document.getElementById("solicitudItemId").disabled=false;
            document.getElementById('solicitudMarcaProducto').value="";
            document.getElementById("solicitudMarcaProducto").disabled=false;
            consultarProductosTodosCargar();
        }else if( sel.options[ sel.selectedIndex ].value =="select"){
            document.getElementById("contenedorDatosItemId").style.display="none";
            document.getElementById("contenedorDatosMarca").style.display="none";
            contenedorConsultaProducto!=null?contenedorConsultaProducto.style.display="none":null;
            contenedorCamposModificarProducto!=null?contenedorCamposModificarProducto.style.display="none":null;
            contenedorDetalleConsultaProducto!=null?contenedorDetalleConsultaProducto.style.display="none":null;
        }
    }
}

function mostrarDetalleServicio(id, grupoServicio, nombre, descripcion, estatus, idContrato, usuarioCrea, fechaCreacion, usuarioModifica, fechaModifica, origenTransaccion){
    document.getElementById("detalleIdServicio").innerHTML=id;
    if (grupoServicio==0){
        grupoServicio='Sin Servicio';
    }else if(grupoServicio==1){
        grupoServicio='Datos';
    }
    document.getElementById("detalleGrupoServicio").innerHTML=grupoServicio;
    document.getElementById("detalleNombreServicio").innerHTML=nombre;
    document.getElementById("nombreServicio").value=nombre;
    document.getElementById("detalleDescripcionServicio").innerHTML=descripcion;
    if (estatus=='A'){
        estatus='Activo';
    }else if(estatus=='I'){
        estatus='Inactivo';
    }
    document.getElementById("detalleEstatusServicio").innerHTML=estatus;
    document.getElementById("detalleContratoServicio").innerHTML=idContrato;
    document.getElementById("detalleUsuarioCreacion").innerHTML=usuarioCrea;
    document.getElementById("detalleFechaCreacion").innerHTML=fechaCreacion;
    document.getElementById("detalleUsuarioModifica").innerHTML=usuarioModifica;
    document.getElementById("detalleFechaModifica").innerHTML=fechaModifica;

    document.getElementById("contenedorDatos").style.display="none";
    document.getElementById("contenedorDetalleConsultaServicio").style.display="none"

    // validacion que separa el flujo:
    // si viene desde consultar marca muestra el detalle de la marca seleccionada
    // sino va directo a modificar marca.
    if (origenTransaccion=="consultarServicio"){
        document.getElementById("contenedorConsultaServicio").style.display="none";
        document.getElementById("contenedorDetalleConsultaServicio").style.display="block";
    }else
    if(origenTransaccion=="modificarServicio"){

        modificarServicio();
    }

}

function mostrarDetallePlan(id,nombre,descripcion,estatus,usuarioCrea,fechaCreacion,usuarioModifica,fechaModifica,tipoLinea,origenTransaccion){
    document.getElementById("idPlan").value=id;
    document.getElementById("detalleIdPlan").value=id;
    document.getElementById("detalleNombrePlan").innerHTML=nombre;
    document.getElementById("detalleDescripcionPlan").innerHTML=descripcion;
    if (estatus=='A'){
        estatus='Activo';
    }else if(estatus=='I'){
        estatus='Inactivo';
    }
    document.getElementById("detalleEstatusPlan").innerHTML= estatus;
    document.getElementById("detalleUsuarioCrea").innerHTML=usuarioCrea;
    document.getElementById("detalleFechaCrea").innerHTML=fechaCreacion;
    document.getElementById("detalleUsuarioModifica").innerHTML=usuarioModifica;
    document.getElementById("detalleFechaModifica").innerHTML=fechaModifica;
    if (tipoLinea==1){
        tipoLinea='Prepago';
    }else if(tipoLinea==2){
        tipoLinea='Pospago';
    }else if(tipoLinea==3){
        tipoLinea='Prepago y Pospago';
    }
    document.getElementById("detalleTipoLinea").innerHTML=tipoLinea;
    document.getElementById("contenedorDatos").style.display="none";
    document.getElementById("contenedorDetalleConsultaPlan").style.display="none"
    if (origenTransaccion=="consultarPlan"){
        document.getElementById("contenedorConsultaPlan").style.display="none";
        document.getElementById("contenedorDetalleConsultaPlan").style.display="block";
    }else
    if(origenTransaccion=="modificarPlan"){
        modificarPlan(origenTransaccion);
    }
}

function mostrarMensajeInsertarMarca(mensaje){
    if(mensaje=='fallido'){
        jAlert('Su marca no pudo ser agregada')
    }else{
        jAlert('Su marca ha sido agregada exitosamente');
    }
}

function modificarMarca(){

    jConfirm("Esta seguro que desea modificar este elemento?",null, function (respuesta) {
        if (respuesta) {
            document.getElementById("idMarca").value=document.getElementById("detalleIdMarca").value;
            document.getElementById("nombreMarca").value=document.getElementById("detalleNombreMarca").innerHTML;
            document.getElementById("descripcionMarca").innerHTML=document.getElementById("detalleDescripcionMarca").innerHTML;
            if (document.getElementById("detalleEstatusMarca").innerHTML=='Inactivo'){
                document.getElementById("detalleEstatusMarca").innerHTML='I';
            }
            else{
                document.getElementById("detalleEstatusMarca").innerHTML='A';
            }
            document.getElementById("estatusMarca").value= document.getElementById("detalleEstatusMarca").innerHTML;
            document.getElementById("codigoMarca").value=document.getElementById("detalleCodigoMarca").innerHTML;

            document.getElementById("contenedorCamposModificarMarca").style.display="block";
            document.getElementById("contenedorConsultaMarca").style.display="none";
            document.getElementById("contenedorDatos").style.display="none";
            document.getElementById("contenedorDetalleConsultaMarca").style.display="none";
        }
        });
}

function mostrarDetalleMarca(id, nombre, descripcion, estatus, codigo, usuarioCrea, fechaCreacion, usuarioModifica,fechaModifica, origenTransaccion){
        document.getElementById("detalleIdMarca").value=id;
        document.getElementById("detalleNombreMarca").innerHTML=nombre;
        document.getElementById("detalleDescripcionMarca").innerHTML=descripcion;
        if (estatus=='A'){
            estatus='Activo';
        }else if(estatus=='I'){
            estatus='Inactivo';
        }
        document.getElementById("detalleEstatusMarca").innerHTML=estatus;
        document.getElementById("detalleCodigoMarca").innerHTML=codigo;
        document.getElementById("detalleUsuarioCreaMarca").innerHTML=usuarioCrea;
        document.getElementById("detalleFechaCreaMarca").innerHTML=fechaCreacion;
        document.getElementById("detalleUsuarioModificaMarca").innerHTML=usuarioModifica;
        document.getElementById("detalleFechaModificaMarca").innerHTML=fechaModifica;
        document.getElementById("contenedorCamposModificarMarca").style.display="none";

        document.getElementById("contenedorDatos").style.display="none";
        document.getElementById("contenedorDetalleConsultaMarca").style.display="none"

    // validacion que separa el flujo:
    // si viene desde consultar marca muestra el detalle de la marca seleccionada
    // sino va directo a modificar marca.
        if (origenTransaccion=="consultarMarca"){
            document.getElementById("contenedorConsultaMarca").style.display="none";
            document.getElementById("contenedorDetalleConsultaMarca").style.display="block";
        }else
            if(origenTransaccion=="modificarMarca"){

                modificarMarca();
            }

}



function mostrarDetallePaquete(id, nombre, descripcion, grupoPaquete, estatus, contrato, usuarioCrea, fechaCreacion, usuarioModifica, fechaModifica, origenTransaccion){
    document.getElementById("detalleIdPaquete").value=id;
    document.getElementById("codigoPaquete").value=id;
    document.getElementById("detalleNombrePaquete").innerHTML=nombre;
    document.getElementById("detalleDescripcionPaquete").innerHTML=descripcion;
    if (grupoPaquete==0){
        grupoPaquete='Sin Paquete';
    }
    document.getElementById("detalleGrupoPaquete").innerHTML=grupoPaquete;
    if (estatus=='A'){
        estatus='Activo';
    }else if(estatus=='I'){
        estatus='Inactivo';
    }
    document.getElementById("detalleEstatusPaquete").innerHTML=estatus;
    document.getElementById("detalleUsuarioCreacion").innerHTML=usuarioCrea;
    document.getElementById("detalleFechaCreacion").innerHTML=fechaCreacion;
    document.getElementById("detalleUsuarioModifica").innerHTML=usuarioModifica;
    document.getElementById("detalleFechaModifica").innerHTML=fechaModifica;
    document.getElementById("contenedorDatos").style.display="none";
    document.getElementById("contenedorDetalleConsultaPaquete").style.display="none"
    if (origenTransaccion=="consultarPaquete"){
        document.getElementById("contenedorConsultaPaquete").style.display="none";
        document.getElementById("contenedorDetalleConsultaPaquete").style.display="block";
    }else
    if(origenTransaccion=="modificarPaquete"){
        modificarPaquete();
    }
}

function cancelarModificacion(){
    //Se envian los datos para modificar el producto

}

function modificarPie(mensajeTran){
    if (mensajeTran=='limpiarPie'){
        document.getElementById("msjPie").value="";
        objetoImg = document.getElementById("imgMsjTran");
        objetoImg.src="/static/img/pie_esq_izq3.jpg";
        return
    }
    if (mensajeTran){
        document.getElementById("msjPie").value=mensajeTran;
        mensaje=mensajeTran;
        buscar = "exito";
        if(mensaje.indexOf(buscar) != -1){
            objetoImg = document.getElementById("imgMsjTran");
            objetoImg.src="/static/img/pie_esq_izq_true.jpg";

        }else{
            objetoImg = document.getElementById("imgMsjTran");
            objetoImg.src="/static/img/pie_esq_izq_error.jpg";
        }
    }
}

function cargarImagenPortal(filename,fileid,idimg,widVal,heiVal,textid){
    if (!(filename.files && filename.files[0])) {
        jAlert("No se tiene Imagen válida para mostrar.","AdministradorTiendaVirtual","");
    } else {
        var reader = new FileReader();
        reader.onload = function (e) {
            var extension = document.getElementById(fileid).value.substring(document.getElementById(fileid).value.lastIndexOf(".")+1).toLowerCase();

            if (extension != 'gif' && extension != 'jpg' && extension != 'jpeg' && extension != 'png'){
                document.getElementById(textid).value = "";
                document.getElementById(fileid).value = "";
                jAlert("Formato de imagen inválido.","AdministradorTiendaVirtual","");
            } else {
                var img=new Image();
                img.src = e.target.result;
                img.onload = function (){
                    if (img.width != widVal){
                        document.getElementById(textid).value = "";
                        document.getElementById(fileid).value = "";
                        jAlert("El Tamaño de la Imagen es incorrecto. Deber ser de " + widVal + " x " + heiVal + ".","AdministradorTiendaVirtual","");
                    }else if (img.height != heiVal) {
                        document.getElementById(textid).value = "";
                        document.getElementById(fileid).value = "";
                        jAlert("El Tamaño de la Imagen es incorrecto. Deber ser de " + widVal + " x " + heiVal + ".","AdministradorTiendaVirtual","");
                    }else {
                        $('#'+idimg).attr('src', e.target.result);
                    }
                }
            }
        }
        reader.readAsDataURL(filename.files[0]);
    }
}

function aceptarPortal(formulario){
    document.getElementById(formulario).submit();
}

function verificarSelectProductoAdministrar(){
    var sel = document.getElementById( 'sel' );

    if( sel.options[ sel.selectedIndex ].value !="" && sel.options[ sel.selectedIndex ].value !=0){

        var contenedorCamposModificarProducto=document.getElementById("contenedorCamposModificarProducto");
        var contenedorConsultaProducto=document.getElementById("contenedorConsultaProducto");
        var contenedorDetalleConsultaProducto=document.getElementById("contenedorDetalleConsultaProducto");

        if( sel.options[ sel.selectedIndex ].value ==1){
            document.getElementById("mensaje").innerHTML="";
            document.getElementById('solicitudItemId').value="";
            document.getElementById("solicitudItemId").disabled=false;
            document.getElementById("contenedorDatosItemId").style.display="block";
            document.getElementById("contenedorDatosMarca").style.display="none";
            contenedorConsultaProducto!=null?contenedorConsultaProducto.style.display="none":null;
            contenedorDetalleConsultaProducto!=null?contenedorDetalleConsultaProducto.style.display="none":null;
            document.getElementById('solicitudMarcaProducto').value="";
            document.getElementById("solicitudMarcaProducto").disabled=false;
        }else if( sel.options[ sel.selectedIndex ].value ==2){
            document.getElementById("mensaje").innerHTML="";
            document.getElementById('solicitudMarcaProducto').value="";
            document.getElementById("solicitudMarcaProducto").disabled=false;
            document.getElementById("contenedorDatosItemId").style.display="none";
            document.getElementById("contenedorDatosMarca").style.display="block";
            contenedorConsultaProducto!=null?contenedorConsultaProducto.style.display="none":null;
            contenedorDetalleConsultaProducto!=null?contenedorDetalleConsultaProducto.style.display="none":null;
            document.getElementById('solicitudItemId').value="";
            document.getElementById("solicitudItemId").disabled=false;
        }else if( sel.options[ sel.selectedIndex ].value ==3){
            contenedorConsultaProducto!=null?contenedorConsultaProducto.style.display="none":null;
            contenedorDetalleConsultaProducto!=null?contenedorDetalleConsultaProducto.style.display="none":null;
            document.getElementById('solicitudItemId').value="";
            document.getElementById("solicitudItemId").disabled=false;
            document.getElementById('solicitudMarcaProducto').value="";
            document.getElementById("solicitudMarcaProducto").disabled=false;
            consultarProductos_Act_Inac('activo');
        }else if( sel.options[ sel.selectedIndex ].value ==4){
            contenedorConsultaProducto!=null?contenedorConsultaProducto.style.display="none":null;
            contenedorDetalleConsultaProducto!=null?contenedorDetalleConsultaProducto.style.display="none":null;
            document.getElementById('solicitudItemId').value="";
            document.getElementById("solicitudItemId").disabled=false;
            document.getElementById('solicitudMarcaProducto').value="";
            document.getElementById("solicitudMarcaProducto").disabled=false;
            consultarProductos_Act_Inac('inactivo');
        }else if( sel.options[ sel.selectedIndex ].value =="select"){
            document.getElementById("contenedorDatosItemId").style.display="none";
            document.getElementById("contenedorDatosMarca").style.display="none";
            contenedorConsultaProducto!=null?contenedorConsultaProducto.style.display="none":null;
            contenedorCamposModificarProducto!=null?contenedorCamposModificarProducto.style.display="none":null;
            contenedorDetalleConsultaProducto!=null?contenedorDetalleConsultaProducto.style.display="none":null;
        }
    }
}