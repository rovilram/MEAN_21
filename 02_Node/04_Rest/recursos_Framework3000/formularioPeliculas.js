let formularioPeliculas = {

    crearContenido : 
        function(){
            return `
                <div class="text-center page-header">
                    <h2 class="mt-4 mb-4">Aplicación de gestion de películas GestPeliculas 3000</h2>
                </div>   
                
                <div class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Peliculas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Directores</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Actores</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Salir</a>
                        </li>
                    </ul>
                </div> 
                
                <h3 class="text-center mt-3 mb-3">
                    Formulario de películas
                </h3>

                <div class="text-center">
                    <button id="btnInsertar"  class="btn btn-primary mr-1">Insertar</button>
                    <button id="btnModificar" class="btn btn-primary mr-1">Modificar</button>
                    <button id="btnBorrar"    class="btn btn-danger  mr-1">Borrar</button>
                    <button id="btnVaciar"    class="btn btn-warning mr-1">Vaciar</button>
                    <button id="btnVolver"    class="btn btn-warning mr-1">Volver</button>
                </div>
                
                <br/>
                
                <div class="row" id="formulario">
                    <div class="row col-sm-12 offset-sm-0 col-md-8 offset-md-2">
                        <div class="col-2 mt-1">
                            <label>Título</label>
                        </div>
                        <div class="col-10 mt-1">
                            <input id="titulo" class="form-control"/>
                        </div>
                        
                        <div class="col-2 mt-1">
                            <label>Director</label>
                        </div>
                        <div class="col-10 mt-1">
                            <input id="director" class="form-control"/>
                        </div>                 
                        
                        <div class="col-2 mt-1">
                            <label>Género</label>
                        </div>
                        <div class="col-10 mt-1">
                            <input id="genero" class="form-control"/>
                        </div>
                        
                        <div class="col-2 mt-1">
                            <label>Año</label>
                        </div>
                        <div class="col-10 mt-1">
                            <input id="year" class="form-control"/>
                        </div>

                        <div class="col-2 mt-1">
                            <label>Sinopsis</label>
                        </div>
                        <div class="col-10 mt-1">
                            <textarea id="sinopsis" class="form-control"></textarea>
                        </div>
                    </div>    
                </div>        
                `                
        },

    inicializar : 
        function (parametros){
            console.log("Inicializando formularioPeliculas")
            $("#btnInsertar").click(this.insertarPelicula)
            //$("#btnModificar").click(this.mofidicarPelicula)
            //$("#btnBorrar").click(this.borrarPelicula)
            $("#btnVaciar").click(this.vaciarFormulario)
            $("#btnVolver").click(this.verListado)
        
            //Averiguamos si nos han pasado un id de pelicula
            //para rellenar el formulario
            if(parametros){
                this.obtenerPelicula(parametros.idPelicula)
            }            
        },

    vaciarFormulario : function(){
            $("#formulario input,select,textarea").val("")
        },
        
    verListado : function(){
            framework3000.navegar("listadoPeliculas")
        },
        
    insertarPelicula : function(){
        
            //Validar...
        
            let pelicula = {
                titulo   : $("#titulo").val(),
                director : $("#director").val(),
                genero   : $("#genero").val(),
                year     : $("#year").val(),
                sinopsis : $("#sinopsis").val()
            }
        
            $.ajax({
                type : "POST",
                url  : "/peliculas",
                contentType : 'application/json',
                data : JSON.stringify(pelicula)
            })
            .done(this.verListado)
            .fail(this.mostrarError)
        },
        
    mostrarError : function(){
            console.log("ERROR!")
        },
        
    obtenerPelicula : function(idPelicula){
            $.ajax({
                url : '/peliculas/'+idPelicula
            })
            .done(this.rellenarFormulario)
            .fail(this.mostrarError)
        
        },
        
    rellenarFormulario : function(pelicula){
            with(pelicula){
                $("#titulo").val(titulo)
                $("#director").val(director)
                $("#genero").val(genero)
                $("#year").val(year)
                $("#sinopsis").val(sinopsis)        
            }        
        }
}
