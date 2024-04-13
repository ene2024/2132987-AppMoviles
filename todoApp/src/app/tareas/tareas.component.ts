import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {

  tareas = [
    {
      nombre: 'Completar informe de proyecto',
      detalles: 'Preparar el informe con todos los detalles y conclusiones del proyecto para la reunión de mañana.',
      fechaEntrega: '2024-04-15'
    },
    {
      nombre: 'Comprar ingredientes para la cena',
      detalles: 'Ir al supermercado y comprar los ingredientes necesarios para preparar la cena de esta noche.',
      fechaEntrega: '2024-04-12'
    }
  ];

  constructor() { }

  ngOnInit() {}

}



