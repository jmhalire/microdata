import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { CaracteristicasComponent } from './components/caracteristicas/caracteristicas.component';
import { EtapaFilosoficaComponent } from './components/etapa-filosofica/etapa-filosofica.component';
import { AuditoriaIeComponent } from './components/auditoria-ie/auditoria-ie.component';
import { MatrizCompetenciasComponent } from './components/matriz-competencias/matriz-competencias.component';
import { SidenavService } from '@services/sidenav.service';
import { MatrizFodaComponent } from './components/matriz-foda/matriz-foda.component';
import { MatrizPeEaComponent } from './components/matriz-pe-ea/matriz-pe-ea.component';
import { MatrizMpecComponent } from './components/matriz-mpec/matriz-mpec.component';
import { EnumeracionObjetivosComponent } from './components/enumeracion-objetivos/enumeracion-objetivos.component';
import { ImplementacionEstrategiaComponent } from './components/implementacion-estrategia/implementacion-estrategia.component';
import { AplicacionEstrategiaComponent } from './components/aplicacion-estrategia/aplicacion-estrategia.component';
import { ConclusionesComponent } from './components/conclusiones/conclusiones.component';
import { RecomendacionesComponent } from './components/recomendaciones/recomendaciones.component';
import { BibleografiaComponent } from './components/bibleografia/bibleografia.component';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, SidenavComponent, ResumenComponent, PresentacionComponent,
    CaracteristicasComponent, EtapaFilosoficaComponent, AuditoriaIeComponent, MatrizCompetenciasComponent, MatrizFodaComponent, MatrizPeEaComponent, MatrizMpecComponent, EnumeracionObjetivosComponent, ImplementacionEstrategiaComponent, AplicacionEstrategiaComponent, ConclusionesComponent, RecomendacionesComponent, BibleografiaComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    SidenavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
