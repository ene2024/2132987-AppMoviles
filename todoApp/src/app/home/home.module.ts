import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TareasComponent } from '../tareas/tareas.component';
import { AgregarTareasComponent } from '../agregar-tareas/agregar-tareas.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, TareasComponent, AgregarTareasComponent]
})
export class HomePageModule {}
