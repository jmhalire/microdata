import { Injectable } from '@angular/core';
import { SidenavLink } from '@interfaces/sidenav-link';
@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  constructor() {}

  public links(): SidenavLink[] {
    //if register active
    return [
      {
        classElement: 'fas fa-calendar-check me-3',
        url: './resumen',
        nameLink: 'resumen',
      },
      {
        classElement: 'fas fa-user-tie me-3',
        url: './presentacion',
        nameLink: 'presentacion',
      },
      {
        classElement: 'fas fa-address-book me-3',
        url: './caracteristicas-de-la-empresa',
        nameLink: 'caracteristicas',
      },
      {
        classElement: 'fa fa-fw fa-users me-3',
        url: './etapa-filosofica',
        nameLink: 'etapa filosofica',
      },
      {
        classElement: 'fas fa-chalkboard-teacher me-3',
        url: './auditoria-externa-e-interna',
        nameLink: 'auditoria externa e interna',
      },
      {
        classElement: 'fas fa-chalkboard-teacher me-3',
        url: './matriz-de-competencias',
        nameLink: 'matriz de competencias',
      },
      {
        classElement: 'fas fa-chalkboard-teacher me-3',
        url: './matriz-foda-y-estrategica-FO-FA-DO-DA',
        nameLink: 'matriz FODA',
      },
      {
        classElement: 'fas fa-chalkboard-teacher me-3',
        url: './matriz-PEyEA-BCG-IE-ESTRATEGIA-PRINCIPAL',
        nameLink: 'matriz PEyEA BCG IE EP',
      },
      {
        classElement: 'fas fa-chalkboard-teacher me-3',
        url: './matriz-de-planeacon-estrategica-cuantitativa-(MPEC)',
        nameLink: 'matriz MPEC',
      },
      {
        classElement: 'fas fa-chalkboard-teacher me-3',
        url: './enumeracion-de-los-objetivos-(EJES)-estrategicos',
        nameLink: 'enumeracion de ejes estrategicos',
      },
      {
        classElement: 'fas fa-chalkboard-teacher me-3',
        url: './implementacion-de-la-accion-estrategica',
        nameLink: 'implementacion de la accion estrategica',
      },
      {
        classElement: 'fas fa-chalkboard-teacher me-3',
        url: './como-afecta-a-la-organizacion-la-aplicacion-de-los-objetivos-estrategicos',
        nameLink: 'como afecta a la organizacion la aplicacion de los objetivos estrategicos',
      },
      {
        classElement: 'fas fa-chalkboard-teacher me-3',
        url: './conclusiones',
        nameLink: 'conclusiones',
      },
      {
        classElement: 'fas fa-chalkboard-teacher me-3',
        url: './recomendaciones',
        nameLink: 'recomendaciones',
      },
      {
        classElement: 'fas fa-chalkboard-teacher me-3',
        url: './bibleografia-y-fuentes',
        nameLink: 'bibleografia y fuentes',
      }
    ];
  }
}
