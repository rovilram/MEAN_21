import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PieComponent } from './componentes/pie/pie.component';
import { ListadoDiscosComponent } from './componentes/listado-discos/listado-discos.component';
import { FormularioDiscosComponent } from './componentes/formulario-discos/formulario-discos.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

let rutas:Routes = [
  {
    path      : '',
    component : ListadoDiscosComponent
  },
  {
    path      : 'listadoDiscos',
    component : ListadoDiscosComponent
  },
  {
    path      : 'formularioDiscos',
    component : FormularioDiscosComponent
  }
]

@NgModule({
  declarations: [
    PieComponent,
    AppComponent,
    MenuComponent,
    CabeceraComponent,
    ListadoDiscosComponent,
    FormularioDiscosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }