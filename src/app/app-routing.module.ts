import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicacionEstrategiaComponent } from './components/aplicacion-estrategia/aplicacion-estrategia.component';
import { AuditoriaIeComponent } from './components/auditoria-ie/auditoria-ie.component';
import { BibleografiaComponent } from './components/bibleografia/bibleografia.component';
import { CaracteristicasComponent } from './components/caracteristicas/caracteristicas.component';
import { ConclusionesComponent } from './components/conclusiones/conclusiones.component';
import { EnumeracionObjetivosComponent } from './components/enumeracion-objetivos/enumeracion-objetivos.component';
import { EtapaFilosoficaComponent } from './components/etapa-filosofica/etapa-filosofica.component';
import { ImplementacionEstrategiaComponent } from './components/implementacion-estrategia/implementacion-estrategia.component';
import { MatrizCompetenciasComponent } from './components/matriz-competencias/matriz-competencias.component';
import { MatrizFodaComponent } from './components/matriz-foda/matriz-foda.component';
import { MatrizMpecComponent } from './components/matriz-mpec/matriz-mpec.component';
import { MatrizPeEaComponent } from './components/matriz-pe-ea/matriz-pe-ea.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { RecomendacionesComponent } from './components/recomendaciones/recomendaciones.component';
import { ResumenComponent } from './components/resumen/resumen.component';

const routes: Routes = [
  {path: '', redirectTo:'resumen', pathMatch:'full'},
  {path: 'resumen', component: ResumenComponent},
  {path: 'presentacion', component: PresentacionComponent},
  {path: 'caracteristicas-de-la-empresa', component: CaracteristicasComponent},
  {path: 'etapa-filosofica', component: EtapaFilosoficaComponent},
  {path: 'auditoria-externa-e-interna', component: AuditoriaIeComponent},
  {path: 'matriz-de-competencias', component: MatrizCompetenciasComponent},
  {path: 'matriz-foda-y-estrategica-FO-FA-DO-DA', component: MatrizFodaComponent},
  {path: 'matriz-PEyEA-BCG-IE-ESTRATEGIA-PRINCIPAL', component: MatrizPeEaComponent},
  {path: 'matriz-de-planeacon-estrategica-cuantitativa-(MPEC)', component: MatrizMpecComponent},
  {path: 'enumeracion-de-los-objetivos-(EJES)-estrategicos', component: EnumeracionObjetivosComponent},
  {path: 'implementacion-de-la-accion-estrategica', component: ImplementacionEstrategiaComponent},
  {path: 'como-afecta-a-la-organizacion-la-aplicacion-de-los-objetivos-estrategicos', component: AplicacionEstrategiaComponent},
  {path: 'conclusiones', component: ConclusionesComponent},
  {path: 'recomendaciones', component: RecomendacionesComponent},
  {path: 'bibleografia-y-fuentes', component: BibleografiaComponent},
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
