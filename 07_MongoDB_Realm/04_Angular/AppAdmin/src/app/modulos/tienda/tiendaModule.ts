import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { PerfilComponent } from "../usuarios/componentes/perfil/perfil.component";
import { MaquetacionTiendaComponent } from "./componentes/maquetacion-tienda/maquetacion-tienda.component";
import { MenuComponent } from "./componentes/menu/menu.component";

@NgModule({
    declarations: [
      MenuComponent,
      MaquetacionTiendaComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule, 
        RouterModule.forRoot(TiendaModule.rutasMaquetacionTienda)
    ],
    exports: [
        MaquetacionTiendaComponent
    ]
  })
export class TiendaModule {

    public static rutasMaquetacionTienda = [
      //
      //Rutas para la segunda carpeta de la barra del navegador:  
      //
      {
        path      : 'perfil',
        component : PerfilComponent
      },
    ]
}